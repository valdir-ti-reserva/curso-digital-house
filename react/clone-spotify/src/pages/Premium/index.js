import React from 'react'

import Header from '../../components/Header';
import Banner from '../../components/Banner';

export default function Premium() {
  return (
    <>
    <Header premium={true}/>
    <Banner>
      <h1>Aproveite 1 mês grátis de Premium</h1>
      <p>Depois, apenas R$ 16,90/mês. Cancele quando quiser.</p>
      <div className="button">
        <button>Ver Planos</button>
      </div>
    </Banner>
    {/* <Footer/> */}
  </>  
  )
}
