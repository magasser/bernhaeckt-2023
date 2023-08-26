package ch.planval.datavisualizer.controller.dto;

import lombok.Getter;

import java.util.UUID;

@Getter
public class DataDTO {
    private UUID countyId;
    private UUID indicatorId;
    private UUID sourceId;
}
