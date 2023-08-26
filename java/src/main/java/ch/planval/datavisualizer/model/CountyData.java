package ch.planval.datavisualizer.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.UUID;

@Data
@Entity
@Table(name = "calculated_data_view")
@AllArgsConstructor
@RequiredArgsConstructor
public class CountyData {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String name;
    private String comment;
    private String unit;
    private String topic;
    private String dimension;
    private String county;
    private int zip;
    private double raw_value;
    private int calculated_value;
}
