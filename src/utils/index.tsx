export function getstr(str: string) {
  var arr = str.split("")
  var arr1 = arr.slice(0, 10)
  var arr2 = arr.slice(arr.length - 10, arr.length - 1)
  return arr1.join("") + "..." + arr2.join("")
}
/*** 创建随机的key **/
export const generateRandomKey = () => {
  return Math.random().toString(16).substring(2, 10)
}
