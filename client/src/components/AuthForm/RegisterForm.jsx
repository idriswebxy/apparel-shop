import React, { useEffect, useState } from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth"
import { auth } from "../../firebase"
// import GoogleButton from "react-google-button"
import Spinner from "../Loader/Loader"
import { signUpUser } from "../../firebase"
import axios from "axios"
import { registerUser, testServer, userState } from "../../api/store/auth"
import { useSetRecoilState } from "recoil"

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const theme = createTheme()

const SignUp = () => {
  const navigate = useNavigate()
  const [user, loading] = useAuthState(auth)
  const history = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [createUserWithEmailAndPassword, error] =
    useCreateUserWithEmailAndPassword(auth)

  const setNewUser = useSetRecoilState(userState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    // createUserWithEmailAndPassword(data.get("email"), data.get("password"))
    // signUpUser(auth, data.get("email"), data.get("password"))
    // const body = [data.get("email"), data.get("password")]
    // const data = { email: email.target.value, password: password.target.value }
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }

    // const body = JSON.stringify({
    //   email: email.target.value,
    //   password: password.target.value,
    // })
    setNewUser({
      email: email.target.value,
      password: password.target.value,
    })
    // const res = await axios.post("api/auth/register", body, config)
    const res = await registerUser()
    console.log(res)
  }

  // const handleChange = (event) => {

  //   const validatePassword = () => {
  //     let isValid = true
  //     if (password !== "" && confirmPassword !== "") {
  //       if (password !== confirmPassword) {
  //         isValid = false
  //         console.log("Passwords does not match")
  //       }
  //     }
  //   }
  // }

  // const handleChange = (event) => {
  //   setEmail({
  //     ...email,
  //     [event.target.name]: event.target.value,
  //   })
  //   setPassword({
  //     ...password,
  //     [event.target.name]: event.target.value,
  //   })
  // }
  // const register = (e) => {
  //   e.preventDefault()
  //   setError("")
  //   if (validatePassword()) {
  //     // Create a new user with email and password using firebase
  //     createUserWithEmailAndPassword(auth, email, password)
  //       .then(() => {
  //         sendEmailVerification(auth.currentUser)
  //           .then(() => {
  //             // setTimeActive(true)
  //             navigate("/verify-email")
  //           })
  //           .catch((err) => alert(err.message))
  //       })
  //       .catch((err) => setError(err.message))
  //   }
  //   setEmail("")
  //   setPassword("")
  //   setConfirmPassword("")
  // }

  useEffect(() => {
    if (loading) {
      return <Spinner />
    }
  }, [user, loading])

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              {/* <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  )
}

export default SignUp
