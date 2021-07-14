<template>
  <form
    class="p-4 sm:mx-2 lg:mx-auto lg:w-6/12 bg-gray-100 rounded-md shadow-xl"
  >
    <div class="mb-3">
      <label for="bookTitle" class="text-xl font-bold text-gray-600"
        >Title</label
      >
      <br />
      <input
        id="bookTitle"
        type="text"
        class="
          p-2
          mt-2
          rounded-lg
          w-full
          border-0
          shadow-md
          focus:ring-2 focus:ring-blue-500
          text-lg
        "
        placeholder="Book Title"
      />
    </div>

    <div class="mb-3">
      <label for="bookAuthor" class="text-xl font-bold text-gray-600"
        >Author</label
      >
      <br />
      <input
        id="bookAuthor"
        type="text"
        class="
          p-2
          mt-2
          rounded-lg
          w-full
          border-0
          shadow-md
          focus:ring-2 focus:ring-blue-500
          text-lg
        "
        placeholder="Book Author"
      />
    </div>

    <div class="mb-3">
      <label for="bookYear" class="text-xl font-bold text-gray-600">Year</label>
      <br />
      <input
        id="bookYear"
        type="text"
        class="
          p-2
          mt-2
          rounded-lg
          w-full
          border-0
          shadow-md
          focus:ring-2 focus:ring-blue-500
          text-lg
        "
        placeholder="Book Year"
      />
    </div>

    <div class="mb-3">
      <label for="bookisComplete" class="text-xl font-bold text-gray-600"
        >Completed</label
      >
      <br />
      <input
        id="bookisComplete"
        type="checkbox"
        class="
          p-2
          mt-2
          ml-2
          rounded-sm
          border-0
          shadow-md
          focus:ring-2 focus:ring-blue-500
          text-lg
        "
      />
    </div>

    <button
      type="submit"
      class="
        p-2
        w-full
        rounded-lg
        text-white
        hover:bg-blue-600
        text-lg
        font-bold
        bg-gradient-to-r
        from-indigo-500
        to-blue-500
        hover:from-indigo-600 hover:to-blue-600
      "
    >
      Add Book
    </button>
  </form>
</template>

<script>
export default {
  name: 'Form',
}
</script>
