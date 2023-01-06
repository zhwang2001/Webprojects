import './Listing.css';
import apartment from './Assets/apartment1.jfif'

function Listing() {
  return (
    <div className="Listing">

      <section className="Image">
        <div className="Profile-Pic"></div>
        <img className="apartment" src={apartment} alt="apartment complex"></img>
      </section>

      <section className="Keyinfo">
        <div className="Keyinfo-row1">
          <h3 id="Price">$900</h3>
          <h4 id="Divider">|</h4>
          <h4 id="Address">2451 Sherway Gardens</h4>
        </div>
        <div className="Keyinfo-row2">
          <h5 id="Roomates">3 roomates</h5>
          <h5 id="Divider">|</h5>
          <h5 id="Bed">1 Bed</h5>
          <h5 id="Divider">|</h5>
          <h5 id="Bath">1 Bath</h5>
        </div>
      </section>

    </div>
  );
}

export default Listing;
