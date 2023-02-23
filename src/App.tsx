import React from 'react';
import './App.css';
import { useAppSelector, useAppDispatch } from './app/hook';
import UserRole from './const/UserRole';
import { initialStateUser, setUserReducer, User } from './reducers/userReducer';

function App() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  
  const setUser = () => {
    let user:User = {id:'wylee', role:UserRole.user};
    dispatch(setUserReducer(user));
  }

  const clearUser = () => {
    dispatch(setUserReducer(initialStateUser));
  }

  const consoleUser = () => {
    console.log('user : ', user)
  }

  return (
    <div className="App">
      <button onClick={setUser}>
        {'setUser'}
      </button>
      <button onClick={clearUser}>
        {'clearUser'}
      </button>
      <button onClick={consoleUser}>
        {'consoleUser'}
      </button>
    </div>
  );
}

export default App;
