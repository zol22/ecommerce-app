import React from 'react'
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const styles = {
  homeContainer:{
    backgroundImage: "url('https://previews.123rf.com/images/tatom/tatom1709/tatom170900016/85339156-close-up-of-rolled-colorful-clothes-on-wood-table-background.jpg?fj=1')",
    width:'100%',
    height:'90vh',
    display:'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignContent:'center',
    alignItems:'center',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    textAlign:'center'
  },
  headerContainer: {
    width: 'auto',
  },
  header: {
    justifyContent:'center',
    alignItems:'center',
    fontSize:'90px',
    fontWeight:'lighter',
    color:'black',
  },
  button: {
    backgroundColor:'black',
    color:'white',
    cursor:'pointer',
    margin:'20px 20px'
  }
}
function Home() {
  const history = useNavigate();
  return (
    <div style={styles.homeContainer}>
      <div style={styles.headerContainer}>
        <h1 style={styles.header}>Online Clothes Store</h1>
        <Button style={styles.button} size="large" variant="outlined" onClick={()=>history('/products')}>Buy Now</Button>

      </div>

    </div>
  )
}

export default Home