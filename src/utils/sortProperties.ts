export function sortProperties(obj: any): any {
  const sortedObj: any = {};

  Object.keys(obj)
    .sort()
    .forEach(key => {
      sortedObj[key] = obj[key];
    });

  return sortedObj;
}
