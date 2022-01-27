import React from "react";
import { SearchResultCard } from "./SearchResultCard";
import { useCardsAutocomplete } from "../../mtgHooks";
import { DeckBuilderProvider } from "./DeckContext";
import { DeckList } from "./DeckList";
import { css } from "@emotion/react";
import { SearchResulsltsButton } from "./SearchResulsltsButton";

export const DeckBuilder = () => {
  const {
    cardlist,
    bind: bindCardList,
  } = useCardsAutocomplete();
  
  return (
    <DeckBuilderProvider>
      <div className="flex flex-col">
        <div className="flex flex-col p-4 border-b border-solid border-black">
          <form>
            <input
              type="text"
              placeholder="type a card name"
              className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...bindCardList}
            />
          </form>
          {cardlist.data.length > 0 &&
            <div 
              className="mt-2 flex flex-row"
              css={css`
                width: 100%;
                overflow-x: scroll;
              `}
            >
              {cardlist.data.map((card: string) => {
                return (
                  <SearchResulsltsButton 
                    key={card}
                    card={card}
                  />
                )
              })}
            </div>
          }
        </div>
        <div className="grid grid-cols-2">
          <SearchResultCard />
          <DeckList />
        </div>
      </div>
    </DeckBuilderProvider>
  )
}