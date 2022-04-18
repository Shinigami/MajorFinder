package com.shinigami.MajorFinder.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Assessment0")
public class Assessment {
    @Id
    private String id;
    private String question;
    private String answer;
    private String option1;
    private String option2;
    private String option3;
    private String major;
    private int weight;

    public Assessment() { }

    public Assessment(String question, String answer, String option1, String option2, String option3, String major, int weight) {
        this.question = question;
        this.answer = answer;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.major = major;
        this.weight = weight;
    }

    public String getId() {
        return id;
    }

    public String getQuestion() {
        return question;
    }

    public String getAnswer() {
        return answer;
    }

    public String getOption1() {
        return option1;
    }

    public String getOption2() {
        return option2;
    }

    public String getOption3() {
        return option3;
    }

    public String getMajor() {
        return major;
    }

    public int getWeight() {
        return weight;
    }
}