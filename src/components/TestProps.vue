<template>
    <div class="card h-100 shadow-sm border-0">
        <img :src="'https://placehold.co/600x400/FF5733/white/jpg?text=' + encodeURIComponent(foodMenu.name)"
            class="card-img-top" alt="Placeholder image of a delicious meal">
        <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-start">
                <h5 class="card-title mb-1">{{ foodMenu.name }}</h5>
                <h5 class="text-success font-weight-bold">${{ foodMenu.price }}</h5>
            </div>

            <component is="Food-Desc" :food-desc="foodMenu.desc"></component>

            <div class="mt-auto">
                <small class="text-info d-block mb-2">⭐ {{ foodMenu.rating }} ({{ foodMenu.reviews }} Reviews)</small>
                <a @click="changeButtonBg()"
                    :class="foodMenu.favBtnBg ? 'btn btn-primary btn-block' : 'btn btn-danger btn-block'">Add to Cart</a>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        'foodMenu': {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            // favBtnBg: false
        };
    },

    methods: {
        changeButtonBg() {
            // this.foodMenu.favBtnBg = !this.foodMenu.favBtnBg;
            this.$emit('change-bg-btn', this.foodMenu.foodId);
        }
    }
};
</script>