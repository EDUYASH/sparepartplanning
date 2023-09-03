package com.example.sparepartplanning.model.response;

import com.example.sparepartplanning.model.SparePart;

public class DispatchPlanResponse {
    private SparePart sku;
    private int quantity;
    private Long serviceCenterId;

    public SparePart getSku() {
        return sku;
    }

    public void setSku(SparePart sku) {
        this.sku = sku;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Long getServiceCenterId() {
        return serviceCenterId;
    }

    public void setServiceCenterId(Long serviceCenterId) {
        this.serviceCenterId = serviceCenterId;
    }
}
