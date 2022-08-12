import Link from 'next/link'

import Box from './Box'
import Text from './Text'

export default function Footer() {
  return (
    <Box
      as='footer'
      mt={5}
      pt={4}
      borderTopWidth='2px'
      borderTopStyle='solid'
      borderTopColor='darkBackground'
    >
      <Text fontSize={0}>
        You’ve reached the end of this page. Thanks for reading!
        <br />
        <Link href='/'>Return to the homepage?</Link>
      </Text>
      <Text fontSize={0}>
        Psst… this work is licensed under a{' '}
        <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>
          Creative Commons BY-NC-SA 4.0 International License
        </a>
        .
      </Text>
    </Box>
  )
}
