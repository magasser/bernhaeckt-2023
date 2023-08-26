package ch.planval.datavisualizer.controller;

import ch.planval.datavisualizer.controller.dto.DataDTO;
import ch.planval.datavisualizer.model.County;
import ch.planval.datavisualizer.service.CountyDataService;
import ch.planval.datavisualizer.service.CountyService;
import ch.planval.datavisualizer.service.RawDataService;
import ch.planval.datavisualizer.service.SourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.UUID;

public interface DataController {
    @Autowired
    void setSourceService(SourceService sourceService);

    @Autowired
    void setRawDataService(RawDataService rawDataService);

    @RequestMapping(path = "/data", method = RequestMethod.POST)
    @PostMapping ("/")
    void createDataUsingSource(@RequestBody DataDTO dataDTO);
}
