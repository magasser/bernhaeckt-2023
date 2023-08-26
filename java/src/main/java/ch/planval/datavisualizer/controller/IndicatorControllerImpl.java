package ch.planval.datavisualizer.controller;

import ch.planval.datavisualizer.model.Indicator;
import ch.planval.datavisualizer.model.IndicatorComplete;
import ch.planval.datavisualizer.model.Source;
import ch.planval.datavisualizer.service.IndicatorService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin("*")
@RequestMapping(path = "/api")
@Slf4j
public class IndicatorControllerImpl implements IndicatorController {

    private IndicatorService indicatorService;

    @Override
    @Autowired
    public void setIndicatorService(final IndicatorService indicatorService) {
        this.indicatorService = indicatorService;
    }

    @Override
    public Indicator getIndicatorById(final UUID id) {
        return this.indicatorService.getIndicatorById(id);
    }

    @Override
    public IndicatorComplete getIndicatorCompleteById(final UUID id) {
        return this.indicatorService.getIndicatorCompleteById(id);
    }

    @Override
    public List<Source> getSourcesByIndicatorId(final UUID id) {
        return this.indicatorService.getIndicatorById(id).getLinkedSources();
    }

    @Override
    public List<Indicator> getAllIndicators() {
        return this.indicatorService.getAllIndicators();
    }

    @Override
    public List<IndicatorComplete> getAllIndicatorsComplete() {
        return this.indicatorService.getAllIndicatorsComplete();
    }

    @Override
    public void saveIndicator(final Indicator indicator) {
        this.indicatorService.saveIndicator(indicator);
    }

    @Override
    public void updateIndicator(final Indicator indicator) {
        this.indicatorService.updateIndicator(indicator);
    }
}
