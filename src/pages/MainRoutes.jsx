import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import PageNotFound from './PageNotFound'
import { ProfilePage } from './ProfilePage'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Profile' element={<ProfilePage />} />
        <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default MainRoutes
