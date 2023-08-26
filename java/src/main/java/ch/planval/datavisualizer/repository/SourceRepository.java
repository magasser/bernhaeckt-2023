package ch.planval.datavisualizer.repository;

import ch.planval.datavisualizer.model.Source;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface SourceRepository extends JpaRepository<Source, UUID> {
    Optional<Source> findById(UUID id);
}
