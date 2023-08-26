package ch.planval.datavisualizer.service;

import ch.planval.datavisualizer.clients.SourceClient;
import ch.planval.datavisualizer.model.County;
import ch.planval.datavisualizer.model.Source;
import ch.planval.datavisualizer.repository.SourceRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Slf4j
@Service
public class SourceService {
    private SourceRepository sourceRepository;
    private SourceClient sourceClient;
    private CountyService countyService;

    @Autowired
    public void setCountyRepository(final SourceRepository sourceRepository) {
        this.sourceRepository = sourceRepository;
    }
    @Autowired
    public void setSourceClient(final SourceClient sourceClient) {
        this.sourceClient = sourceClient;
    }
    @Autowired
    public void setCountyService(final CountyService countyService) {
        this.countyService = countyService;
    }

    public Source getSourceById(UUID sourceId) {
        return sourceRepository.findById(sourceId).orElse(null);
    }

    public List<Source> getAllSources() {
        return sourceRepository.findAll();
    }

    public double getValueBySourceAndCounty(UUID sourceId, UUID countyId) {
        Source source = getSourceById(sourceId);
        County county = countyService.getCountyById(countyId);
        return sourceClient.callApiFromSource(source, county);
    }
}
