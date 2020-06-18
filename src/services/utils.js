export const placeholder = "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel"

export function createSlug(string) {
  if(!string) return "";
  return string.trim().toLowerCase().replace(/\s/g, '-');
}

export function strPriceToCents(string) {
  if(!string) return 0;
  return parseFloat(string.trim().replace("R$ ", "").replace(",", "."))*100
}

export function numPriceToStr(num) {
  if(!num) return "";
  return "R$ " + num.toFixed(2)
}