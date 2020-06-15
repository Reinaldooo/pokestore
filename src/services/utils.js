export const placeholder = "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel"

export function createSlug(string) {
  if(!string) return "";
  return string.trim().toLowerCase().replace(/\s/g, '-');
}