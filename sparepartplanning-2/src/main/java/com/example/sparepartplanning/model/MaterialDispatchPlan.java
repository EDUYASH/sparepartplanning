package com.example.sparepartplanning.model;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class MaterialDispatchPlan {
    private List<JobSheet> jobSheets;
    private Map<JobSheet, Map<SparePart, Integer>> dispatchMap;

    public List<JobSheet> getJobSheets() {
        return jobSheets;
    }

    public Map<JobSheet, Map<SparePart, Integer>> getDispatchMap() {
        return dispatchMap;
    }

    public void addJobDispatch(JobSheet jobSheet, Map<SparePart, Integer> partQuantityMap) {
        dispatchMap.put(jobSheet, partQuantityMap);
    }
}
