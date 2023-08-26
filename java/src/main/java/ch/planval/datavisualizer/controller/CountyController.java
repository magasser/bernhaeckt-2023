package ch.planval.datavisualizer.controller;

import ch.planval.datavisualizer.model.County;
import ch.planval.datavisualizer.service.CountyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;
import java.util.UUID;

public interface CountyController {
    @Autowired
    void setCountyService(CountyService countyService);

    @RequestMapping(path = "/counties/{id}", method = RequestMethod.GET)
    @GetMapping("/")
    County getCountyById(@PathVariable(name="id") UUID id);

    @RequestMapping(path = "/counties", method = RequestMethod.GET)
    @GetMapping("/")
    List<County> getAllCounties();

    @RequestMapping(path = "/counties/zip/{zip}", method = RequestMethod.GET)
    @GetMapping("/")
    County getCountyByZip(@PathVariable(name="zip") String zip);
}
