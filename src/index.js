import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import profile1 from './images/one.jpg';
import profile2 from './images/two.jpg';
import profile3 from './images/third.jpg';
import profile4 from './images/fourth.jpg';
import profile5 from './images/fivth.jpg';
import UserCard from './UserCard';


const First = () => {
  return(
    <div className='ui comments'>
      <UserCard >
      <SingleComment name='Priya' time='Today 3pm ' comment='Thanks for wonderfull video' profile={profile5}  friends='22 Friends' />
      </UserCard>
      <UserCard >
      <SingleComment name='ramya' time='2days ago '  comment='Hii this is beautyfull' profile={profile3} friends='272 Friends'/>
      </UserCard>
      <UserCard >
      <SingleComment name='anu' time=' 1hr ago' comment='Hii' profile={profile1} friends='103 Friends'/>
      </UserCard>
      <UserCard >
      <SingleComment name='vidhya' time=' yesterday 5pm' comment='This is my first comment' profile={profile4}friends='76 Friends'/>
      </UserCard>
      <UserCard >
      <SingleComment name='hari' time=' Just now' comment='hello' profile={profile2} friends='59Friends' />
      </UserCard> 
         </div>
  )
}

ReactDOM.render(
  <First />,
  document.querySelector('#root')
)



