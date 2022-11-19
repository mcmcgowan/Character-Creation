import {TextField, Container, Typography, Box, Button} from '@mui/material';
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router';

export const LogIn = () => {
    const [hasAccount, setHasAccount] = useState(true)


    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        console.log((hasAccount)? 'This will log in' : 'This will sign up')
        //TODO: change this to POST to server/db
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const navigate = useNavigate();
    const handleSkipToCreator = useCallback(() => navigate('/create', {replace: true}), [navigate]);



    return(
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            width: '400px',
            borderRadius: '5px',
        }}>

            <Typography component="h1" variant="h5" sx={{mt: 3}}>{(hasAccount) ? <a>Log In</a> : <a>Sign Up</a>}</Typography>
            <Box component="form" onSubmit={handleSubmit} >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="email address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="password"
                    name="password"
                    type='password'
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 4}}
                >
                    {(hasAccount)? <a>Log in</a> : <a>Sign up</a>}
                </Button>
            </Box>
            <Box>
                <Button onClick={() => setHasAccount(!hasAccount)}>
                    {(hasAccount) ? <a>Don't have an account? Sign Up</a> : <a>Have an account? Sign In</a>}            
                </Button>
            </Box>
            <Box>
                <Button onClick={() => handleSkipToCreator()}> 
                    Just want to create a character without saving?    
                </Button>
            </Box>
        </Container>
    )
}

export default LogIn;