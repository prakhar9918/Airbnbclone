const Review  = require("./models/review");
const Listing  = require("./models/listing");

module.exports.isLoggedIn = (req,res,next) =>{
    if(!req.isAuthenticated()){
    req.session.redirectUrl = req.originalUrl;
    req.flash("success" , "You must be logged in!");
    res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req,res,next) =>{
  if( req.session.redirectUrl){
  res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
}

module.exports.isReviewOwner = async(req,res,next) => {
  let {id,reviewId} = req.params;
  let review = await Review.findById(reviewId);
  if(!review.author.equals(res.locals.currUser._id)){
    req.flash("success","You aren't the author of this review");
    return res.redirect(`/listings/${id}`);
  }
  next();
}