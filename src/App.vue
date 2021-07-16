<template>
  <div class="font-poppins">
    <Header />
    <div class="p-2">
      <Form />
      <Bookshelf />
    </div>
  </div>
</template>

<script>
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
}
</script>
