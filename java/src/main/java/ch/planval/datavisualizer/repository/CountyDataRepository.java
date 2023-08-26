package ch.planval.datavisualizer.repository;

import ch.planval.datavisualizer.model.CountyData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface CountyDataRepository extends JpaRepository<CountyData, UUID> {

    @Query("select c from CountyData c where c.county_id = ?1")
    Optional<List<CountyData>> findByCountyId(UUID id);
}
