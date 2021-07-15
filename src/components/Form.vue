<template>
  <form
    class="p-4 mb-5 mx-auto lg:w-6/12 bg-gray-200 rounded-lg shadow-xl"
    @submit.prevent="addBook"
  >
    <div class="mb-3">
      <label for="bookTitle" class="text-xl font-bold text-gray-600"
        >Title</label
      >
      <br />
      <input
        id="bookTitle"
        v-model="bookTitle"
        type="text"
        class="
          p-2
          mt-2
          rounded-lg
          w-full
          border-0
          shadow-md
          focus:ring-2 focus:ring-blue-500
          text-lg
        "
        placeholder="Book Title"
      />
    </div>

    <div class="mb-3">
      <label for="bookAuthor" class="text-xl font-bold text-gray-600"
        >Author</label
      >
      <br />
      <input
        id="bookAuthor"
        v-model="bookAuthor"
        type="text"
        class="
          p-2
          mt-2
          rounded-lg
          w-full
          border-0
          shadow-md
          focus:ring-2 focus:ring-blue-500
          text-lg
        "
        placeholder="Book Author"
      />
    </div>

    <div class="mb-3">
      <label for="bookYear" class="text-xl font-bold text-gray-600">Year</label>
      <br />
      <input
        id="bookYear"
        v-model="bookYear"
        type="text"
        class="
          p-2
          mt-2
          rounded-lg
          w-full
          border-0
          shadow-md
          focus:ring-2 focus:ring-blue-500
          text-lg
        "
        placeholder="Book Year"
      />
    </div>

    <div class="mb-3 flex items-center">
      <label
        for="bookisComplete"
        class="flex-initial text-xl font-bold text-gray-600"
        >Completed</label
      >
      <input
        id="bookisComplete"
        v-model="bookisComplete"
        type="checkbox"
        class="
          flex-none
          p-2
          ml-2
          rounded-sm
          border-0
          shadow-md
          focus:ring-2 focus:ring-blue-500
          text-lg
        "
      />
    </div>

    <button
      type="submit"
      class="
        p-2
        w-full
        rounded-lg
        text-white
        hover:bg-blue-600
        text-lg
        font-bold
        bg-gradient-to-r
        from-indigo-400
        to-blue-500
        hover:from-indigo-500 hover:to-blue-600
      "
    >
      Add Book
    </button>
  </form>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import { nanoid } from 'nanoid'

export default {
  name: 'Form',
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      bookTitle: '',
      bookAuthor: '',
      bookYear: null,
      bookisComplete: false,
    })

    const booksData = ref(props.books)

    async function addBook() {
      const addData = await booksData.value.push({
        id: nanoid(),
        title: state.bookTitle,
        author: state.bookAuthor,
        year: state.bookYear,
        isComplete: state.bookisComplete,
      })
      clearInput()
      return addData
    }

    function clearInput() {
      state.bookTitle = ''
      state.bookAuthor = ''
      state.bookYear = null
      state.bookisComplete = false
      return state
    }

    return {
      ...toRefs(state),
      booksData,
      addBook,
      clearInput,
    }
  },
}
</script>
