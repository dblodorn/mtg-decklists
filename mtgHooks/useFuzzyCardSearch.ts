import { useCallback, useState } from "react";
import { getCardFuzzy } from "../mtgServices/index";

export const useFuzzyCardSearch = () => {
  const [cardData, setCardData] = useState<any>({})
  const [error, setError] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const handleFuzzyCardSearch = useCallback(async (event) => {
    try {
      const response = await getCardFuzzy(event.target.innerText as string);
      setCardData(response)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }, [cardData, setCardData])

  const fuzzyCardSearch = useCallback(async (cardName: string) => {
    try {
      const response = await getCardFuzzy(cardName as string);
      setCardData(response)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }, [cardData, setCardData])

  return {
    handleFuzzyCardSearch,
    fuzzyCardSearch,
    cardData,
    error,
    loading,
  }
}
