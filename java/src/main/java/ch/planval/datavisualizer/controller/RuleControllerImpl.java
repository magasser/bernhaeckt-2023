package ch.planval.datavisualizer.controller;

import ch.planval.datavisualizer.model.Rule;
import ch.planval.datavisualizer.service.CountyService;
import ch.planval.datavisualizer.service.RuleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping(path = "/api")
@Slf4j
public class RuleControllerImpl implements RuleController {
    private RuleService ruleService;

    @Override
    @Autowired
    public void setRuleService(RuleService ruleService) {
        this.ruleService = ruleService;
    }

    @Override
    public Rule getRuleById(UUID id) {
        return this.ruleService.getRuleById(id);
    }
}
