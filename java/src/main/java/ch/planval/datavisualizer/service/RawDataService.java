package ch.planval.datavisualizer.service;

import ch.planval.datavisualizer.model.RawData;
import ch.planval.datavisualizer.repository.RawDataRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class RawDataService {

    private RawDataRepository rawDataRepository;

    @Autowired
    public void setRawDataRepository(final RawDataRepository rawDataRepository) {
        this.rawDataRepository = rawDataRepository;
    }

    public void saveRawData(final RawData rawData) {
        this.rawDataRepository.save(rawData);
    }

    public void updateRawData(final RawData rawData) {
        RawData oldData = this.rawDataRepository.findById(rawData.getId()).orElseThrow();

        this.rawDataRepository.delete(oldData);

        this.rawDataRepository.save(rawData);
    }
}
