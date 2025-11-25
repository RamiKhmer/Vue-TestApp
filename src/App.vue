<script>
export default {
  data() {
    return {
      foodMenu: [
        { foodId: 1, name: 'Sushi Platter', price: 24.99, rating: 4.9, reviews: 200, desc: 'Assorted fresh sushi with wasabi and soy sauce.', favBtnBg: false },
        { foodId: 2, name: 'Ramen Bowl', price: 12.99, rating: 4.7, reviews: 150, desc: 'Hearty ramen with pork, egg, and vegetables.', favBtnBg: false },
        { foodId: 3, name: 'Tempura', price: 15.49, rating: 4.8, reviews: 180, desc: 'Crispy tempura shrimp and vegetables with dipping sauce.', favBtnBg: false },
        { foodId: 4, name: 'Teriyaki Chicken', price: 13.99, rating: 4.6, reviews: 120, desc: 'Grilled chicken glazed with teriyaki sauce served with rice.', favBtnBg: false },
        { foodId: 5, name: 'Miso Soup', price: 4.99, rating: 4.5, reviews: 90, desc: 'Traditional miso soup with tofu and seaweed.', favBtnBg: false },
        { foodId: 6, name: 'Green Tea Ice Cream', price: 6.49, rating: 4.8, reviews: 110, desc: 'Creamy green tea flavored ice cream.', favBtnBg: false },
        { foodId: 7, name: 'Edamame', price: 5.99, rating: 4.4, reviews: 80, desc: 'Steamed edamame pods sprinkled with sea salt.', favBtnBg: false },
        { foodId: 8, name: 'Sashimi Deluxe', price: 29.99, rating: 5.0, reviews: 220, desc: 'Premium selection of fresh sashimi cuts.', favBtnBg: false },
        { foodId: 9, name: 'Udon Noodles', price: 11.99, rating: 4.3, reviews: 70, desc: 'Thick udon noodles in a savory broth with vegetables.', favBtnBg: false },
        { foodId: 10, name: 'Chicken Katsu', price: 14.49, rating: 4.7, reviews: 130, desc: 'Breaded and fried chicken cutlet served with tonkatsu sauce.', favBtnBg: false },
        { foodId: 11, name: 'Seaweed Salad', price: 7.49, rating: 4.5, reviews: 95, desc: 'Refreshing seaweed salad with sesame dressing.', favBtnBg: false },
        { foodId: 12, name: 'Tonkotsu Ramen', price: 13.49, rating: 4.9, reviews: 160, desc: 'Rich pork bone broth ramen with chashu and soft-boiled egg.', favBtnBg: false },
        { foodId: 13, name: 'Gyoza Dumplings', price: 8.99, rating: 4.6, reviews: 140, desc: 'Pan-fried dumplings filled with pork and vegetables.', favBtnBg: false },
      ]
    };
  },

  methods: {
    recieveEmit(getFoodId) {
      //  alert(`Food Item with ID ${getFoodId} button background toggled!`);
      const foundFood = this.foodMenu.find(
        food => food.foodId === getFoodId
      );
      foundFood.favBtnBg = !foundFood.favBtnBg;
    }
  }
};
</script>

<template>
  <!-- <component :is="'Temp-Com'"/> -->
  <div class="row mb-2">
    <div class="row g-4">
      <div v-for="food in foodMenu" class="col-sm-12 col-md-6 col-lg-3 d-flex">
        <component @change-bg-btn="recieveEmit" :is="'Test-Props'" :food-menu="food" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
