import static com.mongodb.client.model.Filters.eq;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.ServerApi;
import com.mongodb.ServerApiVersion;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.bson.Document;
import java.io.*;
import java.util.Objects;
import java.util.Random;

public class Main {

    static int number;

    private static MongoClient client;

    public static void main(String[] args) throws IOException {

        ConnectionString connectionString = new ConnectionString("mongodb+srv://lukecolussi:" + Password.getPassword() + "@cluster0.mbnsm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
        MongoClientSettings settings = MongoClientSettings.builder()
                .applyConnectionString(connectionString)
                .serverApi(ServerApi.builder()
                        .version(ServerApiVersion.V1)
                        .build())
                .build();
        client = MongoClients.create(settings);

        System.out.println(client.getDatabase("Project").getCollection("Assessment"));
    }

    public static void randomNumber() {
        Random random = new Random();
        Main.number = random.nextInt();
    }

    public static String updateDatabase() {
        MongoClient client = Main.client;
        Main.randomNumber();
        Document doc = new Document().append("TestQuestion", "Was this question inserted?").append("TestAnswer" + Main.number, "Yes it was inserted").append("weight", 100).append("major", "testmajor");
        client.getDatabase("Project").getCollection("Assessment").insertOne(doc);

        Document result = client.getDatabase("Project").getCollection("Assessment").find(eq("TestAnswer" + Main.number, "Yes it was inserted")).first();

        if (result == null) {
            return null;
        } else {
            String weight = String.valueOf(result.getInteger("weight"));
            client.getDatabase("Project").getCollection("Assessment").deleteOne(doc);
            return weight;
        }
    }

    public static String updateDeleteDatabase() {
        MongoClient client = Main.client;
        Document doc = new Document().append("TestQuestion", "Was this question deleted?").append("TestAnswer", "Yes it was deleted").append("weight", 10).append("major", "testmajor");
        client.getDatabase("Project").getCollection("Assessment").insertOne(doc);
        client.getDatabase("Project").getCollection("Assessment").deleteOne(doc);

        Document result = client.getDatabase("Project").getCollection("Assessment").find(eq("TestQuestion", "Was this question deleted?")).first();

        if (result == null) {
            return null;
        } else {
            return result.getInteger("weight").toString();
        }
    }

    public static String getDatabaseStatus() {
        MongoClient client = Main.client;
        return client.getDatabase("Project").getName();
    }

    public static String getDatabaseQuestion() {
        MongoClient client = Main.client;
        return Objects.requireNonNull(client.getDatabase("Project").getCollection("Assessment").find(eq("answer", "4")).first()).getString("question");
    }
}
