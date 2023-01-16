import React from 'react'
import { Link } from 'react-router-dom'
import './Bar.css'
const navBar = () => {
  return (
    <div className='Main-Body'>
        

        <div className='Green-Text'>
            <text>Хэрхэн ажилладаж вэ?</text>
        </div>

        <Link to="/nevtreh" relative='/nevtreh' >
          <div className='White-Text-Button'> 
              <text>Нэвтрэх</text>
          </div>
        </Link>

    </div>
  )
}

export default navBar