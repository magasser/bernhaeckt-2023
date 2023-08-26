package ch.planval.datavisualizer.clients;

import ch.planval.datavisualizer.model.County;
import ch.planval.datavisualizer.model.Source;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.UUID;

@Component
public class SourceClient {
    public Double callApiFromSource(Source source, County county) {
        String url = source.getApi_url();
        url = url.replaceAll("\\$\\{county-zip}", String.valueOf(county.getZip()));

        // we call the url here
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, Double.class);
    }
}
