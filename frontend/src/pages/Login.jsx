import * as React from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useCookies } from 'react-cookie';

const theme = createTheme();

export default function SignIn() {
    const [cookies, setCookie] = useCookies()
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        //const user_login = { email: data.get('email'), password: data.get('password') };

         axios.post('http://127.0.0.1:8000/login', {
            email: data.get('email'),
            password: data.get('password')
        }).then( (response) =>{
            console.log(response.data);
            localStorage.setItem("userid",response.data.id)
            window.location.replace('http://127.0.0.1:5173/Analytics')
        })

        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        // fetch('http://127.0.0.1:8000/', {
        //     method: "GET",


        //     // body: JSON.stringify(user_login)
        // }).then((res) => {
        //     res.json()
        //     console.log(res);
        //     // if (res.status === 200) {
        //     //     setCookieFunctionEmail(res.email);
        //     //     //setCookie('password', password, { path: '/Analytics' });
        //     //     setCookieFunctionUserid(res.id);
        //     //     //window.location.replace('http://127.0.0.1:5173/Analytics')
        //     // } 
        // }).then((result) => { console.log(result) }, (error) => {
        //     console.log(error);
        // })
    };
    

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Log in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>
                        <Grid container>

                            <Grid item>
                                <Link href="/Auth" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}