import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MainTest {

    @Test
    @DisplayName("DatabaseStatusTest")
    void DatabaseStatusTest() {
        assertEquals("Project", Main.getDatabaseStatus(), "Test if the proper database exists.");
    }

    @Test
    @DisplayName("DatabaseInsertTest")
    void DatabaseInsertTest() {
        assertEquals("100", Main.updateDatabase(), "Test if insertion is successful.");
    }

    @Test
    @DisplayName("DatabaseDeleteTest")
    void DatabaseDeleteTest() {
        assertEquals(null, Main.updateDeleteDatabase(), "Test if deletion is successful.");
    }

    @Test
    @DisplayName("DatabaseFindTest")
    void DatabaseFindTest() {
        assertEquals("What is 2+2?", Main.getDatabaseQuestion(), "Test if search is successful.");
    }
}