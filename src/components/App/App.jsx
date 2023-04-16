import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  
  const [listOfItems, setListOfItems] = useState([]);

  const fetchGalleryItems = () => {
  axios.get('/gallery').then((response) => {
    setListOfItems(response.data);
  }).catch((error) => {
    console.log(`Error in GET ${error}`);
    alert('Something went wrong.');
  })
}
useEffect(() => {
  fetchGalleryItems();
}, []);


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
          <GalleryList 
          listOfItems={listOfItems}
          /> 
      </div>
    );
}

export default App;
