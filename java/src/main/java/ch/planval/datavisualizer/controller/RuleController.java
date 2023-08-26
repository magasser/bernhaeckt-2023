package ch.planval.datavisualizer.controller;

import ch.planval.datavisualizer.model.County;
import ch.planval.datavisualizer.model.Rule;
import ch.planval.datavisualizer.service.RuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.UUID;

public interface RuleController {

    @Autowired
    void setRuleService(RuleService ruleService);

    @RequestMapping(path = "/rules/{id}", method = RequestMethod.GET)
    @GetMapping("/")
    Rule getRuleById(@PathVariable(name="id") UUID id);
}
