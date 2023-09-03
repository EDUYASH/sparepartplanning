package com.example.sparepartplanning.service;

import com.example.sparepartplanning.PartRequirementRepository;
import com.example.sparepartplanning.SparePartRepository;
import com.example.sparepartplanning.model.*;
import com.example.sparepartplanning.model.response.DispatchPlanResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PlanningTeamService {
    @Autowired
    private PartRequirementRepository partRequirementRepository;

    @Autowired
    private SparePartRepository sparePartRepository;


    public List<PartRequirement> getPartRequirements(LocalDate date) {
        return partRequirementRepository.findAll();
    }


    public List<DispatchPlanResponse> prepareDispatchPlan(LocalDate localDate) {
        List<PartRequirement> partRequirements = partRequirementRepository.findByDate(localDate);
        List<DispatchPlanResponse> partRequirementResponses = new ArrayList<>();
        Map<ServiceCenter, Map<SparePart, Integer>> skuRequirementByServiceCenter = new HashMap<>();
        for(PartRequirement partRequirement: partRequirements) {
            Map<SparePart, Integer> skuRequirement = skuRequirementByServiceCenter.getOrDefault(partRequirement.getServiceCenter(), new HashMap<>());
            Integer current = skuRequirement.getOrDefault(partRequirement.getSku(), 0);
            current += partRequirement.getQuantity();
            skuRequirement.put(partRequirement.getSku(), current);
            skuRequirementByServiceCenter.put(partRequirement.getServiceCenter(), skuRequirement);
        }
        for(Map.Entry<ServiceCenter, Map<SparePart, Integer>> item: skuRequirementByServiceCenter.entrySet()) {
            for(Map.Entry<SparePart, Integer> skus: item.getValue().entrySet()) {
                DispatchPlanResponse partRequirementResponse = new DispatchPlanResponse();
                partRequirementResponse.setSku(skus.getKey());
                partRequirementResponse.setServiceCenterId(item.getKey().getCenterId());
                partRequirementResponse.setQuantity(skus.getValue());
                partRequirementResponses.add(partRequirementResponse);
            }
        }
        return partRequirementResponses;
    }
}

