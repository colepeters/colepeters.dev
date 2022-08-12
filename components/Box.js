import styled from 'styled-components'
import {
  border,
  color,
  flexbox,
  grid,
  layout,
  shadow,
  space,
} from 'styled-system'

const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  border,
  color,
  flexbox,
  grid,
  layout,
  shadow,
  space
)

Box.displayName = 'Box'

export default Box
