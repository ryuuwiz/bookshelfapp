<template>
  <div class="p-3 mb-4 mx-auto lg:w-6/12 bg-gray-200 rounded-lg shadow-xl">
    <h2 class="mb-4 text-2xl font-bold text-gray-600">InCompleted Books</h2>
    <div
      v-for="inCompleteBook in inCompleteBooks"
      :key="inCompleteBook.id"
      class="
        p-3
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

      <Button
        button-title="Remove"
        button-class="
        p-2
        mt-2
        mb-2
        text-lg
        rounded-lg
        bg-red-500
        hover:bg-red-600"
        @click-event="removeBook(inCompleteBook.id)"
      />

      <Button
        button-title="Finished Reading"
        button-class="
        p-2
        mt-2
        ml-2
        mb-2
        text-lg
        rounded-lg
        bg-green-500
        hover:bg-green-600"
        @click-event="addBookToComplete(inCompleteBook.id)"
      />
    </div>
  </div>

  <div class="p-3 mb-4 mx-auto lg:w-6/12 bg-gray-200 rounded-lg shadow-xl">
    <h2 class="mb-4 text-2xl font-bold text-gray-600">Completed Books</h2>
    <div
      v-for="completeBook in completeBooks"
      :key="completeBook.id"
      class="
        p-3
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

      <Button
        button-title="Remove"
        button-class="
        p-2
        mt-2
        mb-2
        text-lg
        rounded-lg
        bg-red-500
        hover:bg-red-600"
        @click-event="removeBook(completeBook.id)"
      />

      <Button
        button-title="Not Finished Reading"
        button-class="
        p-2
        mt-2
        ml-2
        mb-2
        text-lg
        rounded-lg
        bg-green-500
        hover:bg-green-600"
        @click-event="addBookToInComplete(completeBook.id)"
      />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import Button from './Button.vue'

export default {
  name: 'Bookshelf',
  components: {
    Button,
  },
  setup() {
    const store = useStore()

    const removeBook = (id) =>
      store.dispatch('removeBook', store.getters.findBookIndex(id))

    const addBookToComplete = (id) =>
      store.dispatch('addBookToComplete', store.getters.findBookIndex(id))

    const addBookToInComplete = (id) =>
      store.dispatch('addBookToInComplete', store.getters.findBookIndex(id))

    return {
      inCompleteBooks: computed(() => store.getters.inCompleteBooks),
      completeBooks: computed(() => store.getters.completeBooks),
      removeBook,
      addBookToComplete,
      addBookToInComplete,
    }
  },
}
</script>
