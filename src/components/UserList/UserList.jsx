import React from 'react';
import { User } from '../User/User';
import { randomUserList } from '../../data/randomUserList';



export const UserList=()=>{

   return(
   <div className='container'>{
     randomUserList.map((user,index)=>{
       return(
        <User user={user} key={index}/>

       ) 
    
    })

   
}
 </div>
   

   )
}