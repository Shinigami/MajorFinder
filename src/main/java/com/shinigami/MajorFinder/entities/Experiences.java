package com.shinigami.MajorFinder.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Experiences")
public class Experiences {

    @Id
    private String id;
    String username;
    private String experience;
    private int rating;

    public Experiences() { }

    public Experiences(String username, String experience, int rating) {
        this.username = username;
        this.experience = experience;
        this.rating = rating;
    }

    public String getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getExperience() {
        return experience;
    }

    public int getRating() {
        return rating;
    }
}