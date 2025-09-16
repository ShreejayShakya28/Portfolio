import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/description")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="app-container">
      {data ? (
        <div>
          <p>{data.paragraph}</p>
          {/* Uncomment below if you enable image in backend */}
          {/* <img src={data.image} alt="From backend" /> */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App
