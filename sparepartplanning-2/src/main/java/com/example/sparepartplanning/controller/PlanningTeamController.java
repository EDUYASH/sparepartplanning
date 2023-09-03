package com.example.sparepartplanning.controller;

import com.example.sparepartplanning.model.PartRequirement;
import com.example.sparepartplanning.model.SparePart;
import com.example.sparepartplanning.model.response.DispatchPlanResponse;
import com.example.sparepartplanning.service.PlanningTeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/planning")
public class PlanningTeamController {
    @Autowired
    private PlanningTeamService planningTeamService;

    @GetMapping("/part-requirements")
    public ResponseEntity<List<PartRequirement>> getPartRequirements(@RequestParam LocalDate date) {
        List<PartRequirement> partRequirements = planningTeamService.getPartRequirements(date);
        return ResponseEntity.ok(partRequirements);
    }


    @PostMapping("/prepare-dispatch-plan")
    public ResponseEntity<List<DispatchPlanResponse>> prepareDispatchPlan(@RequestParam LocalDate date) {
        List<DispatchPlanResponse> dispatchPlan = planningTeamService.prepareDispatchPlan(date);
        return ResponseEntity.ok(dispatchPlan);
    }
}
