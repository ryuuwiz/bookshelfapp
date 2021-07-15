<template>
  <div class="font-poppins">
    <Header />
    <div class="p-2">
      <Form :books="books" />
      <Bookshelf title="InCompleted Books" :books="inCompleteBooks" />
      <Bookshelf title="Completed Books" :books="CompleteBooks" />
    </div>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { ref, computed } from 'vue'

import Header from './components/Header.vue'
import Form from './components/Form.vue'
import Bookshelf from './components/Bookshelf.vue'

export default {
  name: 'App',
  components: {
    Header,
    Form,
    Bookshelf,
  },
  setup() {
    const books = ref([
      {
        id: nanoid(),
        title: 'Hello False',
        author: 'Ryu',
        year: 2021,
        isComplete: false,
      },
      {
        id: nanoid(),
        title: 'Hello True',
        author: 'Ryu',
        year: 2021,
        isComplete: true,
      },
    ])

    const inCompleteBooks = computed(() =>
      books.value.filter((e) => e.isComplete === false),
    )

    const CompleteBooks = computed(() =>
      books.value.filter((e) => e.isComplete === true),
    )

    return {
      books,
      inCompleteBooks,
      CompleteBooks,
    }
  },
}
</script>
