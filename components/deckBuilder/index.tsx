import { useState, useCallback } from "react";
import { useCardsAutocomplete } from "../../mtgHooks";
import { CardPreview, CardData, CardProvider } from "../mtgComponents";
import { css } from "@emotion/react";

export const DeckBuilder = () => {
  const {
    cardlist,
    bind: bindCardList,
  } = useCardsAutocomplete();

  const [cardName, setCardName] = useState<string>('')

  const handleCardSelect = useCallback((event) => {
    setCardName(event.target.innerText)
  }, [cardName, setCardName])

  
  return (
    <div className="flex flex-col">
      <div className="flex flex-col mb-4 p-4 border-b border-solid border-black">
        <form>
          <input
            type="text"
            placeholder="type a card name"
            className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...bindCardList}
          />
        </form>
        {cardlist.data.length > 0 &&
          <div className="mt-2">
            {cardlist.data.map((card: string) => {
              return (
                <button 
                  key={card}
                  onClick={handleCardSelect}
                  className="bg-gray-500 hover:bg-gray-700 text-white py-1 px-3 rounded-full mt-2 mr-2"
                >
                  {card}
                </button>
              )
            })}
          </div>
        }
      </div>
      <CardProvider cardName={cardName}>
        <div className="p-4">
          <CardPreview />
          <CardData />
        </div>
      </CardProvider>
    </div>
  )
}