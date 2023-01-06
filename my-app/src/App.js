import './App.css';
import Navbar from './Navbar';
import Listing from './Listing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body>
        <section className="Listings">
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
        </section>
        <section className="Map">
        </section>
      </body>
    </div>

  );
}

export default App;
