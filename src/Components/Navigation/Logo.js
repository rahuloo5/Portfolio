import React from 'react'
import {Link} from 'react-router-dom'

export default function Logo() {
    return (
      <>
        <Link to="/#" style={{textDecorationLine:'none'}}>
          <h3 style={{color: 'black', marginLeft: 0}}>Rahul Tomar</h3>
        </Link>
      </>
    );
}
