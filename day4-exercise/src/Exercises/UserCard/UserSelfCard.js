import React from 'react';

const UserSelfCard = ({ user }) => {
  //return null;
   console.log (user);
   
 return (
   
   <div className="Container">
     <div className="row">
   <div className="card">
 <div className="faceparent">
   <div className="faceContainer"> 
     <img src={user.image} className="face"/>
     </div>
     <div className="faceName">
       <div>
<strong>{user.name}</strong>
       </div>
       <div >
         <strong>{user.surName}</strong>

       </div>
     </div>
     
 </div>
 <div className="footer">
 {user.gender}.{user.age}
 </div>
 </div>
 </div>


 </div>);
 
};

export default UserSelfCard;
