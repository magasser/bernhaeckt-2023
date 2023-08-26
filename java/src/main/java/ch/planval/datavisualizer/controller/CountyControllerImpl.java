package ch.planval.datavisualizer.controller;

import ch.planval.datavisualizer.model.County;
import ch.planval.datavisualizer.model.CountyData;
import ch.planval.datavisualizer.service.CountyDataService;
import ch.planval.datavisualizer.service.CountyService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "/api")
@Slf4j
public class CountyControllerImpl implements CountyController {
    private CountyService countyService;
    private CountyDataService countyDataService;

    @Override
    @Autowired
    public void setCountyService(final CountyService countyService) {
        this.countyService = countyService;
    }

    @Override
    @Autowired
    public void setCountyDataService(final CountyDataService countyDataService) {
        this.countyDataService = countyDataService;
    }

    @Override
    public County getCountyById(final UUID id) {
        return this.countyService.getCountyById(id);
    }

    @Override
    public CountyData getCountyDataById(UUID id) {
        return this.countyDataService.getCountyDataById(id);
    }

    @Override
    public County getCountyByZip(final String zip) {
        return this.countyService.getCountyByZip(zip);
    }

    @Override
    public List<County> getAllCounties() {
        return this.countyService.getAllCounties();
    }

    @Override
    public void saveCounty(County county) {
        this.countyService.saveCounty(county);
    }
}
