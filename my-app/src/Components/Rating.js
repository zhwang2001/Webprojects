import "./Rating.css"
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';


function Rating() {

  let selected = false
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null)

  return (
    <>
      {[...Array(5)].map((star, i) => {
        const index = i + 1; //index starts at 1
        const width = 20; //index starts at 1
        return (
          <label>
            <input
              onClick={() => setRating(index)} //event listener
              type="radio"
              name="radioButton"
              value={index}
            />
            <FaStar
              className="star"
              onMouseEnter={() => setHover(index)} //event listener
              onMouseLeave={() => setHover(null)} //event listener
              size={index == hover ? width + 5 : width}
              color={index <= (hover || rating) ? '#00FFFF' : '#FFFFFF'}
            />
          </label>
        );
      })}
    </>
  );
}

export default Rating