export const addItemToLocalStorage = (item, next) => {
  let cart = []

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
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

export const itemTotal = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      return JSON.parse(localStorage.getItem('cart')).length
    }
  }
  return 0
}

export const getCart = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('cart'))
  }
  return []
}

export const updateItem = (productId, inputValue) => {
  let cart = []
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'))
    }

    cart.map((product, index) => {
      if (product._id === productId) {
        cart[index].count = inputValue
      }
    })

    localStorage.setItem('cart', JSON.stringify(cart))
  }
}

export const removeItem = (productId) => {
  let cart = []
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'))
    }

    const newCart = cart.filter(product => product._id !== productId)

    localStorage.setItem('cart', JSON.stringify(newCart))
  }
}