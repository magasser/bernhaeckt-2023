package ch.planval.datavisualizer.service;

import ch.planval.datavisualizer.model.Indicator;
import ch.planval.datavisualizer.model.IndicatorComplete;
import ch.planval.datavisualizer.repository.IndicatorCompleteRepository;
import ch.planval.datavisualizer.repository.IndicatorRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Slf4j
@Service
public class IndicatorService {
    private IndicatorRepository indicatorRepository;
    private IndicatorCompleteRepository indicatorCompleteRepository;

    @Autowired
    public void setIndicatorRepository(final IndicatorRepository indicatorRepository) {
        this.indicatorRepository = indicatorRepository;
    }

    @Autowired
    public void setIndicatorCompleteRepository(final IndicatorCompleteRepository indicatorCompleteRepository) {
        this.indicatorCompleteRepository = indicatorCompleteRepository;
    }

    public IndicatorComplete getIndicatorCompleteById(final UUID id) {
        return this.indicatorCompleteRepository.findById(id).orElse(null);
    }

    public Indicator getIndicatorById(final UUID id) {
        return this.indicatorRepository.findById(id).orElse(null);
    }

    public List<Indicator> getAllIndicators() {
        return this.indicatorRepository.findAll();
    }

    public List<IndicatorComplete> getAllIndicatorsComplete() {
        return this.indicatorCompleteRepository.findAll();
    }

    public void saveIndicator(Indicator indicator) {
        this.indicatorRepository.save(indicator);
    }
}
