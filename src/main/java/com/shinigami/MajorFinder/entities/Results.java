package com.shinigami.MajorFinder.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Results")
public class Results {
    @Id
    private String id;
    String username;
    private String major;
    private int score;

    public Results() { }

    public Results(String username, String major, int score) {
        this.username = username;
        this.major = major;
        this.score = score;
    }

    public String getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getMajor() {
        return major;
    }

    public int getScore() {
        return score;
    }
}