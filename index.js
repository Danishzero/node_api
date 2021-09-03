const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
require("./models/db_config");
const post = require("./models/post");
app.use(bodyParser.json());

app.post("/add", (req, res) => {
  post
    .create({
      title: req.body.title,
      post: req.body.post,
    })
    .then((data, err) => {
      res.json(data);
    });
});

app.get("/find", (req, res) => {
  post.find({},{__v: 0}).then((data, err) => {
    res.json(data);
  });
});

app.put("/post-update/:mid", (req, res) => {
  post.updateOne(
    {
      _id: mongoose.Types.ObjectId(req.params.mid),
    },
    {
      title: req.body.title,
      post: req.body.post,
    },
    { upsert: true }
  ).then((data) => {
    res.status(200).json({ resdb: data });    
  });

  // { upsert: true }

});

app.get("*", (req, res) => {
  res.json({
    message: "node api",
  });
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
