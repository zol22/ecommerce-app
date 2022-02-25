import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Grid , Button, IconButton} from '@mui/material'


const styles = {
  container: {
    display: 'flex',
  },
  h1:{

   padding: '5px',
   margin:'10px',
  },
  form: {
    marginTop:'20px',
    display:'flex',
    flexDirection:'column',
    padding:'20px',
    border:'2px solid whitesmoke',
    backgroundColor:'whitesmoke',
    marginLeft:'15px',
  },
  label: {
    fontWeight:'bold',
  },
  input: {
    marginTop:'10px',
    marginBottom:'10px',
    borderRadius:'10px',
    height:'50px',
  },
  alertMessage : {
    marginBottom:'20px',
    color:'red',
  },
  submitBtn : {
    marginTop:'20px',
    justifyContent:'center',
    margin:'0 auto',
    height:'50px',
    padding:'10px',
    width:'120px',
    cursor:'pointer',
    borderRadius:'10px',
    fontWeight:'bold',
    fontSize:'18px',   
  },
  submitBtnHover : {
    backgroundColor:'whitesmoke',
  },
  h3: {
    padding:'15px 20px 20px 0px',
    fontWeight:'300',
  
  },
  contactInformation : {
    display:'flex',
    justifyContent: 'space-between',
    padding:'15px 20px 20px 0px'
  }
}
function Contact() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [hover, setHover] = useState(false);

  const onSubmit = async(data) => {
    console.log(data)
  }
  
  return (
    <div>
      <h1 style={styles.h1}>Get In Touch</h1>
      <div>
        <Grid
        container
        spacing={3}
        >
          <Grid item xs={12} sm={12} md={6} lg={6}>
          <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>

            <label style={styles.label} htmlFor="name">Name</label>
            <input id="name" style={styles.input} {...register("name",{ required: true } )} />
            {errors.name && errors.name.type === "required" && (
            <span style={styles.alertMessage} role="alert">This is required</span>
            )}

            <label style={styles.label} htmlFor="email">Email</label>
            <input id="email" style={styles.input} {...register("email",{ required: true } )} />
            {errors.email && errors.email.type === "required" && (
            <span style={styles.alertMessage} role="alert">This is required</span>
            )}

            <label style={styles.label} htmlFor="phone">Phone</label>
            <input id="phone" style={styles.input} {...register("phone" )} />

            <label style={styles.label} htmlFor="message">Message</label>
            <input id="message" style={styles.input} {...register("message",{ required: true } )} />
            {errors.message && errors.message.type === "required" && (
            <span style={styles.alertMessage} role="alert">This is required</span>
            )}
                
            <input onMouseEnter={()=>{ setHover(true); }} onMouseLeave={()=>{setHover(false);}} style={{...styles.submitBtn,...(hover ? styles.submitBtnHover : null) }} type="submit" />
          </form>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
          <h3 style={styles.h3}>Contact Information </h3>

          <div style={styles.contactInformation}>
            <p>Email</p>
            <p>example@hotmail.com</p>  
          </div>
          <div style={styles.contactInformation}>
          <p>Telephone</p>
          <p>123-456-789</p>
          </div>
          <div style={styles.contactInformation}>
            <p>Mailing Address</p>
            <p>123 Main Example 7890 USA</p>
          </div>
     

          </Grid>

        </Grid>
      </div>
    </div>

  )
}

export default Contact