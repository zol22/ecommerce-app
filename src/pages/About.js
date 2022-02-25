import React from 'react'
import { Grid , Container, Button,IconButton} from '@mui/material'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const styles = {
    aboutTitleText: {
        textAlign:'center',
        margin: '20px',
        padding:'10px',
    },
    paragraphTitleText: {
        margin : '20px',
    },
    h3 :{
        marginBottom: '20px',
    },
    p : {
        padding:'10px',
    },
    description : {
        margin:'10px',
        padding:'10%',
    }

}

function About() {
  return (
    <div>
        <div style={styles.aboutTitleText}>
            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
            <p style={styles.paragraphTitleText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <Grid
        container
        spacing={3}
        sx={{textAlign:'center'}} 
        >
            <Grid item sm={12} md={4} lg={4}>
                <IconButton sx={{color:'white', border:'2px solid black', backgroundColor:'black', marginBottom: '20px'}}>
                    <LocalGroceryStoreIcon fontSize="large"/>
                </IconButton>
                <h3 style={styles.h3}>Lorem Ipsum</h3>
                <p style={styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </Grid>
            <Grid item sm={12} md={4} lg={4}>
                <IconButton sx={{color:'white', border:'2px solid black', backgroundColor:'black', marginBottom: '20px'}}>
                    <LocalGroceryStoreIcon fontSize="large"/>
                </IconButton>
                <h3 style={styles.h3}>Lorem Ipsum</h3>
                <p style={styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            </Grid>
            <Grid item sm={12} md={4} lg={4}>
                <IconButton sx={{color:'white', border:'2px solid black', backgroundColor:'black', marginBottom: '20px'}}>
                    <LocalGroceryStoreIcon fontSize="large"/>
                </IconButton>
                <h3 style={styles.h3}>Lorem Ipsum</h3>
                <p style={styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </Grid>
        </Grid>
        <Grid
        container
        sx={{textAlign:'center'}}
        >
             <Grid item sm={12} md={12} lg={12}>
                 <p style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Grid>
        </Grid>
    </div>
  )
}

export default About