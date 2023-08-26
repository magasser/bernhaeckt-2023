package ch.planval.datavisualizer.service;

import ch.planval.datavisualizer.model.CountyData;
import ch.planval.datavisualizer.repository.CountyDataRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Slf4j
@Service
public class CountyDataService {
    private CountyDataRepository countyDataRepository;

    @Autowired
    public void setCountyDataRepository(final CountyDataRepository countyDataRepository) {
        this.countyDataRepository = countyDataRepository;
    }

    public CountyData getCountyDataById(final UUID id) {
        return this.countyDataRepository.findById(id).orElse(null);
    }

}
