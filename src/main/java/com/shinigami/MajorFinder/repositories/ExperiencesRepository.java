package com.shinigami.MajorFinder.repositories;

import java.util.List;
import com.shinigami.MajorFinder.entities.Experiences;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ExperiencesRepository extends MongoRepository<Experiences, String> {
    List<Experiences> findAll();
    public long count();
}
