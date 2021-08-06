import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Section from '../src/components/Section'
import { ContainerInfo, SectionImg } from '../src/components/Section/style'
import { Texto } from '../src/components/Text/style'
import { Title } from '../src/components/Title/style'

export default function Home() {
  const itens = [
    "Inicio",
    "Serviços",
    "Sobre nós",
    "Fale conosco"
  ]

  return (
  <>
    <Header src="/logo.png" itens={itens}/>
    <Section>
      <ContainerInfo>
        <Title>Lorem ipsum <span>ligula</span> auctor, mauris.</Title>
        <Texto>Lorem ipsum ligula auctor, mauris.auctor, mauris.auctor, mauris.auctor, mauris.auctor, mauris.auctor, mauris.</Texto>
      </ContainerInfo>
      <SectionImg src="http://placehold.it/930x600"/>
    </Section>
    <Section>
      <SectionImg src="http://placehold.it/930x600"/>
      <ContainerInfo>
        <Title>Lorem ipsum <span>ligula</span> auctor, mauris.</Title>
        <Texto>Lorem ipsum ligula auctor, mauris.auctor, mauris.auctor, mauris.auctor, mauris.auctor, mauris.auctor, mauris.</Texto>
      </ContainerInfo>
    </Section>
    <Section>
      <ContainerInfo>
        <Title>Lorem ipsum <span>ligula</span> auctor, mauris.</Title>
        <Texto>Lorem ipsum ligula auctor, mauris.auctor, mauris.auctor, mauris.auctor, mauris.auctor, mauris.auctor, mauris.</Texto>
      </ContainerInfo>
      <SectionImg src="http://placehold.it/930x600"/>
    </Section>
    <Footer src="/logo.png"/>
  </>

  )
}
