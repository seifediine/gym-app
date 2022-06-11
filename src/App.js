import React from 'react'
import { Routes, Route } from 'react-router-dom'

// MUI Imports
import { Box } from '@mui/material'

// Components Imports
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Footer from './components/Footer'

import './App.css'

const App = () => {
  return (
    <Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercice/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
