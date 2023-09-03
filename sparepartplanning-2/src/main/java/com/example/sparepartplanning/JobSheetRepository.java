package com.example.sparepartplanning;


import com.example.sparepartplanning.model.JobSheet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobSheetRepository extends JpaRepository<JobSheet, Long> {
    // You can add custom query methods here if needed
}

