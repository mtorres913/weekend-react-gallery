import GalleryItem from '../GalleryItem/GalleryItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function GalleryList ({listOfItems, fetchGalleryItems}){

    return (
        <div>
            {/* {JSON.stringify(listOfItems)} */}
            <Box sx={ {width:300, height:300}}>
            <Grid container spacing={19}>
            {listOfItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={item.id}>
            <GalleryItem 
            key={item.id}
            item={item}
            fetchGalleryItems={fetchGalleryItems}
            />
            </Grid>
           ))}
            </Grid>
            </Box>  
        </div>     
    );
}
        
export default GalleryList;