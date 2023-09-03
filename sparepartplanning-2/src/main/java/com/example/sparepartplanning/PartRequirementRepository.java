package com.example.sparepartplanning;

import com.example.sparepartplanning.model.JobSheet;
import com.example.sparepartplanning.model.PartRequirement;
import com.example.sparepartplanning.model.ServiceCenter;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface PartRequirementRepository extends JpaRepository<PartRequirement, Long> {
    List<PartRequirement> findByServiceCenter(ServiceCenter serviceCenter);
    List<PartRequirement> findByDate(LocalDate date);
}
