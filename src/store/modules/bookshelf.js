import { nanoid } from 'nanoid'

export default {
  namespace: true,

  // State
  state: () => ({
    bookshelf: [
      {
        id: nanoid(),
        title: 'Eloquent JavaScript: A Modern Introduction to Programming',
        author: 'Marijn Haverbeke',
        year: 2011,
        isComplete: false,
      },
      {
        id: nanoid(),
        title: 'Fullstack Vue: The Complete Guide to Vue.js and Friends',
        author: 'Ari Lerner and Nate Murray',
        year: 2018,
        isComplete: true,
      },
    ],
  }),

  // Actions
  actions: {
    addBook: async ({ commit }, data) => await commit('setBook', data),
    removeBook: async ({ commit }, data) => await commit('dropBook', data),
  },

  // Mutations
  mutations: {
    setBook: (state, payload) =>
      state.bookshelf.push({
        id: nanoid(),
        title: payload.bookTitle,
        author: payload.bookYear,
        year: payload.bookYear,
        isComplete: payload.bookisComplete,
      }),
    dropBook: (state, payload) => state.bookshelf.splice(payload, 1),
  },

  // Getters
  getters: {
    getBookshelf: (state) => state.bookshelf,
    inCompleteBooks: (state) =>
      state.bookshelf.filter((e) => e.isComplete === false),
    completeBooks: (state) =>
      state.bookshelf.filter((e) => e.isComplete === true),
    findBookIndex: (state) => (id) => {
      let i = 0
      for (let book of state.bookshelf) {
        if (book.id === id) return i
        i++
      }
      return -1
    },
  },
}
