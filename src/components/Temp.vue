<style>
    li {
      display: inline-block;
      flex-basis: 80px;
      aspect-ratio: 1;
      margin: 5px;
       list-style: none;
    }
    li > img {
      box-sizing: border-box;
      width: 100px;
      padding: 3px;
      border: solid white 4px;
      border-radius: 5px;
    }
    img:hover {
      cursor: pointer;
    }
    .selClass {
      border: solid brown 4px;
      background-color: lightpink;
    }
</style>

<template>
    <div class="temp-component">
        <h1>Temperature Component</h1>
        <p>This is a placeholder for the Temp component.</p>
    </div>

    <ul>
        <li v-for="(item, index) in items"><img @click="select(index)" :src="item.img" alt="" :class="{selClass: item.sel}"></li>
    </ul>
</template>


<script>
export default {
    data() {
        return {
            items: [
                {img: 'https://www.svgrepo.com/show/530551/toilet-suction.svg', title: 'Item 1', sel: false},
                {img: 'https://www.svgrepo.com/show/530552/mouthwash-cup.svg', title: 'Item 2', sel: false},
                {img: 'https://www.svgrepo.com/show/530554/washing-machine.svg', title: 'Item 3', sel: false},
                {img: 'https://www.svgrepo.com/show/530563/toilet-paper.svg', title: 'Item 4', sel: false},
                {img: 'https://www.svgrepo.com/show/530567/laundry-detergent.svg', title: 'Item 5', sel: false},   
            ]
        };
    },

    methods: {
        select(index){
            this.items[index].sel = !this.items[index].sel;
        }
    },
};
</script>