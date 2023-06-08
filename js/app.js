console.log('Componente Vue');
console.log(Vue);

const app = Vue.createApp({
    template: `
    <h1> Hola Mundo</h1>
    <p> Desde Vue.js</p>
    `
})

app.mount('#app')