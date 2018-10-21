import React from 'react';
import PropTypes from 'prop-types';

function PlayerPreview(props) {
  return (
    <div>
      <div className='column'>
        <img className='avatar' src={props.avatar} alt={`Avatar for ${props.username}`}/>
        <h2 className='userName'>@{props.username}</h2>
      </div>
      {props.children}
    </div>
  );
}

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
}

export default PlayerPreview;