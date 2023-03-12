import React, { useState } from 'react'
import { Button, Paper, Grid, Typography, Link, Snackbar, IconButton } from '@mui/material'
import FeatherIcon from 'feather-icons-react'
import { useNavigate } from 'react-router-dom'
import axios from '../services/axios'

import Input from '../components/Auth/Input'

export default function Auth() {
	let navigate = useNavigate()

	const [loader, setLoader] = useState(false)
	const [isSignUp, setIsSignUp] = useState(true)
	const [open, setOpen] = useState(false)
	const [error, setError] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')

	const handleSubmit = (event) => {
        //console.log(username, password, email)
		event.preventDefault()
		if (isSignUp) {
			if ((username === '' || password === '', repeatPassword === '', email === '')) {
				setOpen(true)
				setError('Fill all the details')
			} else if (password !== repeatPassword) {
				setOpen(true)
				setError("Password don't match")
			} else {
					if (username === '' || password === '') {
						setOpen(true)
						setError('Fill all the details')
					}
			}
			const user_register = { name: username, email:email,password:password };
			console.log(user_register)
			fetch('http://localhost:8000/register',{
				method: "POST", 
    			//mode: "cors", // no-cors, *cors, same-origin
    			cache: "no-cache",
				headers: {
					"accept": "application/json",
					"Content-Type": "application/json",
					'Access-Control-Allow-Origin': '*',
					"withCredentials":"true"
				},
			
				body: JSON.stringify(user_register) 
			}).then((res) => {
					console.log(res)
					if (res.status === 200) {
						//window.location.replace('http://127.0.0.1:5173/Login')
					} else {
						setOpen(true)
						setError(res.body)
					}
			})
		

			// axios()
			// 	.post('/auth/login', {
			// 		username: username,
			// 		password: password,
			// 	})
			// 	.then((res) => {
			// 		if (res.data === 'Logged In') {
			// 			window.localStorage.setItem('username', username)
			// 			navigate('/dash')
			// 		} else {
			// 			setOpen(true)
			// 			setError(res.data)
			// 		}
			// 	})
		}
	}

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}
		setOpen(false)
	}

	return (
		<Grid container alignItems='center' justifyContent='center' sx={{ height: '100vh' }}>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				message={error}
				action={
					<React.Fragment>
						<IconButton
							aria-label='close'
							color='inherit'
							sx={{ padding: '5px', borderRadius: '6px' }}
							onClick={handleClose}
						>
							<FeatherIcon icon='x' size='16' />
						</IconButton>
					</React.Fragment>
				}
			/>
			<Grid item>
				<Paper sx={{ p: 4 }}>
					<form autoComplete='off' noValidate onSubmit={handleSubmit}>
						<Grid
							container
							direction='column'
							justifyContent='center'
							alignItems='center'
							spacing={2}
						>
							<Grid item xs={12}>
								<Typography variant='h5' align='center'>
									{isSignUp ? 'Sign Up' : 'Sign In'}
								</Typography>
							</Grid>
							<Grid item>
								<FeatherIcon icon='lock' />
							</Grid>
							{isSignUp && (
								<>
								<Input
								name='username'
								label='Username'
								handleChange={(event) => setUsername(event.target.value)}
								value={username}
								/>	
									<Input
										name='email'
										label='Email Address'
										handleChange={(event) => setEmail(event.target.value)}
										value={email}
										type='email'
									/>
								</>
							)}
							
							<Input
								name='password'
								label='Password'
								handleChange={(event) => setPassword(event.target.value)}
								value={password}
								type='passoword'
							/>
							{isSignUp && (
								<Input
									name='confirmPassword'
									label='Repeat Password'
									handleChange={(event) => setRepeatPassword(event.target.value)}
									value={repeatPassword}
									type='password'
								/>
							)}

							<Button sx={{ mt: 4 }} type='submit' variant='contained' color='primary'>
								{isSignUp ? 'Sign Up' : 'Sign In'}
                                
							</Button>
						</Grid>
					</form>
				</Paper>
				{isSignUp === true ? (
					<Typography py={1} variant='subtitle1'>
						Already a member?
						<Link
							sx={{ px: '4px', cursor: 'pointer' }}
							underline='hover'
							onClick={() => {
								setIsSignUp(!isSignUp)
							}}
						>
							Sign In
						</Link>
					</Typography>
				) : (
					<Typography py={1} variant='subtitle1'>
						Not a member?
						<Link
							sx={{ px: '4px', cursor: 'pointer' }}
							underline='hover'
							onClick={() => {
								setIsSignUp(!isSignUp)
							}}
						>
							Sign up
						</Link>
					</Typography>
				)}
			</Grid>
		</Grid>
	)
}