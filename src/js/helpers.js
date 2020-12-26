export const delay = (fn, ms) => {
  setTimeout(() => {
    fn()
  }, ms)
}
