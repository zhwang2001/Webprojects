import './App.css';
import Navbar from './Components/Navbar';
import Listing from './Components/Listing';
import Like from './Components/Like';
import Rating from './Components/Rating';

function App() {
  const keyinfo = [
    {
      profile: "1",
      listing_img: "?",
      price: "800",
      address: "3452 winchester drive",
      num_roomates: "2",
      num_bedrooms: "4",
      num_bathrooms: "6",
    },
    {
      profile: "2",
      listing_img: "?",
      price: "645",
      address: "2451 sherway gardens",
      num_roomates: "4",
      num_bedrooms: "3",
      num_bathrooms: "2",
    },
    {
      profile: "3",
      listing_img: "?",
      price: "1100",
      address: "300 21 west street",
      num_roomates: "2",
      num_bedrooms: "4",
      num_bathrooms: "2",
    },
    {
      profile: "4",
      listing_img: "?",
      price: "1100",
      address: "300 21 west street",
      num_roomates: "2",
      num_bedrooms: "4",
      num_bathrooms: "2",
    },
    {
      profile: "5",
      listing_img: "?",
      price: "1100",
      address: "300 21 west street",
      num_roomates: "2",
      num_bedrooms: "4",
      num_bathrooms: "2",
    },
  ]


  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body>
        <section className="Listings">
          {keyinfo.map((info, i) => (
            <Listing key={i} {...info} />
          ))}
        </section>
        <section className="Map">
          <Like />
          <Rating />
        </section>
      </body>
    </div>
  );
}

export default App;
