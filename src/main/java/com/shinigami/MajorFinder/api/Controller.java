package com.shinigami.MajorFinder.api;

import com.shinigami.MajorFinder.entities.Assessment;
import com.shinigami.MajorFinder.entities.Experiences;
import com.shinigami.MajorFinder.entities.Results;
import com.shinigami.MajorFinder.repositories.AssessmentRepository;
import com.shinigami.MajorFinder.repositories.ExperiencesRepository;
import com.shinigami.MajorFinder.repositories.ResultsRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Collection;

@RestController
@RequestMapping("/api")
class Controller {

    private final Logger log = LoggerFactory.getLogger(Controller.class);

    @Autowired
    private AssessmentRepository assessmentRepository;
    private ExperiencesRepository experiencesRepository;
    private ResultsRepository resultsRepository;

    public Controller(AssessmentRepository assessmentRepository) {
        this.assessmentRepository = assessmentRepository;
    }

    @GetMapping("/assessment")
    Collection<Assessment> assessments() {
        return assessmentRepository.findAll();
    }

    @PostMapping("/experience")
    public Experiences createExperiences(@RequestBody Experiences experiences) {
        experiencesRepository.save(experiences);
        return experiences;
    }

    @PostMapping("/results")
    public Results createResults(@RequestBody Results results) {
        resultsRepository.save(results);
        return results;
    }
}
