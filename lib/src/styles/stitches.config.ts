import { createStitches } from '@stitches/react'

import { colors } from './colors'
import { radii } from './radii'

export const { styled, globalCss, theme, keyframes } = createStitches({
  theme: {
    colors,
    radii
  }
})
