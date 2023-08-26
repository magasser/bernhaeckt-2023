package ch.planval.datavisualizer.repository;

import ch.planval.datavisualizer.model.RawData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface RawDataRepository extends JpaRepository<RawData, UUID> {
}
