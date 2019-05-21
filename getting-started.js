var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// create a database
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
//   });

// creating a collection
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.createCollection("customers", function(err, res) {
//       if (err) throw err;
//       console.log("Collection created!");
//       db.close();
//     });
// });

// inserting into the collection
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("db1");
//   var myobj = { name: "aryan", address: "Highway 37" };
//   dbo.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });

// finding only one query
// helpful to get boston trips maybe
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("db1");
    dbo.collection("customers").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.name);
      db.close();
    });
  });

// query to return all the cases
// helpful to make categories for short and long trips
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("db1");
    var query = { address: "Highway 37" };
    dbo.collection("customers").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});