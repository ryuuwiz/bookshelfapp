<template>
  <div class="font-poppins">
    <Header />
    <Form />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    Header,
    Form,
  },
}
</script>
