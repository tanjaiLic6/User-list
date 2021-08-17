import React from 'react';

import { CardUser } from '../CardUser/CardUser';
import { randomUserList } from '../../data/randomUserList';
import './UserGrid.css'

 export  const UserGrid = ()=>{

   return(
    <div className='grid container d-flex'> { 
     randomUserList.map((user,index)=>{
        return ( 
          <CardUser user={user} key={index} />
        
          
        )
     })

    }
    
     </div>
   )
    
  

 }