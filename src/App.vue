<script>
export default {
  data() {
    return {
      foodMenu: [
        { name: 'Sushi Platter', price: 24.99, rating: 4.9, reviews: 200, desc: 'Assorted fresh sushi with wasabi and soy sauce.' },
        { name: 'Ramen Bowl', price: 12.99, rating: 4.7, reviews: 150, desc: 'Hearty ramen with pork, egg, and vegetables.' },
        { name: 'Tempura', price: 15.49, rating: 4.8, reviews: 180, desc: 'Crispy tempura shrimp and vegetables with dipping sauce.' },
        { name: 'Teriyaki Chicken', price: 13.99, rating: 4.6, reviews: 120, desc: 'Grilled chicken glazed with teriyaki sauce served with rice.' },
        { name: 'Miso Soup', price: 4.99, rating: 4.5, reviews: 90, desc: 'Traditional miso soup with tofu and seaweed.' },
        { name: 'Green Tea Ice Cream', price: 6.49, rating: 4.8, reviews: 110, desc: 'Creamy green tea flavored ice cream.' },
        { name: 'Edamame', price: 5.99, rating: 4.4, reviews: 80, desc: 'Steamed edamame pods sprinkled with sea salt.' },
        { name: 'Sashimi Deluxe', price: 29.99, rating: 5.0, reviews: 220, desc: 'Premium selection of fresh sashimi cuts.' },
        { name: 'Udon Noodles', price: 11.99, rating: 4.3, reviews: 70, desc: 'Thick udon noodles in a savory broth with vegetables.' },
        { name: 'Chicken Katsu', price: 14.49, rating: 4.7, reviews: 130, desc: 'Breaded and fried chicken cutlet served with tonkatsu sauce.' },
        { name: 'Seaweed Salad', price: 7.49, rating: 4.5, reviews: 95, desc: 'Refreshing seaweed salad with sesame dressing.' },
        { name: 'Tonkotsu Ramen', price: 13.49, rating: 4.9, reviews: 160, desc: 'Rich pork bone broth ramen with chashu and soft-boiled egg.' },
        { name: 'Gyoza Dumplings', price: 8.99, rating: 4.6, reviews: 140, desc: 'Pan-fried dumplings filled with pork and vegetables.' },
      ]
    };
  },
};
</script>

<template>
  <!-- <component :is="'Temp-Com'"/> -->
  <div class="row mb-2">
    <div class="row g-4">
      <div v-for="food in foodMenu" class="col-sm-12 col-md-6 col-lg-3 d-flex">
        <component :is="'Test-Props'" :food-menu="food" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
