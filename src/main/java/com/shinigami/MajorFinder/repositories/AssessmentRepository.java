package com.shinigami.MajorFinder.repositories;

import java.util.List;
import com.shinigami.MajorFinder.entities.Assessment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AssessmentRepository extends MongoRepository<Assessment, String> {
    List<Assessment> findAll();
    public long count();
}
