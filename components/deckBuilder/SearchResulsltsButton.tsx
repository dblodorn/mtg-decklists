import React from 'react'
import { DeckBuilderContext } from './DeckContext'
import { css } from '@emotion/react'

export const SearchResulsltsButton = ({
  card
}: {
  card: any
}) => {
  const { handleCardSelect } = React.useContext(DeckBuilderContext)

  return (
    <button 
      key={card}
      onClick={handleCardSelect}
      className="bg-gray-500 hover:bg-gray-700 text-white py-1 px-3 rounded-full mt-2 mr-2"
      css={css`
        white-space: nowrap;
      `}
    >
      {card}
    </button>
  )
}