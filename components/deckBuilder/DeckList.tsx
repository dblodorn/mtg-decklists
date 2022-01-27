import React from 'react'
import { DeckBuilderContext } from './DeckContext'
import { RawDisplayer } from '../utils'

export const DeckList = () => {
  const { deckList } = React.useContext(DeckBuilderContext)
  
  return (
    <RawDisplayer data={deckList} />
  )
}