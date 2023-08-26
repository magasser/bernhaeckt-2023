package ch.planval.datavisualizer.service;

import ch.planval.datavisualizer.model.Rule;
import ch.planval.datavisualizer.repository.RuleRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Slf4j
@Service
public class RuleService {

    private RuleRepository ruleRepository;

    @Autowired
    public void setRuleRepository(final RuleRepository ruleRepository) {
        this.ruleRepository = ruleRepository;
    }

    public Rule getRuleById(final UUID id) {
        return ruleRepository.findById(id).orElse(null);
    }
}
