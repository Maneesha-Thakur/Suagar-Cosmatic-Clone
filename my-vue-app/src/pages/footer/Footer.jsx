
import { Container } from '@chakra-ui/react'
import FooterTop from './FooterTop'
import FooterMid from './FooterMid';
import FooterBottom from './FooterBottom';




const Footer = () => {
  return (
    <>
    <Container bg='whitesmoke' >
    <FooterTop/>
    </Container>
      <br />
<br />

<FooterMid/>
<FooterBottom/>
   </>
  )
}

export default Footer
