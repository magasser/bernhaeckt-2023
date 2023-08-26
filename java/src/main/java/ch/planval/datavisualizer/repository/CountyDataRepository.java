package ch.planval.datavisualizer.repository;

import ch.planval.datavisualizer.model.CountyData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CountyDataRepository extends JpaRepository<CountyData, UUID> {

}
