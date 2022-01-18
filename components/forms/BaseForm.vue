<template>
    <form
        @submit.prevent="submit"
        model="valid"
    >
        <slot name="body"></slot>
        <slot name="action"></slot>
    </form>
</template>

<script>
    import { ValidationProvider, ValidationObserver, validate } from 'vee-validate'

    export default {
        components:{
            ValidationProvider,
            ValidationObserver,
        },
        data(){
            return{
                valid: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>