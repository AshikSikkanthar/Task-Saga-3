import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { GET_USERS, SET_USERS } from "../reducer/action";
export function Users(props) {

  useEffect(() => {
    props.getUsers();
  }, []);

  return <div class="demo"> <p class="text-warning">Length is {props.data.length}
  </p>
    <div >


      {
        props.data.length <= 8 ||
        props.data.map((user, i) =>
          <div className="card text-center m-3 py-2" class="bg" key={i}>
            <span className="card-body py-0 mb-1"> <div className="badge bg-info"> Name: {user.name}</div> </span>
            <span className="card-body py-0 mb-0 "><div className="badge bg-success"> Email-Id : {user.email}</div></span>



          </div>
        ) }
     
      {/* <div class="container style2">
        <div class="row justify-content-center">
        {
        props.data.length <= 8 ||
        props.data.map((user, i) => 

          <div class="col-6"  key={i}>
            <div class="card">
              <div class="overlay"  class="center"></div>
              <div class="content" class="center">
                <h4  class="text-warning "> Name:{user.name}</h4>
                <h6  class="text-danger"> Mail-ID:{user.email}</h6>
              </div>
              <div class="fav">
                <i class="far fa-heart"></i>
              </div>
            </div>
          </div>
           )
      }
        </div>
      </div> */}

    </div>
  </div>
}

{/* <div class="card-wrap">
    <div class="card">
      <img src="http://www.hdwallpaperspulse.com/wp-content/uploads/2019/01/28/green-leaves-Fresh-Backgorund.jpg" class="card-img"/>
      <div>
        <h4>Name</h4>
        <h4> Email-Id </h4>
         {
          props.data.map((user,i)=>
  
    <p key={i} class="text-danger">
      
      
      <ul align="center">{user.name}</ul>  
        
      
     
    <ul align="center">{user.email} </ul> 
       
      
      
    </p>
)} 
      </div>
    </div>
  </div>
        
  <div class="card-wrap">

    
  <img src="" class="card-img" />
    <div class="card">
      
      <div>
        
        
         {
          props.data.map((user,i)=>
  
    <p key={i} class="text-danger">
      
      <h4>Name</h4>
      <ul align="center">{user.name}</ul>  
        
      <h4> Email-Id </h4>
     
    <ul align="center">{user.email} </ul> 
       
      
      
    </p>
)} 
      </div>
    </div>
  </div> */}


{/* <div className="container" >
        <table class="table">
  <thead>
    <tr>
      
      
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
  {
          props.data.map((user,i)=>
  
    <tr  key={i}>
      <td>
      {user.name}
      </td>
      <td>
      {user.email}
      </td>
    </tr>
)}
  </tbody>
  </table>
  </div> */}

const mapStateToProps = (state) => {
  return {
    data: state.users.data || [],
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch({ type: GET_USERS });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);