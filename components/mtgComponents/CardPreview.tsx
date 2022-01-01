import { useContext } from "react"
import { CardContext } from "./CardContext"

export const CardPreview = () => {
  const { cardData, loading, error } = useContext(CardContext)
  
  if (loading) {
    return <div>Loading</div>
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>
  }

  return (
    <div>
      {cardData !== {} && <img src={cardData && cardData?.image_uris?.small} alt="" />}
    </div>
  )
}