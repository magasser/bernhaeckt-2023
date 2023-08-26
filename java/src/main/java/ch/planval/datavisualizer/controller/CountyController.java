package ch.planval.datavisualizer.controller;

import ch.planval.datavisualizer.model.County;
import ch.planval.datavisualizer.model.CountyData;
import ch.planval.datavisualizer.service.CountyDataService;
import ch.planval.datavisualizer.service.CountyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;
import java.util.UUID;

public interface CountyController {
    @Autowired
    void setCountyService(CountyService countyService);

    @Autowired
    void setCountyDataService(CountyDataService countyDataService);

    @RequestMapping(path = "/counties/{id}", method = RequestMethod.GET)
    @GetMapping("/")
    County getCountyById(@PathVariable(name="id") UUID id);

    @RequestMapping(path = "/counties/{id}/data", method = RequestMethod.GET)
    @GetMapping("/")
    CountyData getCountyDataById(@PathVariable(name="id") UUID id);

    @RequestMapping(path = "/counties", method = RequestMethod.GET)
    @GetMapping("/")
    List<County> getAllCounties();

    @RequestMapping(path = "/counties/zip/{zip}", method = RequestMethod.GET)
    @GetMapping("/")
    County getCountyByZip(@PathVariable(name="zip") String zip);

    @RequestMapping(path = "/county", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @PostMapping("/")
    void saveCounty(@RequestBody County county);

    @RequestMapping(path = "/counties/data", method = RequestMethod.GET)
    @GetMapping("/")
    List<CountyData> getAllCountiesData();
}
