import React,{Component} from 'react';

import { CardUser } from '../CardUser/CardUser';
import { randomUserList } from '../../data/randomUserList';
import './UserGrid.css'
import { getUsers } from '../../services/userServices';

//  export  const UserGrid = ()=>{

//    return(
//     <div className='grid container d-flex'> { 
//      randomUserList.map((user,index)=>{
//         return ( 
//           <CardUser user={user} key={index} />
        
          
//         )
//      })

//     }
    
//      </div>
//    )
    
  

//  }

export class UserGrid extends Component{
     constructor(props){
       super(props);
       this.state={
         users:[]
       }
     }

     componentDidMount(){
      getUsers() 
          .then(users => {this.setState({users}) 
          });
  }
  

  render(){
    return(
      <div className='grid container d-flex'> { 
        this.state.users.map((user,index)=>{
                return ( 
                  <CardUser user={user} key={index} />
                
                  
                )
             })
        
            }
            
             </div>
    )
  }



}