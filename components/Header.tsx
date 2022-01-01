import { css } from '@emotion/react'
import { NavLink } from './utils'

export const Header = () => {
  return (
    <>
      <header css={css`
        height: var(--header-height);
        position: sticky;
        top: 0;
        z-index: var(--header-z);
        border-bottom: var(--border-black);
        background-color: var(--white);
      `}>
        <NavLink passHref href="/">
          <a>{process.env.NEXT_PUBLIC_APP_TITLE}</a>
        </NavLink>
        <NavLink passHref href="/about">
          <a>About</a>
        </NavLink>
      </header>
    </>
  )
}
