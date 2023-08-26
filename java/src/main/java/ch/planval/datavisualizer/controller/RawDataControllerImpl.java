package ch.planval.datavisualizer.controller;

import ch.planval.datavisualizer.model.RawData;
import ch.planval.datavisualizer.service.RawDataService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
@Slf4j
public class RawDataControllerImpl implements RawDataController {
    private RawDataService rawDataService;
    @Override
    @Autowired
    public void setRawDataService(final RawDataService rawDataService) {
        this.rawDataService = rawDataService;
    }

    @Override
    public void saveRawData(final RawData rawData) {
        this.rawDataService.saveRawData(rawData);
    }
}
