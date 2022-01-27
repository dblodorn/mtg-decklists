import React from "react";

export type DeckBuilderProps = {
  children: React.ReactElement
}

export const DeckBuilderContext = React.createContext<any>(undefined);

export const DeckBuilderProvider: React.FC<DeckBuilderProps> = ({
  children,
}) => {
   /* Deck List */
  const [deckList, setDecklist] = React.useState<any>([])
  const [cardSearchResult, setCardSearchResult] = React.useState<string>('')

  /* Card Search */
  const handleCardSelect = React.useCallback((event) => {
    setCardSearchResult(event.target.innerText)
  }, [cardSearchResult, setCardSearchResult])

  const addCard = React.useCallback(() => {
    /* @ts-ignore */
    setDecklist(deckList => [...deckList, cardSearchResult])
    console.log(deckList)
  }, [deckList, setDecklist, cardSearchResult, setCardSearchResult])

  return (
    <DeckBuilderContext.Provider value={{
      children,
      addCard,
      deckList,
      cardSearchResult,
      handleCardSelect
    }}>
      {children}
    </DeckBuilderContext.Provider>
  );
}
