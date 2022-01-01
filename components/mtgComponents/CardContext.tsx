import React, {
  createContext,
  ReactElement,
  useEffect
} from 'react'
import { useFuzzyCardSearch } from '../../mtgHooks';

export interface CardContextProps {
  children?: ReactElement,
  cardName?: string
}

export const CardContext = createContext<any>(undefined);

export const CardProvider: React.FC<CardContextProps> = ({
  children,
  cardName = '',
}) => {
  const { fuzzyCardSearch, cardData } = useFuzzyCardSearch()

  useEffect(() => {
    fuzzyCardSearch(cardName)
  }, [cardName])

  return (
    <CardContext.Provider value={{
      children,
      cardName,
      cardData,
    }}>
      {children}
    </CardContext.Provider>
  );
}
