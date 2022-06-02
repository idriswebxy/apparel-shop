import React, { useEffect, useState } from "react"
import MuiAppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import { useNavigate, Link } from "react-router-dom"
import { auth, logOut } from "../../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import ShoppingCartIcon from "../Badges/ShoppingCartIcon"
import LogoutIcon from "@mui/icons-material/Logout"
import Loader from "../Loader/Loader"
import { useRecoilValue } from "recoil"
import { cartState } from "../../recoil/cart/atoms"
import { useSetRecoilState } from "recoil"
import { authState } from "../../recoil/auth/atoms"

const drawerWidth = 240

const fullList = (
  <List>
    <ListItem button component={Link} to="/">
      <ListItemText>Home</ListItemText>
    </ListItem>
    <ListItem button component={Link} to="/dashboard">
      <ListItemText>Dashboard</ListItemText>
    </ListItem>
    <ListItem button component={Link} to="/login">
      <ListItemText>Login</ListItemText>
    </ListItem>
    <ListItem button component={Link} to="/register">
      <ListItemText>Register</ListItemText>
    </ListItem>
  </List>
)

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()
  const totalItems = useRecoilValue(cartState)
  const setAuth = useSetRecoilState(authState)

  const toggleDrawer = (open) => (event) => {
    setOpen(open)
  }
  const signOut = () => {
    logOut()
    setAuth(false)
  }

  return (
    <Box sx={{ flexGrow: 1 }} onKeyDown={toggleDrawer(false)}>
      <MuiAppBar position="relative">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={toggleDrawer(!open)}
            aria-label="menu"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Apparel Store
          </Typography>
          <div>
            {user ? (
              <div style={{ display: "flex" }}>
                <div style={{ color: "yellow" }}>Welcome {user?.email}</div>
                <Button onClick={() => navigate("/cart")} color="inherit">
                  <ShoppingCartIcon totalItems={totalItems} />
                </Button>

                <Button onClick={() => signOut()} color="inherit" href="/login">
                  <LogoutIcon />
                </Button>
              </div>
            ) : (
              <div>
                <Button color="inherit" href="/login">
                  Login
                </Button>
                <Button color="inherit" href="/register">
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </Toolbar>
      </MuiAppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
      >
        {fullList}
        <Divider />
      </Drawer>
    </Box>
  )
}
