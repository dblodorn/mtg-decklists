import { useContext } from "react"
import { CardContext } from "./CardContext"

export const CardData = () => {
  const { cardData } = useContext(CardContext)
  if (!cardData) {
    return null
  }
  return (
    <div className='code-wrapper'>
      <code>
        <pre>{JSON.stringify(cardData, null, 2)}</pre>
      </code>
    </div>
  )
}