package ch.planval.datavisualizer.repository;

import ch.planval.datavisualizer.model.Indicator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface IndicatorRepository extends JpaRepository<Indicator, UUID> {
    @Override
    Optional<Indicator> findById(UUID id);
}
