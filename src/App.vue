<template>
  <div class="font-poppins">
    <Header />
    <div class="p-2">
      <Form />
      <Search />
      <Bookshelf />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Form from './components/Form.vue'
import Bookshelf from './components/Bookshelf.vue'
import Search from './components/Search.vue'

export default {
  name: 'App',
  components: {
    Header,
    Form,
    Search,
    Bookshelf,
  },
}
</script>
