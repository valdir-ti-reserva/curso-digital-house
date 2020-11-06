import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Button from '../../components/Button'
import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'

export default function Home() {
  return (
      <>
        <Header premium={false}/>
        <Banner>
          <Title page='home' size="10">Escutar muda tudo</Title>
          <Paragraph page='home' size="1">Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</Paragraph>
          <div className="button">
            <Button page='home'>Obtenha o Spotify</Button>
          </div>
        </Banner>
        {/* <Footer/> */}
      </>  
  )
}
