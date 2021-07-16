import { createStore, createLogger } from 'vuex'
import bookshelf from './modules/bookshelf'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    bookshelf,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})
