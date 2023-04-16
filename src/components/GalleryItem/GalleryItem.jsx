import { useState, useEffect } from 'react'
import axios from 'axios';

function GalleryItem({item}) {
    const [toggle, setToggle] = useState(false);

    const renderImage= () => {
        if (toggle === true) {
            return ( 
             <div onClick={() => setToggle(!toggle)}>{item.description} </div>
               
            )
        } else {
            return (
                <img src={item.path} /> 
            )
        }
    }

    return (
       
        <div>
    {/* <img src={item.path}  />     */}
       <div onClick={() => setToggle(!toggle)}>{renderImage()}</div> 
       <h3>Likes:{item.likes}</h3>
    <button>Like</button>
  </div>
    )
}

export default GalleryItem;