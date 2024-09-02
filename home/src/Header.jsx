import React from 'react';

export default function Header(props) {
  return (
    <div className={`${props.class} p-5 bg-blue-500 text-white text-3xl font-bol`}>
      Fidget Spinner World II
    </div>
  );
}