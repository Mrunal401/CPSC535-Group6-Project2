import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';
import logoImage from '../../image/logo.png';
import backgroundImage from '../../image/nav_img.jpeg';


const Navbar = () => {
  return (
    <>
      {/* Navigation bar */}
      
      <div style={{ 
        //backgroundColor: 'rgba(31, 73, 89, 0.5)', 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        paddingLeft: '20px', 
        paddingRight: '60px', 
        height: '15vh',
        boxSizing: 'border-box'
        
        }}
        >
          <Nav>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              padding: '20px',
              height: '13vh'
              }}>
          
          {/* Logo text */}
          <span style={{ color: 'white', alignContent: 'center', fontSize: '4em' }}>CivicTracker</span>
        </div>
        <Bars />

        {/* Navigation links */}
        <NavMenu>
          <NavLink to="/home"style={{ color: 'white', fontWeight: "bold" }}>Home</NavLink>
          
          <NavLink to="/maps"style={{ color: 'white', fontWeight: "bold" }}>Maps</NavLink>
          <NavLink to="/blockers"style={{ color: 'white', fontWeight: "bold" }}>Blockers</NavLink>
        
        </NavMenu>

          </Nav>
        
      </div>
    </>
  );
};

export default Navbar;
