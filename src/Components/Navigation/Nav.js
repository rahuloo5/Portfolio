import React ,{useState} from 'react'
import styles from './Nav.module.css'
import Logo from './Logo';
import {Link} from 'react-router-dom'
import pdf from '../../photos/Rahul_Tomar_Resume.pdf'
import { NavLink} from 'reactstrap';





export default function Nav() {

    var linkStyle;

    const [hover , setHover] =  useState(false)

     const toggleHover =()=>{

        setHover(!hover)

        if(hover){
            linkStyle={
                backgroundColor:'red'
            }
        }
        else{
            linkStyle={
                backgroundColor:'white'
            }

        }

    }

   const  ResumeClick=()=>{
      window.open(pdf)
    }
    return (
      <nav>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div style={{marginLeft: 5}}>
            <Logo />
          </div>
          <div style={{margin: 5, display: 'flex', flexDirection: 'row' }}>
            <Link to="/about" style={{textDecorationLine: 'none', paddingRight: 10}} >
              <h3 style={{}}>About</h3>
            </Link>
            <a href="/project" style={{textDecorationLine: 'none', paddingRight: 10}}>
              <h3>Projects</h3>
            </a>
            <Link to="/skill" style={{textDecorationLine: 'none', paddingRight: 10}}>
              <h3>Skills</h3>
            </Link>
            <NavLink href= {pdf}  target = "blank" style={{textDecorationLine: 'none', paddingRight: 10}}>
              <h3>Resume</h3>
            </NavLink>
          </div>
        </div>
      </nav>
    );
}
