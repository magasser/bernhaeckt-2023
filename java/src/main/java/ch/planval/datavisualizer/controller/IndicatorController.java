package ch.planval.datavisualizer.controller;

import ch.planval.datavisualizer.model.Indicator;
import ch.planval.datavisualizer.service.IndicatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import java.util.UUID;

public interface IndicatorController {
    @Autowired
    void setIndicatorService(IndicatorService indicatorService);

    @RequestMapping(path = "/indicators/{id}", method = RequestMethod.GET)
    @GetMapping("/")
    Indicator getIndicatorById(@PathVariable(name="id") UUID id);
}
