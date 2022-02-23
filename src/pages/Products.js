import React, { useEffect, useState } from 'react'
import { Grid , Card, CardMedia, CardHeader, CardContent, Typography, CardActions, Button} from '@mui/material'
import { useNavigate } from "react-router-dom";
import FadingBalls from "react-cssfx-loading/lib/FadingBalls";



const styles = {
    h1:{
        textAlign:'center',
        padding: '5px',
        margin:'10px',
    },
    grid: {
      textAlign: 'center',
    },
    tabs:{
        display:'flex',
        justifyContent:'center',
        marginBottom: '5px',
        paddingBottom:'5px,'

    },
    tab:{
        margin: '3px',
        fontSize:'12px',
    },
    card: {
      backgroundColor:'whitesmoke',
      height: 'auto',
    },
    img: {
      objectFit:'contain'
    },
    button: {
      justifyContent:'center',
      padding:6,
    },
    cardActions: {
      justifyContent:'center',
    },
    showProducts: {
        marginTop:'30px'
    },
    loadingAnimation: {
        paddingTop:'50px',
        margin: 'auto',
    }
}

function Products() {

    const [ data, setData ] = useState([]);
    const [filterData, setFilterData ] = useState(data); // Is inital value is the data to display all the data at first
    const [loading, setLoading ] = useState(false);
    let componentMount = true;
    const history = useNavigate();

    useEffect(() => {
        const getProducts = async() => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (componentMount){
                setData(await response.clone().json());
                setFilterData(await response.json());
                setLoading(false)
            } 
            return () => {
                componentMount = false;
            }
        }
        getProducts();
    },[])

    const clotheMoreDetail = (id) => {
        history(`/products/${id}`);
    }

    const filterProductsFunction = (productFiltered) =>{
        const updatedFilterProduct = data.filter(item=> item.category === productFiltered);
        setFilterData(updatedFilterProduct)
    }
    const Loading = () => {
        return (
            <FadingBalls color="red" width="50px" height="50px" duration="3s" style={styles.loadingAnimation} />
        )
    }


    const ShowProducts = () => {
        return (
            <div>
            <h1 style={styles.h1}>Latest Products</h1>
                {/* Tabs */}
                <div style={styles.tabs}>
                    <Button style={styles.tab} variant="outlined" onClick={()=>setFilterData(data)}>All</Button>
                    <Button style={styles.tab} variant="outlined"  onClick={()=>filterProductsFunction("men's clothing")}>Men's Clothing</Button>
                    <Button style={styles.tab} variant="outlined"  onClick={()=>filterProductsFunction("women's clothing")}>Women's Clothing</Button>
                    <Button style={styles.tab} variant="outlined"  onClick={()=>filterProductsFunction('jewelery')}>Jewelery</Button>
                </div>

                <div style={styles.showProducts}>
                    <Grid
                    container 
                    spacing={3} 
                    justifyContent='center'
                    style={styles.gridContainer}
                    >
                    {filterData.map((product)=> {
                        return (
                                <Grid key={product.id} item xs={6} md={3} lg={3} style={styles.grid}>
                                    <Card sx={{ maxWidth: 400 }} style={styles.card}>
                                    <CardMedia
                                    component="img"
                                    height="200"
                                    image={product.image}
                                    alt=""
                                    style={styles.img}
                                    />
                                    <CardHeader title={product.category} subheader={product.title}/>
                                    <CardContent>
                                        <Typography variant="h5" >
                                            $ {product.price}
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={styles.cardActions}>
                                        <Button size="medium" color="primary" variant="outlined" style={styles.button} onClick={()=>clotheMoreDetail(product.id)}>
                                            See Details
                                        </Button>
                                    </CardActions>
                                    </Card>
                                </Grid>
                        )
                    })}
                    </Grid>
                </div>
            </div>
        )
    }

  return (
    <div>
    {loading ? <Loading /> : (
        <ShowProducts />
    )  }
    </div>
  )
}

export default Products