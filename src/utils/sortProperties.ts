export function sortProperties(obj: any): any {
  const sortedObj: any = {};

  const keys = Object.keys(obj).sort((a, b) => a.localeCompare(b));

  for (const key of keys) {
    sortedObj[key] = obj[key];
  }

  return sortedObj;
}
