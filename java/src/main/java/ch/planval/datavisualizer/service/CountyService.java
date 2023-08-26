package ch.planval.datavisualizer.service;

import ch.planval.datavisualizer.model.County;
import ch.planval.datavisualizer.repository.CountyRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Slf4j
@Service
public class CountyService {
    private CountyRepository countyRepository;

    @Autowired
    public void setCountyRepository(final CountyRepository countyRepository) {
        this.countyRepository = countyRepository;
    }

    public County getCountyById(final UUID id) {
        return this.countyRepository.findById(id).orElse(null);
    }

    public County getCountyByZip(final String zip) {
        return this.countyRepository.findByZip(zip);
    }
}
