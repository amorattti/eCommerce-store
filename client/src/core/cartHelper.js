export const addItemToLocalStorage = (item, next) => {
  let cart = []

  if (typeof window !== 'undefined') {
    if(localStorage.getItem('cart')) {
      console.log('YES')
      cart = JSON.parse(localStorage.getItem("cart"))
    }

    cart.push({
      ...item,
      count: 1
    })

    const setArray = Array.from(new Set(cart.map(product => product._id)))
    // output ['617ee42128533daa6329295c'] prvent duplicates 
    const newSet = setArray.map(id => cart.find(p => p._id === id))
    // output [{…}] populate array without duplicates

    localStorage.setItem('cart', JSON.stringify(newSet)) // set as json
    next()
  }
}