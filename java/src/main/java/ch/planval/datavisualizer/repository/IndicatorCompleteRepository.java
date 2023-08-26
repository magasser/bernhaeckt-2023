package ch.planval.datavisualizer.repository;

import ch.planval.datavisualizer.model.IndicatorComplete;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface IndicatorCompleteRepository extends JpaRepository<IndicatorComplete, UUID> {

}
