package ch.planval.datavisualizer.service;

import ch.planval.datavisualizer.model.CountyData;
import ch.planval.datavisualizer.repository.CountyDataRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Slf4j
@Service
public class CountyDataService {
    private CountyDataRepository countyDataRepository;

    @Autowired
    public void setCountyDataRepository(final CountyDataRepository countyDataRepository) {
        this.countyDataRepository = countyDataRepository;
    }

    public List<CountyData> getCountyDataById(final UUID id) {
        return this.countyDataRepository.findByCountyId(id).orElse(null);
    }

    public List<CountyData> getAllCounties() {
        return this.countyDataRepository.findAll();
    }
}
