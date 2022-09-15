import Box from './Box'
import Text from './Text'

export default function HireMe() {
  return (
    <Box
      as='aside'
      bg='white'
      border='2px solid'
      borderColor='darkBackground'
      display='inline-block'
      my={[3, 4]}
    >
      <Box bg='darkBackground' p={3}>
        <Text as='h6' my={0}>
          I’m open for work!
        </Text>
      </Box>
      <Box p={3}>
        <Text>
          I’m currently exploring new opportunities to put my 15 years of
          experience in frontend engineering and design to use in a full time
          role. I’d love to work within a design systems team, or grow one from
          scratch, but I’m also open to exploring other ways to put my
          experience to work for a great organization.
        </Text>
        <Text>
          Interested in connecting? You can{' '}
          <a href='/cole-peters-cv.pdf' target='_blank'>
            check out my CV
          </a>
          ,{' '}
          <a href='https://www.linkedin.com/in/tcptrs/'>find me on LinkedIn</a>,
          or{' '}
          <a href='https://colepeters.com/contact'>
            send me an email via colepeters.com
          </a>
          .
        </Text>
      </Box>
    </Box>
  )
}
