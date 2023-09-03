package com.example.sparepartplanning;

import com.example.sparepartplanning.model.SparePart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface SparePartRepository extends JpaRepository<SparePart, Long> {
    List<SparePart> findAllBySkuIn(Set<String> set);
}

