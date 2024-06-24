import ReactStars from "react-rating-stars-component";
import { CiStar } from "react-icons/ci";
import { FaStarHalf } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
function Rating(){

    const ratingChanged = (newRating)=>{
        console.log(newRating)
    
    }
    return <>
    <div className="price-rating-rating">
          <div className="price-rating-rating-stars"id="rating-stars">
          <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
    emptyIcon={<CiStar/>}
    halfIcon={<FaStarHalf/>}
    fullIcon={<FaStar/>}
    
    />
          </div>
          <div className="price-rating-rating-title">19 Customer Review</div>
        </div>
    </>
}

export default Rating;