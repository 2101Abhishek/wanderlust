const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema , reviewSchema} = require("../schema.js");
const Listing = require("../models/listing.js");



const validateListing = (req,res,next) =>{
    let {error} = listingSchema.validate(req.body);
   
    if (error) {
        const errorMessage = error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errorMessage);
    }
    else
    {
        next(); 
    }
};


//Index route
router.get("/", wrapAsync (async  (req,res) => {
   const allListings = await Listing.find({});
   res.render("listings/index.ejs",{allListings});
}));

//New Route
router.get("/new", (req,res) =>{
    res.render("listings/new.ejs");
});

//Show route
router.get("/:id", wrapAsync (async(req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
        throw new ExpressError(404, "Listing not found");
    }
    res.render("listings/show.ejs", {listing});
}));

//Create Route
router.post("/",validateListing, wrapAsync (async (req,res,next) =>{
    let result = listingSchema.validate(req.body);
    console.log(result);
    if(result.error){
        throw new ExpressError(400,result.error);
    }
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
})
);


// Edit Route
router.get("/:id/edit" ,wrapAsync (async(req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
}));

//Update route
router.put("/:id",validateListing, wrapAsync (async (req,res) =>{
    let {id} =req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
}));

//Delete route
router.delete("/:id", wrapAsync (async (req,res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}));

module.exports = router;