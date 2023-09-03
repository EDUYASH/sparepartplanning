package com.example.sparepartplanning.controller;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.server.ResponseStatusException;
import com.example.sparepartplanning.*;
import com.example.sparepartplanning.model.*;
import com.example.sparepartplanning.model.request.InventoryRequest;
import org.springframework.beans.factory.annotation.Autowired;


import java.util.ArrayList;
import java.util.List;
import com.example.sparepartplanning.model.PartRequirement;


@RestController
@RequestMapping("/api")
public class ApiController {
	

	@RestController
	@RequestMapping("/api/part-requirements")
	public class PartRequirementController {

	    private final PartRequirementRepository partRequirementRepository;

	    @Autowired
	    public PartRequirementController(PartRequirementRepository partRequirementRepository) {
	        this.partRequirementRepository = partRequirementRepository;
	    }

	    @PostMapping
	    public ResponseEntity<PartRequirement> createPartRequirement(@RequestBody PartRequirement partRequirement) {
	        PartRequirement createdPartRequirement = partRequirementRepository.save(partRequirement);
	        return ResponseEntity.ok(createdPartRequirement);
	    }
	}
	
    private final SparePartRepository sparePartRepository;
    private final ServiceCenterRepository serviceCenterRepository;
    private final JobSheetRepository jobSheetRepository;

    private final InventoryRepository inventoryRepository;
    @PutMapping("/update-inventory-quantity/{serviceCenterId}/{sparePartId}")
    public ResponseEntity<String> updateInventoryQuantity(
            @PathVariable Long serviceCenterId,
            @PathVariable Long sparePartId,
            @RequestBody int quantity){

        ServiceCenter serviceCenter = serviceCenterRepository.findById(serviceCenterId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Service Center not found with id: " + serviceCenterId));

        SparePart sparePart = sparePartRepository.findById(sparePartId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Spare Part not found with id: " + sparePartId));

        Inventory inventory = inventoryRepository.findByServiceCenterAndSparePart(serviceCenter, sparePart)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Inventory not found for Service Center and Spare Part"));

        int currentQuantity = inventory.getQuantity();
        int updatedQuantity = currentQuantity - quantity;
        if (updatedQuantity < 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cannot update quantity. Insufficient inventory.");
        }

        inventory.setQuantity(updatedQuantity);
        inventoryRepository.save(inventory);

        return ResponseEntity.ok("Inventory quantity updated successfully");
    }

    @Autowired
    public ApiController(SparePartRepository sparePartRepository,
                         ServiceCenterRepository serviceCenterRepository, JobSheetRepository jobSheetRepository, InventoryRepository inventoryRepository) {
        this.sparePartRepository = sparePartRepository;
        this.serviceCenterRepository = serviceCenterRepository;
        this.jobSheetRepository = jobSheetRepository;
        this.inventoryRepository = inventoryRepository;
    }

    @GetMapping("/spare-parts")
    public Iterable<SparePart> getAllSpareParts() {
        return sparePartRepository.findAll();
    }

    @GetMapping("/service-centers")
    public Iterable<ServiceCenter> getAllServiceCenters() {
        return serviceCenterRepository.findAll();
    }
    @GetMapping("/inventory")
    public ResponseEntity<List<Inventory>> getAllInventory() {
        List<Inventory> inventoryList = inventoryRepository.findAll();
        return ResponseEntity.ok(inventoryList);
    }
    @GetMapping("/job-sheets")
    public Iterable<JobSheet> getAllJobSheets() {
        return jobSheetRepository.findAll();
    }

    @PostMapping("/spare-part")
    public SparePart createProduct(@RequestBody SparePart sparePart) {
        return sparePartRepository.save(sparePart);
    }

    @PostMapping("/add-inventory/{serviceCenterId}")
    public ResponseEntity<String> addInventory(@PathVariable Long serviceCenterId,
            @RequestBody InventoryRequest request) {

        List<SparePart> spareParts = sparePartRepository.findAllBySkuIn(request.getInventoryQuantityMap().keySet().stream().toList());
        ServiceCenter serviceCenter = serviceCenterRepository.getReferenceById(serviceCenterId);
        List<Inventory> inventories = new ArrayList<>();
        for(SparePart sparePart:spareParts) {
            Inventory inventory = new Inventory();
            inventory.setSparePart(sparePart);
            inventory.setServiceCenter(serviceCenter);
            inventory.setQuantity(request.getInventoryQuantityMap().get(sparePart.getSku()));
            inventories.add(inventory);
        }
        inventoryRepository.saveAll(inventories);

        return ResponseEntity.ok("Inventory entry created successfully");
    }

    @PostMapping("/service-center")
    public ServiceCenter createServiceCenter(@RequestBody ServiceCenter serviceCenter) {
        return serviceCenterRepository.save(serviceCenter);
    }


}