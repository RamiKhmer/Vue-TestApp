<template>
    <p class="card-text text-muted mb-3">
                {{ foodDesc }}
    </p>
</template>

<script>
    export default {
        props: {
            'foodDesc': {
                type: String,
                required: true
            }
        },

   
    };
</script>