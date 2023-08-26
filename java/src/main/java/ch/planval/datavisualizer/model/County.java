package ch.planval.datavisualizer.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import java.util.UUID;

@Data
@Table(name = "counties")
@Entity
@AllArgsConstructor
@RequiredArgsConstructor
public class County {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private UUID id;
    @Column(name = "zip")
    private int zip;
    @Column(name = "name")
    private String name;
}
