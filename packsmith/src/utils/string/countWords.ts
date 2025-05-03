export function countWords(str: string) {
  return str.trim().split(/\s+/).filter(Boolean).length;
}
