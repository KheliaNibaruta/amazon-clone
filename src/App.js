import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
// eslint-disable-next-line
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51Ob76QBDqDFhvH0gs4FOatz1a15HTsdfR9KxAjHTF69SJnwbaun8yHYuy9831BWZcJ2FdIXivwkfb4JzgPi1yRsR0004Il1rIE');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app components loads...
  
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
     
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route 
            path='/login' 
            element={<Login />} 
          />
          <Route 
            path='/' 
            element={
              <>
                <Header />
                <Home />
              </>
              } 
          />
          <Route 
            path='/checkout' 
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route 
            path='/payment' 
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>} 
          />
          <Route path='/'/>
        </Routes>
      </div>
    </Router>
  );
} 

export default App;
