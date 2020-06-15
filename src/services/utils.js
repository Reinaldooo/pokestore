export const placeholder = "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel"

export function createSlug(string) {
  if(!string) return "";
  return string.trim().toLowerCase().replace(/\s/g, '-');
}

export function strPriceToNum(string) {
  if(!string) return 0;
  return parseFloat(string.trim().replace("R$ ", "").replace(",", "."))
}

export function numPriceToStr(num) {
  console.log(num)
  if(!num) return "";
  return "R$ " + num.toFixed(2)
}