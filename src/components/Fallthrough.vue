<template>
  <h3>Todo List</h3>  
  <ul>
    <Todo-List
      v-for="x in items"
      :key="x"
      :item-name="x"
      style="background-color: lightgreen;"
    />
  </ul>
  <input class="form form-control" v-model="newItem">
  <button class="btn btn-outline-success" @click="addItem">Add</button>
</template>

<script>
  export default {
    data() {
      return {
        newItem: '',
        items: ['Buy apples','Make pizza','Mow the lawn']
      };
    },
    methods: {
      addItem() {
        if (this.newItem === '') return alert('Please enter an item');
        this.items.push(this.newItem),
        this.newItem = '';
      }
    }
  }
</script>