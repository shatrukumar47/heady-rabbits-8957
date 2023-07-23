import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import PageNotFound from './PageNotFound'
import DashBoard from './DashBoard'
import PrivateRoute from './PrivateRoute'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/dashboard' element={
          <PrivateRoute>
            <DashBoard />
          </PrivateRoute>
        }/>
    </Routes>
  )
}

export default MainRoutes;
