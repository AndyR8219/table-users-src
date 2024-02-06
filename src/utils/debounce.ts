export const debounce = <T extends string[]>(
  fn: (...args: T) => void,
  delay: number
) => {
  let timerId: NodeJS.Timeout
  return (...arg: T) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => fn(...arg), delay)
  }
}
