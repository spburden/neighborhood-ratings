import Ember from 'ember';

export function starRating(params) {
  var reviewRating = params[0]
  var displayStars ="";
  var starRating =reviewRating;
  if(starRating%1===0){
    for(var i = 0; i<starRating;i++){
      displayStars+='<span class="fa fa-star"></span>'
    }
  }else{
    starRating = Math.floor(starRating);
    for(var i = 0; i<starRating;i++){
      displayStars+='<span class="fa fa-star"></span>'
    }
    displayStars+='<span class="fa fa-star-half-o"></span>'
    starRating++;
  }
  var emptyStars=5-starRating
  for(var i = 0; i <emptyStars;i++){
    displayStars+='<span class="fa fa-star-o"></span>'
  }
  return Ember.String.htmlSafe(displayStars);
}

export default Ember.Helper.helper(starRating);
