import React from 'react'

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';

export default function Premium() {
  return (
    <>
    <Header premium={true}/>
    <Banner>
      <Title page='premium' size="5">Aproveite 1 mês grátis de Premium</Title>
      <Paragraph page='premium' size="1">Depois, apenas R$ 16,90/mês. Cancele quando quiser.</Paragraph>
      <div className="button">
        <Button page='premium'>Ver Planos</Button>
      </div>
    </Banner>
    {/* <Footer/> */}
  </>  
  )
}
