package com.example.sparepartplanning;
import com.example.sparepartplanning.model.Inventory;
import java.util.Optional;
import com.example.sparepartplanning.model.ServiceCenter;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.sparepartplanning.model.SparePart;
import java.util.List;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {
    List<Inventory> findAllByServiceCenter(ServiceCenter serviceCenter);
    Optional<Inventory> findByServiceCenterAndSparePart(ServiceCenter serviceCenter, SparePart sparePart);
    }

