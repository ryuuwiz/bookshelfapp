<template>
  <div class="p-3 mb-4 mx-auto lg:w-6/12 bg-gray-200 rounded-lg shadow-xl">
    <h2 class="mb-4 text-2xl font-bold">Not Finished Books</h2>
    <div
      v-for="book in inCompleteBooks.filter((e) => e.isComplete === false)"
      :key="book.id"
      class="
        p-2
        mb-2
        mx-auto
        w-full
        bg-gradient-to-r
        from-indigo-500
        to-blue-600
        rounded-lg
        shadow-xl
        text-white text-lg
      "
    >
      <p>{{ book.title }}</p>
      <p>{{ book.author }}</p>
      <p>{{ book.year }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'InCompleteBooks',
  props: {
    books: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const inCompleteBooks = ref(props.books)

    return {
      inCompleteBooks,
    }
  },
}
</script>
