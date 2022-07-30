export default function replaceIdsFromUrl(urlArray) {
  const arrayIds = [];
  urlArray.forEach((url) => {
    const itemId = parseInt(url.replace(/[^0-9]/g, ""));
    arrayIds.push(itemId);
  });
  return arrayIds;
}
