import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from './app/hook';
import Home from './views/Home';
import UserRole from './const/UserRole';
import { getUserReducer, initialStateUser, setUserReducer, User } from './reducers/userReducer';
import SignIn from './views/sign/SignIn';
import SignUp from './views/sign/SignUp';

function App() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
