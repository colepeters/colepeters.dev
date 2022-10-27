import Link from 'next/link'

import Box from './Box'
import Text from './Text'

export default function Header() {
  return (
    <Box as='nav'>
      <Text as='h1' fontSize={1} my={0} mx='auto' letterSpacing='normal'>
        <Link href='/'>
          <Text
            as='a'
            color='body'
            fontFamily='body'
            fontWeight='bold'
            style={{ textDecoration: 'underline' }}
          >
            colepeters.dev
          </Text>
        </Link>
      </Text>
      <Text fontSize={0} mt={1} textAlign='center'>
        Dispatches on engineering and design
      </Text>
    </Box>
  )
}
