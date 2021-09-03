const mongoose = require("mongoose");

const url = "mongodb+srv://danish:123danish@danish.koj6o.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(url,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});