import { useState } from 'react'
import axios from 'axios';

function GalleryItem({item, fetchGalleryItems}) {
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

    const addLike= (e) => {
        axios.put(`gallery/like/${item.id}`).then((response) => {
            console.log(response);
            fetchGalleryItems();
        }).catch((error) => {
            console.log(`Error in addLike, ${error}`)
            alert('Something went wrong.')
        });
    } 

    return (
       
        <div>
    {/* <img src={item.path}  />     */}
       <div onClick={() => setToggle(!toggle)}>{renderImage()}</div> 
       <h3>Likes:{item.likes}</h3>
    <button onClick={(e) => addLike(e)}>Like</button>
  </div>
    )
}

export default GalleryItem;