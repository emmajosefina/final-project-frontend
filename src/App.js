import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import LandingPage from './pages/LandingPage'
import FilteringPage from 'pages/FilteringPage'
import NotFound from 'pages/NotFound'
import About from 'pages/About'
import LogOut from 'pages/Logout'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { RestaurantDetails } from 'pages/RestaurantDetails'

import user from 'reducers/user'



const reducer = combineReducers({
  user: user.reducer,
  // reviews: reviews.reducer
})

const store = configureStore({ reducer: reducer })

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <main>
          <Header />
          <Routes>
            <Route exact path="/" element={<LandingPage />}></Route>
            <Route path="/restaurants" element={<FilteringPage />} />
            <Route path="/restaurants/id/:id" element={<RestaurantDetails />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<About />} />
            <Route path="/logout" element={<LogOut />} />
          </Routes> 
          <Footer />
        </main>
      </Provider>
    </BrowserRouter>
  )
}