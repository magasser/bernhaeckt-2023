package ch.planval.datavisualizer.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
@Slf4j
public class SourceControllerImpl implements SourceController{

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
}
