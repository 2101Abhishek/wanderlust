const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://wanderlustUser:wanderlustUser%40885681@cluster0.6ajoufe.mongodb.net/wanderlust?retryWrites=true&w=majority&appName=Cluster0";

main()
.then(() =>{
    console.log("connected to DB");
})
.catch((err) =>{
    console.log(err);
}); 
async function main() {
    await mongoose.connect(MONGO_URL)
};

const initDB = async () =>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialize");
};

initDB();