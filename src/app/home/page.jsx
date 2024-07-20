// Import necessary components from Material-UI
'use client'
import { Box, Typography, TextField, Container, Link, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/700.css";
import { useRouter } from "next/navigation";
import * as React from 'react';
import theme from '../../theme';
import firebase from "../../api/firebase"
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import Check from "../Check";


export default function Home() {
  const [user, setUser] = React.useState("") 
  const [pass, setPass] = React.useState("")
  const router = useRouter()
  function LoginUser(){
    const auth = getAuth(firebase)
    signInWithEmailAndPassword(auth,user, pass).then(function(usuario){
      localStorage.setItem("token", usuario._tokenResponse.idToken)
      router.push("/calendario")
    }).catch(function(error){
      alert(error)
      })
  }
  Check()

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
          <Typography variant="h4">Home</Typography>
        </Box>
        <Box>
            <Button onClick={() =>router.push("/cadastro-aluno")} variant='contained' sx={{ borderRadius: 100, width: 343, backgroundColor: 'primary' }}>Cadastro Aluno</Button> 
        </Box>
        <Box>
            <Button onClick={() =>router.push("/cadastro-aula")} variant='contained' sx={{ borderRadius: 100, width: 343, backgroundColor: 'primary' }}>Cadastro Aula</Button> 
        </Box>
        <Box>
            <Button onClick={() =>router.push("/calendario")} variant='contained' sx={{ borderRadius: 100, width: 343, backgroundColor: 'primary' }}>Calendário</Button> 
        </Box>
        <Box>
            <Button onClick={() =>router.push("/relatorio")} variant='contained' sx={{ borderRadius: 100, width: 343, backgroundColor: 'primary' }}>Relatório</Button> 
        </Box>
      </Container>
    </ThemeProvider>
  );
}
