<template>
<!-- изучи динамическеи классы CSS vue -->
  <div class="about">
    <a v-bind:href="newLink">Дзен</a>
    <h1>{{ header }}</h1>
    <ul>
      <li v-for="zorro in items" :key="zorro.id">{{ zorro.label }}</li>
      <!--  <li v-for="({id, label}, index) in items" :key="id">{{ index }} {{ label }}</li> -->
    </ul>
    <input
      type="text"
      placeholder="add an item"
      v-model.trim="newItem"
      v-on:keyup.enter="items.push({ id: items.lenght + 1, label: newItem })"
    />

    <label>
      <input type="checkbox" v-model="newItemHighPriority" />
      HighPriority
    </label>
    <br />
    {{ newItemHighPriority }}
    <br />
   <!--  <button @click="items.push({ id: items.lenght + 1, label: newItem })">
      Save item
    </button> -->
    <button @click="saveItem" v-bind:disabled="newItem.length === 0">
      Save item
    </button>
    <!-- <label>
  <input type="checkbox" value="chocolate" v-model="iceCreamFlavors">
  Chocolate 
</label>
<label>
  <input type="checkbox" value="vanila" v-model="iceCreamFlavors">
  Vanilla
</label>
<label>
  <input type="checkbox" value="strawberry" v-model="iceCreamFlavors">
  Strawberry 
</label>
<br>
{{ iceCreamFlavors }} -->
<!-- <p v-if="!items.lenght">
  Nothing to see here
</p> -->
<div
class="cssClass"
:class="{
  nameclass: true
}">
<div
class="cssClass"
:class="[trueFalseVar ? 'className' : '']">

</div>
<p>
  Computed Property:
  {{ characterCount }}
</p>
  </div>
  </div>
<!--  could be array, oblect syntax for classes binding or combined  -->
{{ state.count}}
</template>
<script setup>
import { ref, reactive } from "vue";
const state = reactive({count: 0})

const trueFalseVar = ref(true)
const items = ref([
/*   { id: 1, label: "first item" },
  { id: 2, label: "second item" },
  { id: 3, label: "tertiary item" }, */
]);
const newItem = ref("");
const newItemHighPriority = ref(false);
const header = ref("Shopping List App");
const iceCreamFlavors = ref([]);
const saveItem = () => {
  items.value.push({ id: items.value.lenght + 1, label: newItem.value })
  newItem.value = ""
  }
  const newLink = ref("https://dzen.ru/?clid=2233626&yredirect=true")
/* const editing = ref(false);   */
// there is a reactivity system
const characterCount =/*  computed( */()=>{
  return
}/* ) */
</script>
<style scoped>
</style>