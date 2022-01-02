import styled from '@emotion/styled'
import { media } from './mixins'

interface PageWrapperProps {
  lg?: boolean
  xl?: boolean
  fw?: boolean
  grid?: boolean
}

export const PageWrapper = styled.section<PageWrapperProps>`
  margin: 0 auto;
  width: 100%;
  max-width: ${(props) =>
    props.xl
      ? 'var(--content-width-xl)'
      : props.lg
      ? 'var(--content-width-lg)'
      : props.fw
      ? '100%'
      : 'var(--content-width-md)'};
  position: relative;
  padding: var(--space-sm);  
`
