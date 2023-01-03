import React from "react";
import { ArrowRightShort } from 'react-bootstrap-icons';

export const Button = () => {
  return (
    <div>
      <button className="btn btn-outline-dark">ReadMore</button>
      <ArrowRightShort size={'2.3rem'} className='border-end border-bottom border-top rounded-end border-dark'/>
    </div>
  );
};
