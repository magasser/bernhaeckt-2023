package ch.planval.datavisualizer.repository;

import ch.planval.datavisualizer.model.County;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CountyRepository extends JpaRepository<County, UUID> {

    @Query("select c from County c where c.zip = ?1")
    County findByZip(final String zip);

    County findCountyByName(String name);

}
