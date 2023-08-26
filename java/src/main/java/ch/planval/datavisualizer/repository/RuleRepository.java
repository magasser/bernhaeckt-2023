package ch.planval.datavisualizer.repository;

import ch.planval.datavisualizer.model.Rule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface RuleRepository extends JpaRepository<Rule, UUID> {
    Optional<Rule> findById(UUID id);
}
