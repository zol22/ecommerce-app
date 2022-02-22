import React from 'react';
import { Grid , IconButton, Container} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { addQuantityCart, selectCart } from '../features/cartSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const styles = {
  h1:{
    textAlign:'center',
    padding: '5px',
    margin:'10px',
  },  
  container: {
    padding:'20px',
  },
  gridContainer: {
    border:'2px solid red',
    marginTop:'20px',
    marginBottom: '30px',
    display:'flex',
  } ,
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
  }
}

function Cart() {

  const cartSelected = useSelector(selectCart);
  const dispatch = useDispatch();

  const removeQty = () => {
    console.log('remove')
  }
  const addQuantity = (id, qty) => {
    dispatch(addQuantityCart({
      id: id,
      qty: qty
    }));
  }


  const ShowAllProducts = () => {
    return (
      <div>
          <h1 style={styles.h1}>My cart</h1>
        <Container style={styles.container}>
           { cartSelected.map((item)=> {
             return (  
              <Grid
              container 
              key={item.product.id}
              style={styles.gridContainer}
              >
                <Grid item xs={6} sm={4} md={4} lg={4} style={styles.grid}>
                  <img src={item.product.image} alt="Product Image" style={styles.img} />
                </Grid>
                <Grid item xs={6} sm={8} md={8} lg={8} style={styles.second_grid}>
                  <p style={styles.title}>{item.product.title}</p>
                  <p style={styles.price}>$ {item.product.price}</p>
                  
                  <div style={styles.qtyIcons}>
                    <IconButton sx={{marginRight:'10px', color:'black'}} onClick={removeQty}>
                      <RemoveOutlinedIcon/>
                    </IconButton>
                    <p>{item.qty}</p>
                    <IconButton sx={{marginLeft:'10px', color:'black'}} onClick={()=>addQuantity(item.product.id,item.qty)}>
                      <AddOutlinedIcon />
                    </IconButton>
                  </div>

                  <IconButton sx={{marginTop:'20px',color:'black'}}>
                     <DeleteIcon/> 
                  </IconButton>
                 
                </Grid>
              </Grid>
             )
           }) }
          </Container>
      </div>
    )

  }
  return (
    <div>
      <ShowAllProducts />
    </div>
  )
}

export default Cart