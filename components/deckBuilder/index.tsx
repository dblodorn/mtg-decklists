import { useState, useCallback } from "react";
import { useCardsAutocomplete } from "../../mtgHooks";
import { CardPreview, CardData, CardProvider } from "../mtgComponents";

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
    <div className="grid grid-flow-col gap-4">
      <div className="col-span-1 flex flex-col">
        <form>
          <input
            type="text"
            placeholder="type a card name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...bindCardList}
          />
        </form>
        <div>
          {cardlist.data.map((card: string) => {
            return (
              <button 
                key={card}
                onClick={handleCardSelect}
                className="button"
              >
                {card}
              </button>
            )
          })}
        </div>
      </div>
      <CardProvider cardName={cardName}>
        <div className="col-span-3">
          <CardPreview />
          <CardData />
        </div>
      </CardProvider>
    </div>
  )
}