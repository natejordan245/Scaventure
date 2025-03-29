import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Hunts from './pages/Hunts'
import Teams from './pages/Teams'
import Profile from './pages/Profile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="hunts" element={<Hunts />} />
        <Route path="teams" element={<Teams />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default App 