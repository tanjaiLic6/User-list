import React from 'react';
import './UserInfo.css';


export const UserInfo=({name,email,dateBirth})=>{

  
    return (
      <div>

      <p className='mb-0'>name: {name}</p>
      <p className='mb-0'>email: {email}</p>
      <p className='mb-0'>Date of birth: {new Date(dateBirth ).toLocaleDateString()}</p>

      </div>  
      
    )

}