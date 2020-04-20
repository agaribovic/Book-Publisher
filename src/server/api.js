const router = require("express").Router();
const bodyParser = require("body-parser");

const MongoClient = require("mongodb").MongoClient;
const connectionString =
  "mongodb+srv://scode:admin@cluster0-6bmqd.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(connectionString, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(bodyParser.raw());

client.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connected to mongodb");
    const db = client.db("test");

    // Get posts from MongoDB
    router.get("/api/posts", (req, res) => {
      // Query data from MongoDB
      db.collection("postsAlen")
        .find({})
        .toArray((err, posts) => {
          if (err) {
            console.error(err);
          }
          // Return data as JSON
          res.json(posts);
        });
    });

    router.post("/api/posts", (req, res) => {
      const post = {
        author: req.body.author,
        title: req.body.title,
        text: req.body.text,
      };

      console.log(post);
      db.collection("postsAlen").insertOne(post, (err, data) => {
        if (err) return console.log(err);
        res.send("New post has been created successfully: " + data);
      });
    });
  }
});

module.exports = router;
