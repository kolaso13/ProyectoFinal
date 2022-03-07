import React from 'react'
import "../styles/Navbar.sass";
import $ from 'jquery';

export const Navbar = () => {
    /*Logica*/
    $(document).ready(function(){
      $('#icon').click(function(){
        $('ul').toggleClass('show')
      })
    });
  return (
    <nav>
      <label class="logo">DesignX</label>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Contact</a></li>
        <li><a href='#'>Feedback</a></li>
      </ul>
      <label id="icon">
        <i className='fas fa-bars'></i>
      </label>
    </nav>
  )
}
