package com.example.sparepartplanning.model.request;

import java.util.Map;

public class InventoryRequest {
    Map<String, Integer> inventoryQuantityMap;

    public Map<String, Integer> getInventoryQuantityMap() {
        return inventoryQuantityMap;
    }

    public void setInventoryQuantityMap(Map<String, Integer> inventoryQuantityMap) {
        this.inventoryQuantityMap = inventoryQuantityMap;
    }
}
