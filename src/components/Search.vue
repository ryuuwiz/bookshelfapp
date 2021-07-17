<template>
  <div class="p-3 mb-4 mx-auto lg:w-6/12 bg-gray-200 rounded-lg shadow-xl">
    <h2 class="mb-4 text-2xl text-center font-bold text-gray-600">
      Search Book
    </h2>
    <div class="flex flex-row items-center justify-between">
      <input
        v-model="query"
        type="text"
        class="
          p-2
          m-2
          w-full
          rounded-lg
          border-0
          shadow-md
          focus:ring-2 focus:ring-blue-500
          text-lg
        "
        placeholder="Book Title"
        @keyup.enter="addSearch"
      />
      <button
        class="
          p-2
          w-1/3
          rounded-lg
          text-white
          hover:bg-blue-600
          text-lg
          font-bold
          bg-gradient-to-r
          from-indigo-400
          to-blue-500
          hover:from-indigo-500 hover:to-blue-600
        "
        @click="addSearch"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Search',
  setup() {
    const store = useStore()

    const query = ref('')

    const addSearch = async () => {
      if (query.value !== '') {
        await store.dispatch('addSearch', {
          query: query.value,
          status: true,
        })
        return (query.value = '')
      }
      return await store.dispatch('addSearch', {
        query: '',
        status: false,
      })
    }

    return {
      query,
      addSearch,
    }
  },
}
</script>
