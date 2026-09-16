// @ts-nocheck
import {useState} from 'react'
import { Button } from '@primer/react';
import {announce} from '@primer/live-region-element'


export default {
  title: 'Components/Button/Features',
}

const AccessibilityNote = () => {
  {
    return (
      <>
        <p>
          <b>Accessibility note</b>: If a button is dynamically updated to communicate a change (e.g. an action was
          successful), please make sure that this is also properly communicated to screen reader users. This may not
          happen reliably without additional markup considerations. Make sure to choose an approach that is appropriate
          for your usecase.
        </p>
        <p>
          Learn more about at{' '}
          <a
            style={{color: 'var(--fgColor-link)', textDecoration: 'underline'}}
            href="https://github.com/github/accessibility/blob/8b300b36d8bca28fd5e3e70ffa077a6f8ee65c05/docs/wiki/screen-reader-testing/dynamically-updated-buttons-support-april-2024.md"
          >
            Staff-only: Dynamically updated button labels
          </a>
          .
        </p>
      </>
    )
  }
}
export const TrailingCounter = () => {
  const [count, setCount] = useState(0)
  const onClick = () => {
    setCount(count + 1)
    announce(`Watch ${count + 1}`)
  }
  return (
    <>
      <Button onClick={onClick} count={count}>
        Watch
      </Button>
      <AccessibilityNote />
      <p>In this example, a live region has been implemented to communicate the change.</p>
    </>
  )
}
