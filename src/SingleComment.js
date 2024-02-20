import React from 'react';




const SingleComment = (props) => {
    return(
        <div className ='comment'>
        <a herf = '/' className = 'avatar' ><img src={props.profile} alt ="profile" ></img></a>
           <div className = 'content'>
            <a herf = '/' className = 'author'>{props.name}</a>
            <div className = 'metadata'>
              <span className ='date'>{props.time}</span> </div>
            <div className = 'text'>{props.comment}</div>
            <div className= 'action'>
                  <a className="reply active">  reply </a>
                  <a className="save"> &nbsp;&nbsp;save </a>
                  <a className="hide"> &nbsp; &nbsp;hide </a>
                  <a>&nbsp;&nbsp;<i className="expand icon"></i> Full-screen </a>
            </div>  
            </div>
      </div>
    )
}

export default SingleComment;