import React from 'react'
import {XIcon} from '@primer/octicons-react'
import {StyledOcticon} from '..'
import {behavesAsComponent, checkExports} from '../utils/testing'
import {render as HTMLRender} from '@testing-library/react'
import {axe, toHaveNoViolations} from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('StyledOcticon', () => {
  behavesAsComponent({
    Component: StyledOcticon,
    toRender: () => <StyledOcticon icon={XIcon} />,
  })

  checkExports('StyledOcticon', {
    default: StyledOcticon,
  })

  it('should have no axe violations', async () => {
    const {container} = HTMLRender(<StyledOcticon icon={XIcon} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
