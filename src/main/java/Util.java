import java.util.*;

public class Util {

    public static Map<String, Float> m;

    public Util() {
        m = new HashMap<>();
    }

    public static void algorithm(String major, String result, int weight, float timeElapsed) {
        m.putIfAbsent(major, 0.0f);
        float currentWeight = m.get(major);

        if (result.equals("correct")) {
            currentWeight += (weight / timeElapsed) * weight;
        } else if (result.equals("incorrect")) {
            currentWeight -= (weight / timeElapsed);
        }

        if (currentWeight < 0) {
            currentWeight = 0;
        }
        m.replace(major, currentWeight);
    }

    public void displayRanking() {

        m.entrySet().stream().sorted(Map.Entry.<String, Float>comparingByValue()).forEach(System.out::println);
    }
}
