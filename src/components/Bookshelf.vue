<template>
  <div class="p-3 mb-4 mx-auto lg:w-6/12 bg-gray-200 rounded-lg shadow-xl">
    <h2 class="mb-4 text-2xl font-bold text-gray-600">InCompleted Books</h2>
    <div
      v-for="inCompleteBook in inCompleteBooks"
      :key="inCompleteBook.id"
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
      <p class="text-xl font-bold">{{ inCompleteBook.title }}</p>
      <p>Author: {{ inCompleteBook.author }}</p>
      <p>Year: {{ inCompleteBook.year }}</p>
    </div>
  </div>

  <div class="p-3 mb-4 mx-auto lg:w-6/12 bg-gray-200 rounded-lg shadow-xl">
    <h2 class="mb-4 text-2xl font-bold text-gray-600">Completed Books</h2>
    <div
      v-for="completeBook in completeBooks"
      :key="completeBook.id"
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
      <p class="text-xl font-bold">{{ completeBook.title }}</p>
      <p>Author: {{ completeBook.author }}</p>
      <p>Year: {{ completeBook.year }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Bookshelf',
  setup() {
    const store = useStore()
    return {
      inCompleteBooks: computed(() => store.getters.inCompleteBooks),
      completeBooks: computed(() => store.getters.completeBooks),
    }
  },
}
</script>
