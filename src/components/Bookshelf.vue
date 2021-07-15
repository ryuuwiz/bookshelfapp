<template>
  <div class="p-3 mb-4 mx-auto lg:w-6/12 bg-gray-200 rounded-lg shadow-xl">
    <h2 class="mb-4 text-2xl font-bold text-gray-600">
      {{ bookshelfTitle }}
    </h2>
    <div
      v-for="book in booksData"
      :key="book.id"
      class="
        p-2
        mb-2
        mx-auto
        w-full
        bg-gradient-to-r
        from-indigo-400
        to-blue-500
        rounded-lg
        shadow-xl
        text-white text-lg
      "
    >
      <p class="text-xl font-bold">{{ book.title }}</p>
      <p>Author: {{ book.author }}</p>
      <p>Year: {{ book.year }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Bookshelf',
  props: {
    title: {
      type: String,
      required: true,
    },
    books: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const bookshelfTitle = ref(props.title)
    const booksData = ref(props.books)

    return {
      bookshelfTitle,
      booksData,
    }
  },
}
</script>
