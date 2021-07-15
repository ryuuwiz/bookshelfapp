<template>
  <div class="font-poppins">
    <Header />
    <Form :books="books" />
  </div>
</template>

<script>
import { ref } from 'vue'
import Header from './components/Header.vue'
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    Header,
    Form,
  },
  setup() {
    const books = ref([])

    return {
      books,
    }
  },
}
</script>
