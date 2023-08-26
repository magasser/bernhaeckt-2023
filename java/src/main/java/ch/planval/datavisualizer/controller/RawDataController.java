package ch.planval.datavisualizer.controller;

import ch.planval.datavisualizer.model.RawData;
import ch.planval.datavisualizer.service.RawDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

public interface RawDataController {
    @Autowired
    void setRawDataService(final RawDataService rawDataService);

    @RequestMapping(path = "/rawdata", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @PostMapping("/")
    void saveRawData(@RequestBody RawData rawData);
}
