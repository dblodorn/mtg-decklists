import React from 'react'
import { DeckBuilderContext } from './DeckContext'
import { CardPreview, CardData, CardProvider } from "../mtgComponents"
import { css } from '@emotion/react'

export const SearchResultCard = () => {
  const { 
    cardSearchResult,
    addCard
  } = React.useContext(DeckBuilderContext)
  
  return (
    <CardProvider cardName={cardSearchResult}>
      <div css={css`
        border-right: 1px solid black;
        min-height: 100vh;
      `}>
      {cardSearchResult &&
        <React.Fragment>
          <CardPreview />
          <button 
            className="bg-gray-500 hover:bg-gray-700 text-white py-1 px-3 rounded-full mt-2 mr-2"
            onClick={addCard}
          >
            Add Card
          </button>
          <CardData />
        </React.Fragment>
      }
      </div>
    </CardProvider>
  )
}