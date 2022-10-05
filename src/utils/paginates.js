export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  let endIndex = pageNumber * pageSize;
  return items.slice(startIndex, endIndex);
}
