export const getType = (data: any) => {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
}