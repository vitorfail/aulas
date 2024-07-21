// Import necessary components from Material-UI
'use client'

import { Box, Typography,Grid, FormGroup, FormControlLabel ,Checkbox, TextField, Container, Link, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/700.css";
import * as React from 'react';
import theme from '../../theme';
import PasswordView from "@/components/PasswordView/PasswordView";
import firebase from "../../api/firebase"
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'


export default function Cadastro_Aula() {
  const [segunda,setsegunda] = React.useState(false)
  const [terca,setterca] = React.useState(false)
  const [quarta,setquarta] = React.useState(false)
  const [quinta,setquinta] = React.useState(false)
  const [sexta,setsexta] = React.useState(false)
  const [sabado,setsabado] = React.useState(false)
  const [domingo,setdomingo] = React.useState(false)
  const [horario, setHorario] = React.useState("") 
  const [nome, setNome] = React.useState("")
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
          <Typography variant="h4">Aulas</Typography>
          <Link href="/calendario" sx={{ color: 'primary' }}>
            <Typography variant="body2">Caledário</Typography>
          </Link>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',gap: '20px'}}>
          <TextField onChange={(event)=> setUser(event.target.value)} id="outlined-basic" label="Aula" variant="outlined" />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormGroup>
                <FormControlLabel control={<Checkbox checked={segunda} onChange={() =>segunda?setsegunda(false):setsegunda(true)} />} label="Segunda"/>
                <FormControlLabel control={<Checkbox checked={terca} onChange={() =>terca?setterca(false):setterca(true)} />} label="Terça" />
                <FormControlLabel control={<Checkbox checked={quarta} onChange={() =>quarta?setquarta(false):setquarta(true)} />} label="Quarta" />
                <FormControlLabel control={<Checkbox checked={quinta} onChange={() =>quinta?setquinta(false):setquinta(true)} />} label="Quinta" />
                <FormControlLabel control={<Checkbox checked={sexta} onChange={() =>sexta?setsexta(false):setsexta(true)} />} label="Sexta" />
                <FormControlLabel control={<Checkbox checked={sabado} onChange={() =>sabado?setsabado(false):setsabado(true)} />} label="Sábado" />
                <FormControlLabel control={<Checkbox checked={domingo} onChange={() =>domingo?setdomingo(false):setdomingo(true)} />} label="Domingo" />
              </FormGroup>        
            </Grid>
            <Grid item xs={6}>
              <FormGroup>
                <FormControlLabel control={<Checkbox checked={segunda} onChange={() =>segunda?setsegunda(false):setsegunda(true)} />} label="Segunda"/>
                <FormControlLabel control={<Checkbox checked={terca} onChange={() =>terca?setterca(false):setterca(true)} />} label="Terça" />
                <FormControlLabel control={<Checkbox checked={quarta} onChange={() =>quarta?setquarta(false):setquarta(true)} />} label="Quarta" />
                <FormControlLabel control={<Checkbox checked={quinta} onChange={() =>quinta?setquinta(false):setquinta(true)} />} label="Quinta" />
                <FormControlLabel control={<Checkbox checked={sexta} onChange={() =>sexta?setsexta(false):setsexta(true)} />} label="Sexta" />
                <FormControlLabel control={<Checkbox checked={sabado} onChange={() =>sabado?setsabado(false):setsabado(true)} />} label="Sábado" />
                <FormControlLabel control={<Checkbox checked={domingo} onChange={() =>domingo?setdomingo(false):setdomingo(true)} />} label="Domingo" />
              </FormGroup>        
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Link href="/calendario">
            <Button onClick={() => Cadastro()} variant='contained' sx={{ borderRadius: 100, width: 343, backgroundColor: 'primary' }}>Cadastrar</Button> 
          </Link>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
