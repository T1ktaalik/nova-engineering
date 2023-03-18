<script  setup>

const query = ref("")
const movies  = ref()
async function  search() {
 const result  = await  $fetch("https://www.omdbapi.com/") 
}
</script>

<template>
  <div>
    <div>
      <form @submit.prevent="search">
        <input type="text">
        <button>
          Search
        </button>
        
      </form>
      <div>
        {{ result }}
      </div>
    </div>
    Page: Home page
  </div>
</template>

<style scoped></style>
