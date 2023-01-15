import "./Post.css"
import { BsBook, BsBookmarks } from 'react-icons/bs'
import { BsBookmarksFill } from 'react-icons/bs'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { IoIosArrowDropleftCircle } from 'react-icons/io'
import { useState } from 'react'

export function Bookmark() {

  const [fill, setFill] = useState(() => count()); //save button state

  function count(number = 1) {
    return (number++);
  }

  return (
    <label>
      <input type="check"
        id="bookmark"
        onClick={() =>
          setFill(() => fill + 1)}>
      </input>
      {fill % 2 === 0 ? <BsBookmarksFill size={20} /> : <BsBookmarks size={20} />}
    </label>
  )
}

export default function Post(info) {

  const [current, setCurrent] = useState(0); //image scroll state

  return (
    <div className="listing">
      <div className="postBox">
        <div className="image">
          <img src={info.listing_img[current]} alt="A Listing" />
          <div id="functionality">
            <div id="profile">
              <img src={info.avatar_img} alt="A Listing" />
            </div>
            <div id="save" >
              <Bookmark />
            </div>

            <label id="back">
              <button 
               id = "backButton"
               type="button" 
               onClick={(
                ) => setCurrent(count => (count - 1 === -1) ? info.listing_img.length - 1 : count - 1)}>
              </button>
                < IoIosArrowDropleftCircle size={30}/>
            </label>

            <label id="forward" >
              <button 
               id = "forwardButton"
                type="button" 
                onClick={(
                  ) => setCurrent(count => (count + 1 === info.listing_img.length) ? 0 : count + 1)}>
              </button>
              < IoIosArrowDroprightCircle size={30}/>
              </label>

          </div>
        </div>
        <div className="keyInfo">
          <h2>${info.price}</h2>
          <h4>{info.address}</h4>
          <h5>| Baths: {info.num_bathrooms} | Beds: {info.num_bedrooms} | Roomates: {info.num_roomates} |</h5>

          <h5>Available After: {info.date_available}</h5>
          <div id="message">
            <h3>Message</h3>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="Ammenities">
        {info.tags?.map((tag, i) => {
          return (<div id="tags" key={i}>{tag}</div>);
        })
        }
      </div>
    </div >

  )
}
