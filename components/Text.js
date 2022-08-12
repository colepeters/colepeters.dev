import styled from 'styled-components'
import {
  color,
  flexbox,
  layout,
  position,
  space,
  typography,
} from 'styled-system'

const Text = styled.p({}, color, flexbox, layout, position, space, typography)

Text.displayName = 'Text'

export default Text
