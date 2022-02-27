import React from 'react';

function Profile() {
  return (
    <div style={{display:"flex",flexDirection:"row",height:"100vh"}}>
        <div style={{height:"inherit" ,width:"30%"}}>
            <div style={{height:"30%", backgroundColor:"lightgreen"}}></div>
            <div className="profile-container" style={{height:"70%", backgroundColor:"lightyellow"}}>
              <div className="profile-box"></div>
              <div className="profile-box"></div>
              <div className="profile-box"></div>
              <div className="profile-box"></div>
            </div>
        </div>
        <div style={{height:"inherit" , backgroundColor:"lightblue",width:"70%"}}></div>
    </div>
  )
}

export default Profile