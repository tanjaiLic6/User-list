import {Fragment, React,useState} from 'react';

import { UserList } from '../UserList/UserList';
import { UserGrid } from '../UserGrid/UserGrid';
import { Header } from '../Header/Header';


export const Body=()=>{

    const [isListView, setisListView]=useState();

    const toggleLayout = () => setisListView(!isListView);


    return(
     <>   
    <Header forBut={toggleLayout} />
    
     <Fragment>{
         isListView
         ? <UserGrid />
         : <UserList />
         }</Fragment> 
     

    </>

    )

}