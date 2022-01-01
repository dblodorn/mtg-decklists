export const getCardFuzzy = (query: string) => {
  const result = fetch(`https://api.scryfall.com/cards/named?fuzzy=${query}`)
    .then((response) => response.json())
  return result;
};

export const getCardsAlpha = (query: string) => {
  const result = fetch(`https://api.scryfall.com/cards/autocomplete?q=${query}`)
    .then((response) => response.json())
  return result;
};
