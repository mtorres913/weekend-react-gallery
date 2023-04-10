import { useState, useEffect } from 'react'
import axios from 'axios';

function GalleryItem(item, listOfItems,  fetchGalleryItems) {
    return (
  <img src={item.path} />    
           
    )
}

export default GalleryItem;