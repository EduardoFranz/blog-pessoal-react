

import React from "react";
import { Typography, Grid, TextField, Button  } from "@material-ui/core";
import { Box} from "@mui/material";

import './Login.css';
import { Link } from "react-router-dom";


function Login(){
    
    return(

        <Grid container direction='row' justifyContent='center' alignItems='center'>

            {/* 1° tela do login  */}
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography  variant='h3' color='textPrimary' component='h3' align='center' gutterBottom  className="textos1" > Entrar </Typography>
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth /> 
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth /> 

                        {/* botão de login */}
                        <Box marginTop={2} textAlign='center' >
                            <Link to='/home' className='text-decorator-none' >
                                <Button type='submit' variant='contained' color='primary'> Logar </Button>  

                            </Link>
                        </Box>

                    </form>

                    <Box display='flex' justifyContent='center' marginTop={2} >
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" align="center" gutterBottom  >Não tem uma conta?</Typography>
                        </Box>
                            <Typography variant="subtitle1" align="center" gutterBottom className="textos1" > Cadastre-se</Typography>
                    </Box>

                </Box>
            </Grid>

            {/* 2° tela do login */}
            <Grid xs={6} className="imagem" >

            </Grid>

        </Grid>



    );


}

export default Login;