<template>
    <div class="app">
        <nav 
            class="bg-mobile bg-center h-screen px-2 sm:px-4 md:bg-mobile-contain lg:bg-desktop"
        >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16 app-menu">
                    <div class="flex items-center">
                        <div class="hidden lg:block">
                            <div class="ml-10 flex-menu-items items-baseline">
                                    <a
                                        href="#"
                                        class="flex-items"
                                    >Home</a>
                                    <a
                                        href="#"
                                        class="flex-items"
                                    >Product</a>
                                    <a
                                        href="#"
                                        class="flex-items"
                                    >Pricing</a>
                                    <a
                                        href="#"
                                        class="flex-items"
                                    >About</a>
                                    <a
                                        href="#"
                                        class="flex-items"
                                    >Contact</a>
                            </div>
                        </div>
                        <div class="flex-shrink-0 mt-36 -ml-28 lg:mt-0 lg:-ml-0">
                            <img
                                src="/images/logo.svg"
                                alt="Figmaland"
                                class="w-96 lg:w-48"
                            >
                        </div>
                        <div class="ml-44 hidden lg:flex">
                            <img
                                src="/images/social-media/twitter.svg"
                                alt="twitter"
                                width="41"
                            >
                            <img
                                src="/images/social-media/fb.svg"
                                alt="facebook"
                                width="41"
                            >
                            <img
                                src="/images/social-media/linkedin.svg"
                                alt="linkedin"
                                width="41"
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div :class="[isOpen ? '' : 'hidden', 'lg:hidden']">
                <div>
                    <a
                    href="#"
                    class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                    >Dashboard</a>
                    <a
                    href="#"
                    class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >Team</a>
                    <a
                    href="#"
                    class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >Projects</a>
                    <a
                    href="#"
                    class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >Calendar</a>
                    <a
                    href="#"
                    class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >Reports</a>
                </div>
            </div>
        </nav>
        <nuxt/>
        <footer>
            <div class="w-full flex flex-col lg:flex-row bg-bluedark space-y-16 lg:space-y-0 lg:space-x-36 text-white justify-center p-28">
                <div class="mx-auto lg:mx-0">
                    <h3 class="font-bold text-3xl lg:text-xl mb-10">Pages</h3>
                    <div class="flex flex-col text-2xl lg:text-xl space-y-8 mx-auto">
                        <a href="">Home</a>
                        <a href="">Product</a>
                        <a href="">Pricing</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                    </div>
                </div>
                <div class="mx-auto lg:mx-0">
                    <h3 class="font-bold text-3xl lg:text-xl mb-10">Thomoty</h3>
                    <div class="flex flex-col text-2xl lg:text-xl space-y-8">
                        <a href="">Eleanor Edwards</a>
                        <a href="">Ted Robertson</a>
                        <a href="">Annette Russell</a>
                        <a href="">Jennie Mackinney</a>
                        <a href="">Gloria Richards</a>
                    </div>
                </div>
                <div class="mx-auto lg:mx-0">
                    <h3 class="font-bold text-3xl lg:text-xl mb-10">Jane Black</h3>
                    <div class="flex flex-col text-2xl lg:text-xl space-y-8">
                        <a href="">Philip Jones</a>
                        <a href="">Colleen Russell</a>
                        <a href="">Marvin Hawkins</a>
                        <a href="">Bruce Simmons</a>
                    </div>
                </div>
                <div class="mx-auto lg:mx-0 flex flex-col space-y-8">
                    <div class="flex flex-row">
                        <img src="/images/logos/bx-map-white.svg" alt="google map point">
                        <a href="">7480 Mockingbird Hill undefined </a>
                    </div>
                    <div class="flex flex-row">
                        <img src="/images/logos/phone-mobile-white.svg" alt="Android phone">
                        <a href="">(239) 555-0108 </a>
                    </div>
                    <div class="flex flex-row space-x-6">
                        <img src="/images/logos/twitter-white.svg" alt="twitter">
                        <img src="/images/logos/fb-white.svg" alt="facebook">
                        <img src="/images/logos/linkedin-white.svg" alt="linkedin">
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import BaseForm from '../components/forms/BaseForm.vue'    
    import InputEmail from '../components/inputs/InputEmail.vue'    
    import SubmitButton from '../components/Buttons/ButtonSubmit.vue'    
    export default {
            components: {BaseForm, InputEmail, SubmitButton},
            data() {
                return {
                    isOpen: false
                }
            },
            methods: {
                toggle () {
                    this.isOpen = !this.isOpen
                }
            }

    }
</script>

<style>
    @responsive {
        .bg-desktop{
            background: url(/images/background-desktop.svg) no-repeat;
            background-size: cover;
        }

        .bg-mobile{
            background: url(/images/background-mobile.svg) no-repeat;
            background-size: cover;
        }

        .bg-mobile-contain{
            background: url(/images/background-mobile.svg) no-repeat;
            background-size: contain;
        }


    }

    .flex-menu-items{
        justify-content: space-between; 
    }

    .flex-items{
        @apply px-2 text-white;
        font-weight: 400;
        font-size: 14px;
        text-align: center;
    }

    .header-content{
        @apply text-white font-graphik text-center;
        position: absolute;
        top: 29%;
    }

    .block-video{
        position: relative;
    }

    .block-video-player{
        position: absolute;
        top:0;
        bottom: 0;
        left:0;
        right: 0;
        margin: auto;
    }

    .fastest{
        width: 28%;
    }

    .block-form{
        border: 1px solid #DDDDDD
    }

</style>