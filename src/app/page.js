// Import necessary components from Material-UI
'use client'
import { Box, Typography, TextField, Container, Link, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/700.css";
import { useRouter } from "next/navigation";
import * as React from 'react';
import theme from '../theme';
import firebase from "../api/firebase"
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'


export default function Login() {
  const [user, setUser] = React.useState("") 
  const [pass, setPass] = React.useState("")
  const router = useRouter()
  function LoginUser(){
    const auth = getAuth(firebase)
    signInWithEmailAndPassword(auth,user, pass).then(function(usuario){
      localStorage.setItem("token", usuario._tokenResponse.idToken)
      router.push("/home")
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
        <Box>
          <Typography variant="h4">Login</Typography>
        </Box>
        <Box>
          <TextField onChange={(event) => setUser(event.target.value)} id="outlined-basic" label="Username" variant="outlined" />
        </Box>
        <Box>
          <TextField onChange={(event) => setPass(event.target.value)} id="outlined-basic" type="password" label="Senha" variant="outlined" />
        </Box>
        <Box>
            <Button onClick={() => LoginUser()} variant='contained' sx={{ borderRadius: 100, width: 343, backgroundColor: 'primary' }}>Entrar</Button> 
        </Box>
        <Box>
          <Link href="/cadastro" sx={{ color: 'primary' }}>
            <Typography variant="body2">Não tem uma conta?</Typography>
          </Link>
          <Link href="/recuperar-senha" sx={{ color: 'primary' }}>
            <Typography variant="body2">Esqueceu a senha?</Typography>
          </Link>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
