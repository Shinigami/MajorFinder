package com.shinigami.MajorFinder;

import com.shinigami.MajorFinder.entities.Assessment;
import com.shinigami.MajorFinder.repositories.AssessmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class MajorFinderApplication implements CommandLineRunner {

	@Autowired
	AssessmentRepository assessmentRepository;

	public static boolean connect;
	public static boolean validate;

	public static void main(String[] args) {
		SpringApplication.run(MajorFinderApplication.class, args);
	}

	@Override
	public void run(String... args) {
		checkDatabaseStatus();
		validateAssessmentDocument();
	}

	public void checkDatabaseStatus() {
		connect = assessmentRepository != null && assessmentRepository.count() > 0;
	}

	public void validateAssessmentDocument() {
		Assessment assessment = assessmentRepository.findAll().get(0);
		validate = assessment.getQuestion() == null || assessment.getWeight() <= 0;
	}
}
