import { css } from '@emotion/react'
import { NavLink } from './utils'

export const Header = () => {
  return (
    <>
      <header css={css`
        height: var(--header-height);
        position: fixed;
        bottom: 0;
        z-index: var(--header-z);
        border-top: var(--border-black);
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
