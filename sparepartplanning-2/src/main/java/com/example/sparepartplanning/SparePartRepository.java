package com.example.sparepartplanning;

import com.example.sparepartplanning.model.SparePart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SparePartRepository extends JpaRepository<SparePart, Long> {
    List<SparePart> findAllBySkuIn(List<String> skus);
}

