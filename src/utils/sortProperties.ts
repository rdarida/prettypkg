export function sortProperties(obj: any): any {
  const sortedObj: any = {};

  Object.keys(obj)
    .sort((a, b) => a.localeCompare(b))
    .forEach(key => {
      sortedObj[key] = obj[key];
    });

  return sortedObj;
}
