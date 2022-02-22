import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Grid , Button, Container} from '@mui/material'
import { useDispatch } from 'react-redux';
import { addCart } from '../features/cartSlice';
import { useNavigate } from "react-router-dom";

const styles = {
    goBackBtn:{
        margin: '20px',
    },
    container: {
        display:'flex',
        alignItems:'center',
    },
    grid: {
      textAlign: 'center',
    },
    img: {
      objectFit:'contain',
      height:'400px',
      width:'300px',
    },
    title: {
        margin: '10px',
        fontWeight:'200'
    },
    price: {
        margin: '10px'
    },
    category:{
        margin:'10px',
    },
    description:{
        fontWeight:'200',
        fontSize:'14px',
        margin:'10px',
        padding:'10px',
    },
    rating: {
        margin:'10px',
    },
    btn: {
        margin:'10px',
    },
    itemAdded: {
        fontSize: '15px',
        padding: '20px',
        color:'green'
    }
}

function Product() {

    const [ product, setProduct ] = useState([]);
    const [ loading, setLoading] = useState(false);
    const [ quantity, setQuantity ] = useState(1);
    const [clickAddToCart, setClickAddToCart] = useState(false);
    const params = useParams();
    const history = useNavigate();
    let componentMount = true;
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async() => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
            if (componentMount){
                let product = await response.json();
                setProduct(product);
                setLoading(false)
            } 
            return () => {
                componentMount = false;
            }
        }
        getProduct();
    },[])

    const addToCart = (product) => {
        setClickAddToCart(true)
        dispatch(addCart({
            product: product
        }))
    }
    const goToCart = () => {
        history('/cart')
    }
    const goBack = () => {
        history('/products')
    }

    const ShowProduct = () => {
        return (
            <div>
                <Button variant="outlined" style={styles.goBackBtn} onClick={goBack}>Go Back</Button>
                <Container style={styles.container}>
                    <Grid
                    container 
                    spacing={2} 
                    sx={{marginLeft:'0px'}}
                    >
                        <Grid  item xs={12} sm={12} md={6} lg={6} style={styles.grid}>
                            <img src={product.image} alt="Product Image" style={styles.img} />
                        </Grid>
                        <Grid  item xs={12} md={6} lg={6} style={styles.grid}>
                            <h3 style={styles.title}>{product?.title}</h3>
                            <h2 style={styles.price}>$ {product?.price}</h2>
                            <p style={styles.category}>{product?.category}</p>
                            <p style={styles.description}>{product?.description}</p>
                            <p style={styles.rating}>Rating: {product?.rating?.rate}</p>
                            <Button style={styles.btn} variant="outlined" onClick={()=>addToCart(product)}>Add to the Cart</Button>
                            <Button style={styles.btn} variant="outlined" onClick={goToCart}>Go to the Cart</Button>
                            {clickAddToCart ? <p style={styles.itemAdded}>Item added in your cart!</p>: null}
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }

  return (
    <div>
        { loading ? <p>Loading</p> : (
            <ShowProduct />
        )}
    </div>
  )
}

export default Product