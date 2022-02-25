import React from 'react'
import { useSelector } from 'react-redux'
import { favoriteCart, selectCart} from '../features/cartSlice'
import { Grid , Container, Button,IconButton} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import { removeFavoriteCart } from '../features/cartSlice';
import { useNavigate } from "react-router-dom";


const styles = {
    h1:{
        padding: '5px',
        margin:'10px',
        textAlign:'center',
    },
    textFavorite: {
        padding:'30px',
        textAlign:'center',
    },
    container:{
        marginTop:'6%',
    },
    img: {
        objectFit:'contain',
        height:'150px',
        width:'150px',
        cursor:'pointer',
      },
      title:{
          fontSize:'12px',
      },
      price:{
        marginTop:'5px',
      },
     category:{
         fontSize:'12px',
        marginTop:'5px',
     }
}

function Favorites() {
    const favoritesList = useSelector(selectCart);
    const dispatch = useDispatch();
    const history = useNavigate();


    const removeFavoriteProduct = (id) => {
       dispatch(removeFavoriteCart({
           id: id
       }))
    }
    const goTo = (id) => {
        history(`/products/${id}`)
    }

    const ShowFavorites = () => {
        return(
            <Container style={styles.container}>
                <Grid
                container
                spacing={4}
                sx={{width:'100%', marginLeft:'0px'}}
                >
                {favoritesList.favorites.map((favorite)=> {
                    return (
                        <Grid key={favorite.product.id} item xs={6} sm={6} md={3} lg={3} sx={{paddingLeft:'0px'}}>
                            <img src={favorite.product.image} alt="Product Image" style={styles.img} onClick={()=>goTo(favorite.product.id)} />
                            <IconButton sx={{color:'black'}} onClick={()=>removeFavoriteProduct(favorite.product.id)}>
                                <FavoriteIcon/>
                            </IconButton>
                            <p style={styles.title}>{favorite.product.title}</p>
                            <p style={styles.price}>$ {favorite.product.price}</p>
                            <p style={styles.category}>{favorite.product.category}</p>
                        </Grid>
                    )
                })}
                </Grid>
            </Container>
        )
    }

  return (
    <div>
        <h1 style={styles.h1}>My Favorites</h1>
        { favoritesList.favorites.length !== 0 ? <ShowFavorites /> : <p style={styles.textFavorite}>There are not favorites :(</p>}
       
    </div>
  )
}

export default Favorites