import React from "react"
import Signup from "./components/Signup"
import { Container, Navbar, Nav } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import HomePage from "./components/HomePage"
import Login from "./components/Login"
import {PrivateRoute} from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"
import Buy from "./components/Buy"
import {ITEMS} from './shared/items';

function App() {
  return (
    <div style={{backgroundImage:"url(/assets/images/background.jpg)", backgroundSize:"100%"}}>
    <div className='header'><h1 style={{"color":"snow","textAlign":"center","padding":"1%"}}>CourseLena.com</h1>
    </div>
    <Navbar variant="dark">
      <Container>
      <Navbar.Brand>Welcome To CourseLena</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <Nav.Link href="/buy">Buy Courses</Nav.Link>
      </Nav>
    </Container>
    </Navbar>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
              <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
              <Route path="/update-profile" element={<PrivateRoute><UpdateProfile/></PrivateRoute>}/>
              <Route path="/buy" element={<PrivateRoute><Buy items={ITEMS}/></PrivateRoute>}/>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
    </div>
  )
}

export default App;