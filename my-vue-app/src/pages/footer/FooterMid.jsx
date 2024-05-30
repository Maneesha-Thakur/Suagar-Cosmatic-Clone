import React from 'react'
import { Container,Box, Heading,Text, HStack } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const FooterMid = () => {
  return (
    <div>
      

      <Box bg='black' h='auto' >

<Heading color="white" p={6}>Suagr</Heading>

<Box style={{ textAlign: 'center', marginTop: '50px' }}>
     <Box style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
       <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
         <FontAwesomeIcon icon={faFacebook} size="3x" style={{ color: '#4267B2' }} />
       </Link>
       <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
         <FontAwesomeIcon icon={faTwitter} size="3x" style={{ color: '#4267B2' }} />
       </Link>
       <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
         <FontAwesomeIcon icon={faInstagram} size="3x" style={{ color: '#4267B2' }} />
       </Link>
       <Link to="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
         <FontAwesomeIcon icon={faYoutube} size="3x" style={{ color: '#4267B2' }} />
       </Link>
       <Link to="mailto:example@example.com">
         <FontAwesomeIcon icon={faEnvelope} size="3x" style={{ color: '#4267B2' }} />
       </Link>
     </Box>
   </Box><br />

<hr style={{marginLeft:"90px",width:"90%",color:"grey"}}   /> <br />
<Box color='white' >
 <HStack spacing={4} marginLeft='200px' gap='80px'  >

<Text> <Link to='https://in.sugarcosmetics.com/stores?location=sugar-cosmetics-makeup-skin-care-city-centre-patiala-patiala-punjab' >Stores</Link> </Text>

<Text><Link to='https://in.sugarcosmetics.com/pages/elite' >Elite</Link></Text>
<Text><Link to='https://in.sugarcosmetics.com/pages/terms-conditions' >Terms & Conditions</Link> </Text>
<Text><Link to='https://in.sugarcosmetics.com/pages/returns-refunds' >Returns</Link> </Text>
<Text><Link to='https://in.sugarcosmetics.com/pages/faqs' >FAQs</Link> </Text>
<Text><Link to='https://in.sugarcosmetics.com/pages/about-us' >About Us</Link> </Text>
 </HStack>


</Box><br />  <br />
<hr style={{marginLeft:"90px",width:"90%",color:"grey"}}   /> <br />


<Box>

<Heading color='white' >Get In Touch</Heading>
<Box>
 <HStack spacing={6} marginLeft='200px' gap='110px' fontSize='20px' >

<Text color="white" size='xl' >Call us At</Text>
<Text color="white" size='xl' >Support</Text>
<Text color="white" size='xl' >Career</Text>
<Text color="white" size='xl' >Press and Media</Text>
<Text color="white" size='xl' >Influencer Collab</Text>
 </HStack>
</Box>

<Box>
 <HStack spacing={5} marginLeft='130px' gap='40px' fontSize='20px' >

 <Text>1800-209-9933</Text>
       <Link to="mailto:hello@sugarcosmetic.com">
         hello@sugarcosmetic.com
       </Link>
       <Text>We are hiring!</Text>
       <Link to="mailto:pr@sugarcosmetics.com">
         pr@sugarcosmetics.com
       </Link>
       <Link to='https://docs.google.com/forms/d/10QqWLG-_x61g8xXcCOd856iap1feiMgFmWcXhVxDWk0/viewform?edit_requested=true' >Join us</Link>
 </HStack>
</Box>
<br />
<hr style={{marginLeft:"90px",width:"90%",color:"grey"}}   /> <br />

<Box>
</Box>
</Box>
</Box>
    </div>
  )
}

export default FooterMid
