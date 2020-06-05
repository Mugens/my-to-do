import React from 'react';
import './Header.scss'


export default function Header(props){
  return (
    <header className="header">
      <h1 className="header_title">My day</h1>
      <h2 className="header_subtile">{`${props.day}.${props.month}.${props.year}`}</h2>
    </header>
  )
}