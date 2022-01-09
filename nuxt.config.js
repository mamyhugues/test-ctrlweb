export default {
    components: true,
    head: {
        titleTemplate: "Figmaland: %s",
        htmlAttrs: {
            lang: "en"
        },
        bodyAttrs:{
            class: ["my-style"]
        },
        meta: [{
            charset: "utf-8",
        }],
        link:[
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  
        ],
    },
    router: {
        prefetchLinks: false,
    },
    modules: [],
    buildModules: ['@nuxtjs/tailwindcss']
}