package ch.planval.datavisualizer.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import ch.planval.datavisualizer.model.Source;

public interface SourceController {

    @RequestMapping(path = "/netIncomeGov/{plz}", method = RequestMethod.GET)
    @GetMapping("/")
    int getNetIncomeFromFederalGovernment(@PathVariable(name="plz") int id);

    @RequestMapping(path = "/netIncomeBern/{plz}", method = RequestMethod.GET)
    @GetMapping("/")
    int getNetIncomeFromCantonBern(@PathVariable(name="plz") int id);

    @RequestMapping(path = "/sources", method = RequestMethod.GET)
    @GetMapping()
    List<Source> getAllSources();
}
