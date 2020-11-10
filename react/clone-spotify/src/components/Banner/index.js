import React from 'react'
import './styles.css'

export default function Banner(props) {
  
  const addClass = (props.page === 'home' ? 'main-home' : 'main-premium')
  
  return (
    <main className={addClass}>
      <div className='container'>
        {props.children}
      </div>
    </main>        
  )
}
