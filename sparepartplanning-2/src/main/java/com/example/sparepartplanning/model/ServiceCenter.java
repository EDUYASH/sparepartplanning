package com.example.sparepartplanning.model;

import jakarta.persistence.*;

@Entity
public class ServiceCenter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long centerId;

    private String location;

    @Enumerated(EnumType.STRING)
    private WarehouseZone warehouseZone;

    public Long getCenterId() {
        return centerId;
    }

    public void setCenterId(Long centerId) {
        this.centerId = centerId;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public WarehouseZone getWarehouseZone() {
        return warehouseZone;
    }

    public void setWarehouseZone(WarehouseZone warehouseZone) {
        this.warehouseZone = warehouseZone;
    }
}