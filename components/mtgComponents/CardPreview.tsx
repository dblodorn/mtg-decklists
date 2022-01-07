import { css } from "@emotion/react"
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
    <div 
      className="flex flex-row"
      css={css`
        width: 100%;
        border-bottom: var(--border-black);
      `}
    >
      {cardData !== {} && 
        <>
          <div
            css={css`
              width: calc(100% / 3);
              img {
                width: 100%;
                height: auto;
              }
            `}
          >
            <img src={cardData?.image_uris?.art_crop} alt={cardData?.name} />
          </div>
          <div 
            className="flex flex-col p-3"
            css={css`
              width: calc((100% / 3) * 2);
            `}
          >
            <span>{cardData?.name}</span>
            {/*<span>{cardData?.type_line}</span>
            <span>{cardData?.oracle_text}</span>*/}
            <span>{cardData?.mana_cost}</span>
            <div>
              <label>Cards:</label>
              <input type="number" id="points" name="points" step="1" min="0" max="4" placeholder="0"></input>
            </div>
          </div>
        </>
      }
    </div>
  )
}