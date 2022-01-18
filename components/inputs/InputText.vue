<template>
    <ValidationProvider 
        rules="requirede" 
        v-slot="{ errors }"
    >
        <input
            class="text-form text-3xl bg-bgform lg:text-sm rounded-3xl w-full lg:w-60 px-9 py-5 lg:py-2"
            :placeholder="text"
            :class="placeholderColor"
            type="text"
            model="name"
            :error-messages="errors"
        >
    </ValidationProvider>
</template>

<script>
    import { ValidationProvider, ValidationObserver } from 'vee-validate'

    export default {
        props:{
            text:{
                type: String,
                required: true
            },
            placeholderColor:{
                type: String
            }
        },
        components:{
            ValidationProvider,
            ValidationObserver,
        },
        data(){
            return {
                name: null,
                errors: []
            }
        },
    }
</script>

<style>
.text-form{
    color: #18171D;
    border: 1px solid #E8E8E8;
}

</style>