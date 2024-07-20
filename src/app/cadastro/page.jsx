// Import necessary components from Material-UI
'use client'

import { Box, Typography, TextField, Container, Link, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/700.css";
import * as React from 'react';
import theme from '../../theme';
import PasswordView from "@/components/PasswordView/PasswordView";
import firebase from "../../api/firebase"
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'


export default function Cadastro() {
  const [user, setUser] = React.useState("") 
  const [pass, setPass] = React.useState("")
  const [pass2, setPass2] = React.useState("")
  function Cadastro(){
    const auth = getAuth(firebase)
    createUserWithEmailAndPassword(auth,user, pass).then(function(usuario){
      localStorage.setItem("token", usuario._tokenResponse.idToken)
      console.log(usuario)
    }).catch(function(error){
      alert(error)
      })
  }
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: '20px'
      }}>
        
        <Box sx={{display:'flex',alignItems:'center', gap:'10px'}}>
          <Typography variant="h4">Cadastro</Typography>
          <Link href="/login" sx={{ color: 'primary' }}>
            <Typography variant="body2">Login</Typography>
          </Link>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',gap: '20px'}}>
          <TextField onChange={(event)=> setUser(event.target.value)} id="outlined-basic" label="Email" variant="outlined" />
          <PasswordView onChange={(event)=> setPass(event.target.value)} id="outlined-basic"/>
          <PasswordView onChange={(event)=> setPass2(event.target.value)} id="outlined-basic"/>
        </Box>
        <Box>
          <Link href="/calendario">
            <Button onClick={() => Cadastro()} variant='contained' sx={{ borderRadius: 100, width: 343, backgroundColor: 'primary' }}>Cadastrar</Button> 
          </Link>
        </Box>
        <Box>
          <Link href="/recuperar-senha" sx={{ color: 'primary' }}>
            <Typography variant="body2">Esqueceu a senha?</Typography>
          </Link>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
