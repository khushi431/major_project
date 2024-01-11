const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type: String,
        required:true,
    },
    description: String,
    image:{
        type: String,
        default:
            'https://www.istockphoto.com/photo/southern-california-sunset-beach-with-backlit-palm-trees-gm513694026-87751777?utm_campaign=category_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fimages%2Fnature%2Fsunset&utm_medium=affiliate&utm_source=unsplash&utm_term=Sunset+images+%26+pictures%3A%3A%3A', 
        set: (v) =>
        v === ""
        ? 'https://www.istockphoto.com/photo/southern-california-sunset-beach-with-backlit-palm-trees-gm513694026-87751777?utm_campaign=category_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fimages%2Fnature%2Fsunset&utm_medium=affiliate&utm_source=unsplash&utm_term=Sunset+images+%26+pictures%3A%3A%3A'
        :v,
    },
    price:Number,
    location:String,
    country:String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;