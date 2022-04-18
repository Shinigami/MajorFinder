package com.shinigami.MajorFinder.repositories;

import java.util.List;
import com.shinigami.MajorFinder.entities.Results;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ResultsRepository extends MongoRepository<Results, String> {

    List<Results> findAll();
    public long count();
}
