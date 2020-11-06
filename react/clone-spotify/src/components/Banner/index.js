import React from 'react'
import './styles.css'

export default function Banner(props) {
  return (
    <main>
      <div className="container">
        {props.children}
      </div>
    </main>
  )
}
