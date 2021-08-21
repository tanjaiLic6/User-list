import React,{Component} from 'react';
import { User } from '../User/User';
import { randomUserList } from '../../data/randomUserList';
import { getUsers } from '../../services/userServices';



// export const UserList=()=>{

//    return(
//    <div className='container user-list'>{
//      randomUserList.map((user,index)=>{
//        return(
//         <User user={user} key={index}/>

//        ) 
    
//     })

   
// }
//  </div>
   

//    )
// }


export class UserList extends Component {
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
    <div className='container user-list'>{
           this.state.users.map((user,index)=>{
             return(
              <User user={user} key={index}/>
      
             ) 
          
          })
      
         
      }
       </div>
   )

  }

}