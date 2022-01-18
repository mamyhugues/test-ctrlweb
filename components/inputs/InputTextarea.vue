<template>
    <ValidationProvider 
        rules="requirede" 
        v-slot="{ errors }"
    >
        <textarea 
            class="text-form text-3xl bg-bgform lg:text-sm w-full lg:w-60 px-9 py-5 lg:py-2"
            :class="placeholderColor"
            model="msg" 
            cols="30" 
            rows="10"
            :placeholder="text"
            :error-messages="errors"
        ></textarea>
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
                msg: null,
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