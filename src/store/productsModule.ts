import { Commit, IProducts, State } from '@/interface'
import { collection, getDocs } from '@firebase/firestore'
import { db } from '@/firebase/config'

export const productsModule = {
  state: () => ({
    products: [],
    isProductsLoading: false
  }),
  getters: {
    products (state: State) {
      return state.products
    },
    isProductsLoading (state: State) {
      return state.isProductsLoading
    }
  },
  mutations: {
    setProducts (state: State, products: IProducts) {
      state.products.push(products)
    },
    setLoading (state: State, bool: boolean) {
      state.isProductsLoading = bool
    }
  },
  actions: {
    async fetchProducts ({ state, commit }: { state: State, commit: Commit }) {
      try {
        commit('setLoading', true)
        const querySnapshot = await getDocs(collection(db, 'products'))
        querySnapshot.forEach((doc) => {
          commit('setProducts', doc.data())
        })
        commit('setLoading', false)
      } catch (e) {
        throw new Error(e as string)
      }
    }
  },
  namespaced: true
}
