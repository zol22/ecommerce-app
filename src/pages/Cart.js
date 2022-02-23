import React from 'react';
import { Grid , IconButton, Container, Button} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { addQuantityCart, removeCart, removeQuantityCart, selectCart } from '../features/cartSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const styles = {
  wrapper:{
    height:'100vh',
    backgroundColor:'whitesmoke',
  },
  h1:{
    textAlign:'center',
    padding: '5px',
    margin:'10px',
  },  
  container: {
   

  },
  gridContainer: {
    marginTop:'20px',
    marginBottom: '30px',
    display:'flex',
  } ,
  first_grid:{
    textAlign:'center',
  },
  second_grid: {
   padding:'20px'
  },
  img: {
    objectFit:'contain',
    height:'200px',
    width:'150px',
  },
  title:{
    fontWeight: '300',
    marginTop:'10px',
  },
  price: {
    marginTop:'5%',
    fontWeight:'bold',

  },
  qty: {
    marginTop:'5%',
  },
  qtyIcons: {
    display:'flex',
    marginTop:'5%',
    alignItems:'center',
  },
  emptyCart: {
    fontSize:'20px',
    padding: '20px',
    textAlign:'center'
  },
  cartSelectedLength: {
    margin:'20px',
    fontWeight:'200',
  },
  valuesShippingContainer:{
    display:'flex',
    justifyContent:'space-between'
  },
  valueShippignNumber: {
    margin:'20px',
  },
  valueShipping:{
    fontWeight:'200',
    margin:'20px',
  },
  line:{
    marginTop:'20px',
    marginBottom:'20px'
  },
  btn:{
    backgroundColor:'black',
    color:'white',
    padding:'10px',
    display:'flex',
    margin: '0 auto',
    marginBottom:'15%',
  },
  totalContainer: {
    display:'flex',
    justifyContent:'space-between'
  },
  total:{
    margin:'20px',
    marginBottom: '30px',
  },
  totalNumber : {
    margin:'20px',
  }
}

function Cart() {

  const cartSelected = useSelector(selectCart);
  const dispatch = useDispatch();

  const removeQuantity = (id) => {
    dispatch(removeQuantityCart({
      id: id,
    }));
  }
  const addQuantity = (id) => {
    dispatch(addQuantityCart({
      id: id,
    }));
  }
  const removeItem = (id) => {
    dispatch(removeCart({
      id: id
    }))
  }


  const ShowAllProducts = () => {
    return (
      <div>
        <h1 style={styles.h1}>My cart</h1>
        <Grid container>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Container style={styles.container}>
              {cartSelected.length === 0 ? <p style={styles.emptyCart}>Your Cart is empty :(</p> : (
              cartSelected.map((item)=> {
                return (  
                  <Grid
                  container 
                  key={item.product.id}
                  style={styles.gridContainer}
                  >
                    <Grid item xs={6} sm={6} md={4} lg={4} style={styles.first_grid}>
                      <img src={item.product.image} alt="Product Image" style={styles.img} />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={4} style={styles.second_grid}>
                      <p style={styles.title}>{item.product.title}</p>
                      <p style={styles.price}>$ {item.product.price}</p>
                      
                      <div style={styles.qtyIcons}>
                        <IconButton sx={{marginRight:'10px', color:'black'}} disabled={item.qty === 1 ? true : false} onClick={()=>removeQuantity(item.product.id)}>
                          <RemoveOutlinedIcon/>
                        </IconButton>
                        <p>{item.qty}</p>
                        <IconButton sx={{marginLeft:'10px', color:'black'}} onClick={()=>addQuantity(item.product.id)}>
                          <AddOutlinedIcon />
                        </IconButton>
                      </div>

                      <IconButton sx={{marginTop:'20px',color:'black'}} onClick={()=> removeItem(item.product.id)}>
                        <DeleteIcon/> 
                      </IconButton>
                    
                    </Grid>
                  </Grid>
                )
              }) 
              )}
              </Container>
            </Grid>
            {/* Cart Checkout*/}
            <Grid item xs={12} sm={12} md={4} lg={4} sx={{border:'2px solid whitesmoke', backgroundColor:'white'}}>
              <Grid 
              container>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <p style={styles.cartSelectedLength}>{cartSelected.length} items</p>
                    <div style={styles.valuesShippingContainer}>
                      <p style={styles.valueShipping}>Order Value</p>
                      <p style={styles.valueShippignNumber}>$ 99</p>
                    </div>
                    <div style={styles.valuesShippingContainer}>
                       <p style={styles.valueShipping}>Shipping </p>
                       <p style={styles.valueShippignNumber}>$ 6</p>
                    </div>

                    <hr style={styles.line}/>

                    <div style={styles.totalContainer}>
                       <p style={styles.total}>Total</p>
                       <p style={styles.totalNumber}>{cartSelected.reduce((acc, item)=> acc + item.qty * item.product.price , 0).toFixed(2)}</p>
                    </div>
                   
  
                    <Button style={styles.btn}>Continue to checkout</Button>
                  </Grid>

              </Grid>
            </Grid>
        </Grid>
      </div>
    )

  }
  return (
    <div style={styles.wrapper}>
      <ShowAllProducts />
    </div>
  )
}

export default Cart