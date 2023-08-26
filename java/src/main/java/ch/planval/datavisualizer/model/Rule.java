package ch.planval.datavisualizer.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.GenericGenerator;

import java.util.UUID;

@Getter
@Setter
@ToString
@Table(name="RULES")
@Entity()
@AllArgsConstructor
@RequiredArgsConstructor
@Builder(toBuilder = true, builderClassName = "Builder")
public class Rule {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private UUID id;
    private UUID surveyId;
    private String text;
}