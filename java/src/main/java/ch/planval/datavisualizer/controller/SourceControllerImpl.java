package ch.planval.datavisualizer.controller;

import ch.planval.datavisualizer.model.Source;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.planval.datavisualizer.model.Source;
import ch.planval.datavisualizer.service.SourceService;

@RestController
@CrossOrigin("*")
@RequestMapping(path = "/api")
@Slf4j
public class SourceControllerImpl implements SourceController{
    private SourceService sourceService;

    @Override
    @Autowired
    public void setSourceService(final SourceService sourceService) {
        this.sourceService = sourceService;
    }

    @Override
    public int getNetIncomeFromFederalGovernment(int plz) {
        int min = 20000;
        int max = 100000;
        return (int)Math.floor(Math.random() * (max - min + 1) + min);
    }

    @Override
    public int getNetIncomeFromCantonBern(int plz) {
        int min = 40000;
        int max = 100000;
        return (int)Math.floor(Math.random() * (max - min + 1) + min);
    }

    @Override
    public List<Source> getAllSources() {
        return this.sourceService.getAllSources();
    }
}
