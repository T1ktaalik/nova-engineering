*******************
npx nuxi init
npx nuxi add page index
nuxt config - Ctrl + Space
<Nuxt to="/"><Nuxt/> - both for external and internal links
<NuxtLink/>
omdbapi.com

Nuxt3 definePageMeta

pre
**********************
***
useAsyncData 
const { data } = await useAsyncData(() => {
  return $fetch(`http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`);
});
Links
https://nuxt.com/docs/getting-started/data-fetching#useasyncdata
Nuxt Docs: useAsyncData
***

Nuxt Cashes data
uniaue first arg of a func useAsyncData like a route params itself
https://nuxt.com/docs/api/composables/use-async-data/#params

transform the res from the server https://nuxt.com/docs/getting-started/data-fetching#best-practices

return {} || pick: []

useFetch('', {
    pick: [],
    key: ""
})
Handle fetch errors
https://nuxt.com/docs/getting-started/error-handling

https://nuxt.com/docs/api/utils/show-error

invalid param could be provided
useFetch('', {
    pick: [],
    key: "",
    onResponse({request, response}){
        if(response._data.Error || "message from response") {
            showError({statusCode: 404, statusMessage: "Сообщение" })
            //a built-in Nuxt Func
        }
    }
    onResponseError(){
      showError(){
        statusCode: 500,
        statusMessage: " some message"
      }
    }
})
//полезна я сслыка 'https://httpbin.org/status/500' 
Надо if (respose... ) выносить в корень компонента, 
if (data.value...)
const { data, error } = await useFetch()


SEO
https://ogp.me/
https://chrome.google.com/webstore/detail/social-share-preview/ggnikicjfklimmffbkhknndafpdlabib

useHead({
    title: "Нова инжиниринг"
})
Dynamic
ise({
    title: data.value.title
})
выноси в app.vue

useHead({
    titleTemplate: (arg) => {
        return `${arg}`
    },
    meta: []
})
***
LAYOUTS
Layouts directory
https://nuxt.com/docs/guide/directory-structure/layouts

layel 
input type password

use layout
inside <script setup> 
definePageMeta({
    layout: "default"
})
</script>
***
checking log before roter call
inline route middleware
<script>
    definePageMeta({
        middleware(to, from) {
            console.log('s')
        }
    })
    </script>
the next  is for reusable middleware
npx nuxi add middleware *name*
<script>
    definePageMeta({
        middleware: ["logger"]
    })
    </script>

    Global route middleware
    logger.global.ts instead logger.ts

<script>
export default defineNuxtRouteMiddleware((to, from) => {
    const userIsLoggerdIn = true
    if(!userIsLoggedIn) {
        return abortnavigation("a  message")
        return navigateTo({})
    }
})
    
    
</script>


add api npx nuxi add api helloWorld
defineEventHandler()
/* api empowered by https://nitro.unjs.io/ */
https://nuxt.com/docs/guide/directory-structure/server
https://nitro.unjs.io/
https://github.com/unjs/h3
https://www.jsdocs.io/package/h3#package-index-functions

REST CLIENT VS code extension like postman

request.http
GET url filename.get.ts

###
POST url filename.post.ts

https://github.com/Huachao/vscode-restclient

NUXT state management useState
https://nuxt.com/docs/getting-started/state-management/
const isLoggedIn = ref(false) - this is in component without access for othher components

change ref to useState("isLoggedIn", ()=> false)
then invoke: const isLoggedIn = useState("isLoggedIn", ()=> false) 
function login() {
    ...
    useRouter().push('/')
}

<NuxtLink v-if="true" to> logout</NuxtLink>
<NuxtLink v-else to> logint</NuxtLink>
there is a special dir composables for NUXT

USE PINIA is an official global state library fir vue js 3
nuxt module for pinia
npm install @pinia/nuxt

Learn about getters and setters please!

Deploying an app https://nuxt.com/docs/getting-started/deployment

Hybrid rendering
https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering
npx nuxi upgrade

routeRules: {
    "/spa": { ssr: false},
    "/static": {static: true},
    "/swr": { swr: true},
}
masteringnuxt.com Mastering Nuxt