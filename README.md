# simple vue app that utilizes VUE and fetches data from API

**in package.json**

*{
...
	"browser": {
        "vue": "vue/dist/vue.min.js"
    },

}*

**must be declared, as otherwise only runtime build will be used, but for browser and therefore webvie app us need to declare to use runtime buil + compiler (hence vue.js/vue.min.js)**

[original source](https://coligo.io/building-a-mobile-app-with-cordova-vuejs/)

if link doesn't work see '[tutorial](tutorial/)''