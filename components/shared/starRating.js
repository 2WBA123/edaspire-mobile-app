import StarRating from 'react-native-star-rating';
import React,{Component} from 'react';
 
class StarRatings extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      starCount: 2.5
    };
  }
 
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
      
    });
    console.log(rating)
  }
 
  render() {
    return (
      <StarRating
        disabled={false}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        maxStars={5}        
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        fullStarColor={'#FDCC0D'}
      />
    );
  }
}
 
export default StarRatings;