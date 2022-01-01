import { useCallback, useState } from "react";
import { getCardsAlpha } from "../mtgServices";

export type SearchResult = {
  total_values: number | any,
  data: any
}

export const useCardsAutocomplete = () => {
  const [cardlist, setCardlist] = useState({
    total_values: 0,
    data: []
  })

  const handleOnChange = useCallback(async (value) => {
    try {
      const response = await getCardsAlpha(value as string);
      setCardlist({
        total_values: response.total_values,
        data: response.data
      });
    } catch (error) {
      console.log(error)
    }
  }, [cardlist, setCardlist]);

  return {
    cardlist,
    setCardlist,
    reset: () => setCardlist({total_values: 0, data: []}),
    bind: {
      cardlist,
      onChange: (event: any) => {
        handleOnChange(event.target.value);
      }
    }
  };
}