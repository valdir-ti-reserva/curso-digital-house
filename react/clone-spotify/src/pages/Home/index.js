import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'

export default function Home() {
  return (
      <>
        <Header premium={false}/>
        <Banner>
          <h1>Escutar muda tudo</h1>
          <p>Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</p>
          <div className="button">
            <button>OBTENHA O SPOTIFY FREE</button>
          </div>
        </Banner>
        {/* <Footer/> */}
      </>  
  )
}
