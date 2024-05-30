import { Button, Container, Heading, Input, Text } from '@chakra-ui/react';
import  { useState } from 'react';

const FooterTop = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [email, setEmail] = useState('');

  const handleButtonClick = () => {
    setIsTextVisible(!isTextVisible);
  };

  function buttonClick() {
    if (email) {
      alert("Mail has been sent");
    }
    setEmail('');
  }

  return (
    <>
      <Container maxW="100%">
        <Button 
          border='none' 
          color='grey' 
          marginRight='200px' 
          onClick={handleButtonClick}
        >
          READ MORE ABOUT SUGAR COSMETICS
        </Button>
        {isTextVisible && (
          <Text marginTop='20px' color='grey'>

            <Heading as="h2" size="lg" marginBottom="20px">Enhance your beauty looks with SUGAR COSMETICS</Heading>
            <Text>
              Your search for a makeup and beauty range that’s cruelty-free, high on style, and even higher on performance ends here at SUGAR Cosmetics! SUGAR makeup stands for striking formulas that perfectly suit every Indian skin tone, extremely rich colour payoff, along with a unique and incredible range of products that stand the test of time. This hugely popular range of premium colour cosmetics and beauty products are crafted in state-of-the-art facilities across Germany, Italy, India, USA, and Korea. The clutter-breaking 450+ makeup products are skillfully wrapped in a signature low-poly mosaic designed packaging that is bursting with colour and is sure to complement the sweet and sassy side of you.
            </Text>

            <Heading as="h2" size="lg" marginTop="20px" marginBottom="20px">Look your glamorous best with Exclusive SUGAR Makeup Collection!</Heading>
            <Text>
              Whether you are a makeup connoisseur or a budding enthusiast, it is easy to be overwhelmed in the sea of beauty products in India. But with SUGAR Cosmetics, you can put your search for the perfect makeup collection to rest. Since its inception, SUGAR has been working with an aim to create a high-quality yet affordable range of products to complement the iconic Indian beauty. Not only that, you can shop for all these cosmetics online without going through a tiring process of finding a cosmetic store that will cater to your needs.
            </Text>
          </Text>
        )}

        <br /><br />

        <Heading size='1.2xl'>LET US STAY IN TOUCH</Heading>
        <br />
        <Text>Get The Latest Beauty Tips Straight To Your Inbox. Can not wait to connect!</Text>
        <br />
        <Input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button onClick={buttonClick}>Subscribe</Button>
      </Container>
    </>
  );
};

export default FooterTop;
