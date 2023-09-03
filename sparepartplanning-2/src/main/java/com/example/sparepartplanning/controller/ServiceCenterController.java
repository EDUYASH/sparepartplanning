package com.example.sparepartplanning.controller;

import com.example.sparepartplanning.service.ServiceCenterService;
import com.example.sparepartplanning.model.JobSheet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/service-centers")
public class ServiceCenterController {
    @Autowired
    private ServiceCenterService serviceCenterService;

    @PostMapping("/create-job-sheet")
    public JobSheet createJobSheet(@RequestBody JobSheet jobSheet) {
        return serviceCenterService.createJobSheet(jobSheet);
    }

    @PutMapping("/diagnose-device/{jobId}")
    public JobSheet diagnoseDevice(@PathVariable Long jobId, @RequestBody(required = false) Map<String, Integer> skus) {
        return serviceCenterService.diagnoseDevice(jobId, skus);
    }

    @PostMapping("/request-parts/{jobId}")
    public void requestParts(@PathVariable Long jobId, @RequestBody List<Long> partSkus) {
        serviceCenterService.requestParts(jobId, partSkus);
    }

    // Other endpoints as needed
}