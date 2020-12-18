export const state = () => ({
  allProducts: [],
  featuredProducts: [],
  menProducts: [],
  womenProducts: [],
  cartItems: [],
})

export const getters = {
  /* 
    return items from store
  */
  allProducts: (state) => state.allProducts,
  featuredProducts: (state) => state.featuredProducts,
  menProducts: (state) => state.menProducts,
  womenProducts: (state) => state.womenProducts,
  getCart: (state) => state.cartItems,
  getCartTotal: (state) =>
    state.cartItems.length < 1
      ? '0'
      : state.cartItems
          .map((el) => el.price * el.quantity)
          .reduce((a, b) => a + b),
}

export const actions = {
  async addItemToCart({ commit }, cartItem) {
    await commit('setCartItem', cartItem)
  },
}

export const mutations = {
  setProducts: (state, products) => (state.allProducts = products),
  setFeaturedProducts: (state, products) => (state.featuredProducts = products),
  setMenProducts: (state, products) => (state.menProducts = products),
  setWomenProducts: (state, products) => (state.womenProducts = products),
  setCartItem: (state, item) => state.cartItems.push(item),
}
