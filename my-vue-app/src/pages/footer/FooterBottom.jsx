import { Box,  Heading, Image, Flex ,Link,Text} from '@chakra-ui/react'


const FooterBottom = () => {
  return (
    <Box bg='black' >
      <Flex alignItems="center">
        <Heading marginLeft='400px' size='1xl' color='white' mr={4}>GET THE NEW SUGAR APP TODAY!</Heading>
        <Link as="a" href="https://sugarcosmetics.app.link/WebFApp" m={2}>
          <Image src="https://in.sugarcosmetics.com/playstore.png" w="150px" />
        </Link>
        <Link as="a" href="https://sugarcosmetics.app.link/WebFApp" m={2}>
          <Image src="https://in.sugarcosmetics.com/apple-store.png" w="150px" />
        </Link>
      </Flex>
      <hr style={{backgroundColor:"whitesmoke"}} />
      <br /><br />
      <Text marginLeft='400px' color='#A9A9A9' >Copyright © 2024 SUAGR Consmetics. All right reserved.  </Text><br />
    </Box>
  )
}

export default FooterBottom
