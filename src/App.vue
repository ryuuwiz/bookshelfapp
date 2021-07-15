<template>
  <div class="font-poppins">
    <Header />
    <div class="p-2">
      <Form :books="books" />
      <inCompleteBooks :books="books" />
    </div>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { ref } from 'vue'

import Header from './components/Header.vue'
import Form from './components/Form.vue'
import inCompleteBooks from './components/inCompleteBooks.vue'

export default {
  name: 'App',
  components: {
    Header,
    Form,
    inCompleteBooks,
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

    return {
      books,
    }
  },
}
</script>
