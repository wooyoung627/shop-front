import React from 'react';
import './App.css';
import { useAppSelector, useAppDispatch } from './app/hook';
import Home from './views/Home';
import UserRole from './const/UserRole';
import { getUserReducer, initialStateUser, setUserReducer, User } from './reducers/userReducer';

function App() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
