<template>
    <div>
<div class="grid place-items-center header-content">
            <h1 class="font-normal text-7xl px-52 leading-snug  lg:font-bold lg:px-40 lg:text-5xl lg:px-96">
                The best products start with Figma
            </h1>
            <h4 class="text-5xl px-40 mt-12 leading-normal lg:text-xl lg:px-80">
                Most calendars are designed for teams. <span class="hidden lg:inline">Slate is designed for freelancers</span> 
            </h4>
            <button class="content-center text-3xl lg:text-sm rounded-3xl w-80 lg:w-40 bg-primary px-9 py-5 lg:py-2 mt-24 lg:mt-14">Try For Free</button>
        </div>
        <div class="grid place-items-center mt-4 text-bluedark font-normal lg:mt-28">
            <div class="text-9xl lg:text-3xl">Features</div>
            <div class="text-5xl px-64 lg:text-xl mt-16 mb-16 lg:mt-6 text-center">Most calendars are designed for teams.
                <span class="hidden lg:block"> Slate is designed for freelancers</span>
            </div>
            <div class="block lg:hidden">
                <img src="/images/video-screen.svg" alt="video" width="500" />
            </div>
        </div>
        <div class="flex flex-col space-y-20 mt-16 lg:space-y-0 lg:flex-row text-bluedark justify-center text-3xl lg:text-lg">
            <div class="w-96 lg:w-52 mx-auto lg:mx-10">
                <img src="/images/vector-1.svg" alt="OpenType" class="mx-auto" >
                <h3 class="text-center font-bold my-6">OpenType features Variable fonts</h3>
                <div class="text-center">Slate helps you see how many more days you need to work to reach your financial goal.</div>
            </div>
            <div class="w-96 lg:w-52 mx-auto lg:mx-10">
                <img src="/images/vector-2.svg" alt="Design" class="mx-auto">
                <h3 class="text-center font-bold my-6">Design with real data</h3>
                <div class="text-center">Slate helps you see how many more days you need to work to reach your financial goal.</div>
            </div>
            <div class="w-96 lg:w-52 mx-auto lg:mx-10">
                <img src="/images/vector-3.svg" alt="Fastest" class="mx-auto">
                <h3 class="text-center font-bold my-6 px-4 lg:px-8">Fastest way to take action</h3>
                <div class="text-center">Slate helps you see how many more days you need to work to reach your financial goal.</div>
            </div>
        </div>
        <div class="block-video hidden mt-16 lg:block">
            <img src="/images/screen-lg.svg" alt="vidéo" class="mx-auto">
            <div class="flex rounded-full bg-primary w-28 h-28 p-10 block-video-player">
                <img src="/images/player.svg" alt="player" class="flex-none mx-auto">
            </div>
        </div>
        <div class="flex flex-col w-full  space-y-20 lg:space-y-0 lg:flex-row justify-center text-bluedark my-28">
            <div class="fastest lg:ml-24 mx-auto"> 
                <h2 class="text-6xl w-96 lg:text-4xl lg:w-52">Fastest way to organize</h2>
                <div class="my-12 text-4xl lg:text-2xl">
                    Most calendars are designed for teams. 
                    <span class="hidden lg:inline">Slate is designed for freelancers</span>
                </div>
                <button class="text-3xl text-white lg:text-sm rounded-3xl w-80 lg:w-40 bg-primary px-9 py-5 lg:py-2 lg:mt-4">Try For Free</button>
            </div>
            <div class="flex-none lg:ml-24 mx-auto"> 
                <img src="/images/macbookpro.svg" alt="macbookpro" class="mx-auto">
            </div>
        </div>
        <div class="flex flex-col lg:flex-row justify-center text-bluedark items-center mb-28">"
            <div class="mx-0">
                <img src="/images/screen-content.svg" alt="Newsletter subscribe">
            </div>
            <div class="ml-20">
                <h3 class="font-bold hidden lg:block text-lg">At your finhertips</h3>
                <h2 class="text-2xl hidden lg:block">Lightning fast prototyping </h2>
                <h3 class="font-bold text-3xl lg:text-lg mt-5 lg:mt-12 text-center lg:text-left">Subscribe to our newsletter</h3>
                <p class="text-3xl lg:text-lg mb-8 text-center">Available exclusivery on Figmaland</p>
                <BaseForm class="flex flex-col lg:flex-row justify-center space-y-2 lg:space-y-0 mt-8">
                    <template v-slot:body>
                        <InputEmail placeholderColor="placeholder-bluedark" />
                    </template>
                    <template v-slot:action>
                        <SubmitButton class="bg-primary text-white" confirm="Subscribe" />
                    </template>
                </BaseForm>
            </div>
        </div>
        <div class="flex flex-col w-full justify-center text-bluedark">
            <h2 class="text-5xl text-center">Partner</h2>
            <h4 class="text-xl text-center my-12">Most calendars are designed for teams. <br/> Slate is designed for freelancers</h4>
            <div class="grid grid-cols-1 gap-16 px-52 lg:grid-cols-4 lg:gap-4 justify-items-center lg:px-72">
                <div>
                    <h6 class="text-center">Client Name</h6>
                    <img src="/images/logos/google.svg" alt="Google">
                </div>
                <div>
                    <h6 class="text-center">Client Name</h6>
                    <img src="/images/logos/amazon.svg" alt="Amazon">
                </div>
                <div>
                    <h6 class="text-center">Client Name</h6>
                    <img src="/images/logos/microsoft.png" alt="Microsoft">
                </div>
                <div class="hidden lg:block">
                    <h6 class="text-center">Client Name</h6>
                    <img src="/images/logos/uber.svg" alt="Uber">
                </div>
                <div class="hidden lg:block">
                    <h6 class="text-center">Client Name</h6>
                    <img src="/images/logos/dropbox.svg" alt="Dropbox">
                </div>
                <div class="hidden lg:block">
                    <h6 class="text-center">Client Name</h6>
                    <img src="/images/logos/google.svg" alt="Google">
                </div>
                <div class="hidden lg:block">
                    <h6 class="text-center">Client Name</h6>
                    <img src="/images/logos/uber.svg" alt="Uber">
                </div>
                <div class="hidden lg:block">
                    <h6 class="text-center">Client Name</h6>
                    <img src="/images/logos/amazon.svg" alt="Amazon">
                </div>
            </div>
            <SubmitButton class="text-xl bg-primary text-white w-96 lg:w-60 font-medium lg:text-lg mx-auto mt-10" confirm="Try For Free" />
        </div>
        <div class="flex flex-col w-full justify-center text-bluedark">
            <h2 class="text-4xl text-center my-32">Testimonials</h2>
            <img src="/images/logos/Brands.svg" alt="IBM" class="mx-auto">
            <h4 class="text-2xl text-center my-12 px-60 lg:px-96">
                Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
            </h4>
            <div class="flex flex-row mx-auto text-bluedark">
                <img src="/images/avatar.svg" alt="avatar">
                <h6 class="text-xs ml-3">Organize accorss<br/>UI Designer</h6>
            </div>
            <SubmitButton class="text-2xl bg-primary text-white lg:text-xl w-96 lg:w-60 font-medium lg:text-lg my-16 mx-auto" confirm="More Testimonials " />
        </div>
        <div class="w-full bg-bluedark text-white p-32 lg:p-20 justify-center mb-28">
            <h2 class="text-3xl text-center mx-auto">Pricing</h2>
            <h4 class="text-xl text-center mx-auto w-96 py-8 mb-10">
                Most calendars are designed for teams. Slate is designed for freelancers
            </h4>
            <div class="flex flex-col px-40 lg:flex-row justify-center space-y-12 lg:space-x-12 lg:space-y-0 lg:space-between lg:items-center">
                <div class="bg-white mx-auto text-bluedark justify-center rounded-xl lg:rounded-md p-8">
                    <h3 class="text-2xl uppercase font-bold text-center mb-4">Free</h3>
                    <h6 class="text-center text-lg w-40 mx-auto">Organize across all apps by hand</h6>
                    <div class="flex flex-row justify-center py-5">
                        <h1 class="text-6xl font-black mr-3">0</h1>
                        <div>
                            <h3 class="font-bold text-xl">$</h3>
                            <span>Per Month</span>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <a class="text-center py-3 text-lg" href="">Pricing Feature</a>
                        <a class="text-center py-3 text-lg" href="">Pricing Feature</a>
                        <a class="text-center py-3 text-lg" href="">Pricing Feature</a>
                        <a class="text-center py-3 text-lg" href="">Pricing Feature</a>
                        <a class="text-center py-3 text-lg" href="">Pricing Feature</a>
                    </div>
                    <SubmitButton class="text-2xl mt-8 bg-primary text-white lg:text-xl w-96 lg:w-60 lg:text-lg" confirm="Order Now" />
                </div>
                <div class="bg-primary mx-auto text-white justify-center rounded-xl lg:rounded-md px-8 py-16">
                    <h3 class="text-2xl uppercase font-bold text-center mb-4">Standard</h3>
                    <h6 class="text-center text-lg w-40 mx-auto">Organize across all apps by hand</h6>
                    <div class="flex flex-row justify-center py-5">
                        <h1 class="text-6xl font-black mr-3">10</h1>
                        <div>
                            <h3 class="font-bold text-xl">$</h3>
                            <span>Per Month</span>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <a class="text-center py-3 text-lg" href="">Pricing Feature</a>
                        <a class="text-center py-3 text-lg" href="">Pricing Feature</a>
                        <a class="text-center py-3 text-lg" href="">Pricing Feature</a>
                        <a class="text-center py-3 text-lg" href="">Pricing Feature</a>
                        <a class="text-center py-3 text-lg" href="">Pricing Feature</a>
                    </div>
                    <SubmitButton class="text-2xl mt-8 text-primary bg-white lg:text-xl w-96 lg:w-60 lg:text-lg mx-auto" confirm="Order Now" />
                </div>
                <div class="bg-white mx-auto text-bluedark justify-center rounded-xl lg:rounded-md p-8">
                    <h3 class="text-2xl uppercase font-bold text-center mb-4">Business</h3>
                    <h6 class="text-center text-lg w-40 mx-auto">Organize across all apps by hand</h6>
                    <div class="flex flex-row justify-center py-5">
                        <h1 class="text-6xl font-black mr-3">99</h1>
                        <div>
                            <h3 class="font-bold text-xl">$</h3>
                            <span>Per Month</span>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <a class="text-center py-3 text-lg" href="">Pricing Feature</a>
                        <a class="text-center py-3 text-lg" href="">Pricing Feature</a>
                        <a class="text-center py-3 text-lg" href="">Pricing Feature</a>
                        <a class="text-center py-3 text-lg" href="">Pricing Feature</a>
                        <a class="text-center py-3 text-lg" href="">Pricing Feature</a>
                    </div>
                    <SubmitButton class="text-2xl text-white mt-8 bg-primary lg:text-xl w-96 lg:w-60 lg:text-lg" confirm="Order Now" />
                </div>
            </div>
        </div>
        <div class="text-bluedark justify-center mb-20">
            <h2 class="text-7xl lg:text-3xl text-center mx-auto">Contact Us</h2>
            <h4 class="text-3xl lg:text-xl text-center mx-auto w-96 py-8 mb-10">
                Most calendars are designed for teams. <span class="hidden lg:block">Slate is designed for freelancers</span>
            </h4>
            <div class="flex flex-col-reverse lg:flex-row justify-center">
                <div class="rounded-2xl shadow-lg block-form mx-auto lg:p-8 mt-12 lg:mt-0">
                    <h3 class="text-2xl lg:text-lg text-center font-extrabold py-8">Contact Us</h3>
                    <BaseForm class="flex flex-col max-w-5xl justify-center space-y-6 px-20 lg:px-2">
                        <template v-slot:body>
                            <InputEmail placeholderColor="placeholder-bluedark" />
                            <InputText text="Your Name" placeholderColor="placeholder-bluedark" />
                            <InputTextarea text="Your Message" placeholderColor="placeholder-bluedark" />
                        </template>
                        <template v-slot:action>
                            <SubmitButton class="bg-primary w-36 mx-auto text-white" confirm="Send" />
                        </template>
                    </BaseForm>
                </div>
                <div class="flex flex-col-reverse mx-auto lg:flex-col">
                    <div class="flex flex-col space-y-6 lg:flex-row lg:justify-center lg:items-center lg:space-x-10 ml-12 mt-12 lg:mt-0">
                        <div class="flex flex-row lg:flex-col">
                            <img src="/images/pics/bx-map.svg" alt="point" class="lg:mx-auto">
                            <h5 class="text-secondtext max-w-xs mt-4 ml-8 lg:justify-center lg:text-center">
                                6386 Spring St undefined Anchorage, Georgia 12473 United States
                            </h5>
                        </div>
                        <div class="flex flex-row lg:flex-col">
                            <img src="/images/pics/mobile.svg" alt="mobile phone" class="lg:mx-auto">
                            <h5 class="text-secondtext max-w-xs mt-4 ml-8 lg:justify-center lg:text-center">
                                (843) 555-0130
                            </h5>
                        </div>
                        <div class="flex flex-row lg:flex-col">
                            <img src="/images/pics/mail.svg" alt="mail" class="lg:mx-auto">
                            <h5 class="text-secondtext max-w-xs mt-4 ml-8 lg:justify-center lg:text-center">
                                willie.jennings@example.com
                            </h5>
                        </div>
                    </div>
                    <img src="/images/map-screen.png" alt="google map" class="mx-auto mt-12 hidden lg:block">
                    <div class="flex flex-row space-x-6 lg:ml-8 mt-6 mx-auto lg:float-left">
                        <img src="/images/logos/twitter-blue.svg" alt="twitter">
                        <img src="/images/logos/fb-blue.svg" alt="facebook">
                        <img src="/images/logos/linkedin-blue.svg" alt="linkedin">
                    </div>
                </div>
            </div>      
        </div>    
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


<style lang="scss" scoped>

</style>