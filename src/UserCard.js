import React from 'react'


const UserCard = (props) => {
    return(
<div className="ui card">
 
  <div className="content">
    <a className="header">User Details</a>
    
    <div className="description">
     
     {props.children}
    </div>
    <div>
     &nbsp;&nbsp;</div>
    <div className = 'ui bottom button'>
        <i className = 'add icon'></i>Add Friend
    </div>
  </div>
  <div className="extra content">
    <a>
      <i className="user icon"></i>
      22 Friends
    </a>
  </div>
</div>

    )
}

export default UserCard;