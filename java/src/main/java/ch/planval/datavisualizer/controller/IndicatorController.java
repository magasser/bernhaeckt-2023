package ch.planval.datavisualizer.controller;

import ch.planval.datavisualizer.model.Indicator;
import ch.planval.datavisualizer.service.IndicatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.UUID;

public interface IndicatorController {
    @Autowired
    void setIndicatorService(IndicatorService indicatorService);

    @RequestMapping(path = "/indicators/{id}", method = RequestMethod.GET)
    @GetMapping("/")
    Indicator getIndicatorById(@PathVariable(name="id") UUID id);

    @RequestMapping(path = "/indicators", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @PostMapping("/")
    void saveIndicator(@RequestBody Indicator indicator);

}
