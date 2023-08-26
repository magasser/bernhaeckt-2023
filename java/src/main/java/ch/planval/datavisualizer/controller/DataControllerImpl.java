package ch.planval.datavisualizer.controller;

import ch.planval.datavisualizer.controller.dto.DataDTO;
import ch.planval.datavisualizer.model.RawData;
import ch.planval.datavisualizer.service.RawDataService;
import ch.planval.datavisualizer.service.SourceService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping(path = "/api")
@Slf4j
public class DataControllerImpl implements DataController {
    private SourceService sourceService;
    private RawDataService rawDataService;

    @Override
    @Autowired
    public void setSourceService(final SourceService sourceService) {
        this.sourceService = sourceService;
    }


    @Override
    @Autowired
    public void setRawDataService(final RawDataService rawDataService) {
        this.rawDataService = rawDataService;
    }


    @Override
    public void createDataUsingSource(DataDTO dataDTO) {
        RawData rawData = RawData.builder()
                .sourceId(dataDTO.getSourceId())
                .value(sourceService.getValueBySourceAndCounty(dataDTO.getSourceId(), dataDTO.getCountyId()))
                .countyId(dataDTO.getCountyId())
                .indicatorId(dataDTO.getIndicatorId())
                .build();
        rawDataService.saveRawData(rawData);
    }
}
