package ch.planval.datavisualizer.controller;

import ch.planval.datavisualizer.model.County;
import ch.planval.datavisualizer.service.CountyService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping(path = "/api")
@Slf4j
public class CountyControllerImpl implements CountyController {
    private CountyService countyService;

    @Override
    @Autowired
    public void setCountyService(final CountyService countyService) {
        this.countyService = countyService;
    }

    @Override
    public County getCountyById(final UUID id) {
        return this.countyService.getCountyById(id);
    }

    @Override
    public County getCountyByZip(final String zip) {
        return this.countyService.getCountyByZip(zip);
    }
}
