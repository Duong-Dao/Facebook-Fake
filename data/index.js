// const { MongoClient } = require("mongodb");


// // uri connect
// // const uri = "mongodb://localhost:27017";
// // //const uri="mongodb+srv://test:admin@cluster0.lojrw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// // const uri = "mongodb+srv://test:admin@cluster0.lojrw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
// //const uri = "mongodb+srv://demo:demo123@cluster0.25nms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


// const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });


// client.connect((err) => {
//     if (err) {
//         console.log(err);
//         client.close();
//         process.exit(-1);
//     }
//     console.log("Connected");
// });

// module.exports = client;

//code anh chương gửi 


const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://demo:demo123@cluster0.25nms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

function connectDB() {
    client.connect(err => {
        if (err) {
            console.log(err);
            client.close();
            process.exit(-1);
        }
    
        console.log("Connected");
    });
}

connectDB();

module.exports = client;











