import { Fragment } from 'react';
import {React} from 'react'
import './App.css';
import {Header} from './Header/Header'
import {Footer} from './Footer/Footer'
import {UserList} from './UserList/UserList'

function App() {
  
  return (
    <Fragment>

     <Header />
     
     <UserList />
    
     <Footer />

    </Fragment>
    
   
  );
}

export default App;
