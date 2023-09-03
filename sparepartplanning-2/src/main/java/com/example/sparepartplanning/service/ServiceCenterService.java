package com.example.sparepartplanning.service;

import com.example.sparepartplanning.*;
import com.example.sparepartplanning.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ServiceCenterService {
    @Autowired
    private JobSheetRepository jobSheetRepository;

    @Autowired
    private SparePartRepository sparePartRepository;

    @Autowired
    private ServiceCenterRepository serviceCenterRepository;

    @Autowired
    private InventoryRepository inventoryRepository;

    @Autowired
    private PartRequirementRepository partRequirementRepository;

    public JobSheet createJobSheet(JobSheet jobSheet) {
        Optional<ServiceCenter> serviceCenter = serviceCenterRepository.findById(jobSheet.getServiceCenter().getCenterId());
        if (serviceCenter.isPresent()) {
            jobSheet.setServiceCenter(serviceCenter.get());
            jobSheet.setJobStatus(JobStatus.Pending);
        } else {
            throw new RuntimeException("Invalid service center");
        }
        return jobSheetRepository.save(jobSheet);
    }

    public JobSheet diagnoseDevice(Long jobId, Map<String,Integer> skus) {
        JobSheet jobSheet = jobSheetRepository.findById(jobId).orElseThrow();
        if (skus != null && !skus.isEmpty()) {
            List<SparePart> requiredParts = sparePartRepository.findAllBySkuIn(skus.keySet().stream().toList());
            List<Inventory> inventories = inventoryRepository.findAllByServiceCenter(jobSheet.getServiceCenter());
            List<PartRequirement> unavailableInventory = new ArrayList<>();
            jobSheet.setSpareParts(requiredParts);
            for(SparePart sparePart: requiredParts) {
                Optional<Inventory> inventory = inventories.stream().filter(in -> in.getSparePart().getId().equals(sparePart.getId())).filter(inventory1 -> inventory1.getQuantity() > 0).findAny();
                if (inventory.isPresent()) {
                    int availableQuantity = inventory.get().getQuantity();
                    updateInventory(inventory.get(), Math.min(availableQuantity, skus.get(sparePart.getSku())));
                    if(availableQuantity < skus.get(sparePart.getSku())) {
                        PartRequirement partRequirement = new PartRequirement();
                        partRequirement.setJob(jobSheet.getId());
                        partRequirement.setServiceCenter(inventory.get().getServiceCenter());
                        partRequirement.setSku(sparePart);
                        partRequirement.setQuantity(skus.get(sparePart.getSku()) - availableQuantity);
                        partRequirement.setDate(jobSheet.getDate());
                        unavailableInventory.add(partRequirement);
                    }
                } else {
                    PartRequirement partRequirement = new PartRequirement();
                    partRequirement.setJob(jobSheet.getId());
                    partRequirement.setServiceCenter(jobSheet.getServiceCenter());
                    partRequirement.setSku(sparePart);
                    partRequirement.setQuantity(skus.get(sparePart.getSku()));
                    partRequirement.setDate(jobSheet.getDate());
                    unavailableInventory.add(partRequirement);
                }
            }
            if (unavailableInventory.isEmpty()) {
                jobSheet.setJobStatus(JobStatus.Completed);
            } else {
                partRequirementRepository.saveAll(unavailableInventory);
                jobSheet.setJobStatus(JobStatus.InProgress);
            }
        }
        return jobSheetRepository.save(jobSheet);
    }

    private void updateInventory(Inventory inventory, int quantity) {
        inventory.setQuantity(inventory.getQuantity() - quantity);
        inventoryRepository.save(inventory);
    }

    public void requestParts(Long jobId, List<Long> partSkus) {
        JobSheet jobSheet = jobSheetRepository.findById(jobId).orElseThrow();
        List<SparePart> parts = sparePartRepository.findAllById(partSkus);
        jobSheet.getSpareParts().addAll(parts);
        jobSheetRepository.save(jobSheet);
    }

    // Other methods as needed
}
