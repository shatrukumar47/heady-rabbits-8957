import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import PageNotFound from './PageNotFound'
import DashBoard from './DashBoard'
import Details from './Details'
import Budget from './Budget'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/budget' element={<Budget/>}/>
    </Routes>
  )
}

export default MainRoutes
