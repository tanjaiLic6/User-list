import React from 'react';
import { UserImg } from '../UserImg/UserImg';
import { UserInfo } from '../UserInfo/UserInfo';
import './User.css';

export const User =({user})=>{

 return(
   <div className='d-flex '>

   <UserImg  picture={user.picture.thumbnail}/>
   <UserInfo name={user.name.first} email={user.email} dateBirth={user.dob.date} />

   </div>
   

 )


}