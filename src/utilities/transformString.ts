export function transformString(str: string) {
  // Remove accents
  const removeAccents = (s: string) =>
    s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Transform the string
  return removeAccents(str)
    .trim() // Remove spaces from the start and end
    .replace(/\s+/g, "-") // Replace one or more spaces with hyphens
    .toLowerCase(); // Convert to lowercase
}
