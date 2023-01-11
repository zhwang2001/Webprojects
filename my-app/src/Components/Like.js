import './Like.css';
import React, { useState } from 'react';

function initial() {
  return 14
}

function Like() {
  const [initialText, setText] = useState(() => initial())

  const clicked = () => {
    setText(() => initial() + 1)
  }

  return (
    <>
      <label>
        <button id="Like" onClick={clicked}>Likes:
          <span>{initialText}</span>
        </button>
      </label>
    </>
  );
}


export default Like;