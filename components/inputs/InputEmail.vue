<template>
    <ValidationProvider 
        rules="required|email|emailUnique" 
        v-slot="{ errors }"
    >
        <input
            class="text-form text-3xl bg-bgform lg:text-sm rounded-3xl w-full lg:w-60 px-9 py-5 lg:py-2"
            placeholder="Your email"
            :class="placeholderColor"
            type="email"
            model="email"
            :error-messages="errors"
        >
    </ValidationProvider>
</template>

<script>
    import { ValidationProvider, ValidationObserver } from 'vee-validate'

    export default {
        props:{
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
                email: null,
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