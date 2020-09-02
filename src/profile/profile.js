import React from 'react';
import PropTypes from 'prop-types';

function Profile(props){
return (
    <div>
    <p>{props.data.fullName}</p>
    <p>{props.data.bio}</p>
    <p>{props.data.profession}</p>
    <div>{props.children}</div>
    <button onClick={()=>props.handleName(props.data.fullName)}>Alert</button>
    </div>
)

}
Profile.propTypes={
    data:PropTypes.arrayOf(
        {
        fullName:PropTypes.string,
        bio:PropTypes.string,
        profession:PropTypes.string }
    )
        }

    


export default Profile;