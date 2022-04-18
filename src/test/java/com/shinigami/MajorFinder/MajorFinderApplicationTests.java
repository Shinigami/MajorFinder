package com.shinigami.MajorFinder;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.annotation.Order;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class MajorFinderApplicationTests {

	@Test
	@Order(1)
	void contextLoads() { }

	@Test
	@Order(2)
	void DatabaseStatusTest() {
		assertTrue(MajorFinderApplication.connect, "Test if the application is connected to the database.");
	}

	@Test
	@Order(3)
	void ValidateDocumentTest() {
		assertFalse(MajorFinderApplication.validate, "Test if the collection contains valid values.");
	}
}
