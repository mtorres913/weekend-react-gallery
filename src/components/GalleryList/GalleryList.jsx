import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList (listOfItems){

 

    return (
        <div>
            {
            listOfItems.map((item) => (
            <GalleryItem 
            key={item.id}
            item={item}
            fetchGalleryItems={fetchGalleryItems}
            listOfItems={listOfItems} 
            />
           ))
            }
        </div>
        
    )
}
        
export default GalleryList;