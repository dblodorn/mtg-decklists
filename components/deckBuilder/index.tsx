import React from "react";
import { CardPreview, CardData, CardProvider } from "../mtgComponents";
import { css } from "@emotion/react";

export const DeckBuilder = () => {
  return (
    <div className="flex flex-col">
      
      <CardProvider cardName={cardName}>
        <div className="grid grid-cols-2">
          {cardName ?
            <div css={css`
              border-right: 1px solid black;
            `}>
              <CardPreview />
              <CardData />
            </div>
            : <React.Fragment />
          }
        </div>
      </CardProvider>
    </div>
  )
}