<template>
    <button class="rounded-3xl px-5 py-5 lg:py-2">
        {{ confirm }}
    </button>
</template>

<script>
    export default {
        props: {
            invalid:{
                type: Boolean,
            },
            confirm:{
                type: String
            },
            _path:{
                type: String
            }
        },
        methods:{
            submitForm(){
                this.$router.push (this.localePath(this._path))
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>