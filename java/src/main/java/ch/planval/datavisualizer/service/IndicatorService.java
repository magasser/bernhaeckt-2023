package ch.planval.datavisualizer.service;

import ch.planval.datavisualizer.model.Indicator;
import ch.planval.datavisualizer.repository.IndicatorRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Slf4j
@Service
public class IndicatorService {
    private IndicatorRepository indicatorRepository;

    @Autowired
    public void setIndicatorRepository(final IndicatorRepository indicatorRepository) {
        this.indicatorRepository = indicatorRepository;
    }

    public Indicator getIndicatorById(final UUID id) {
        return indicatorRepository.findById(id).orElse(null);
    }
}
