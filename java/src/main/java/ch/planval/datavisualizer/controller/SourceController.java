package ch.planval.datavisualizer.controller;

import ch.planval.datavisualizer.service.SourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.UUID;


public interface SourceController {

    @RequestMapping(path = "/netIncomeGov/{plz}", method = RequestMethod.GET)
    @GetMapping("/")
    int getNetIncomeFromFederalGovernment(@PathVariable(name="plz") int id);

    @RequestMapping(path = "/netIncomeBern/{plz}", method = RequestMethod.GET)
    @GetMapping("/")
    int getNetIncomeFromCantonBern(@PathVariable(name="plz") int id);
}
