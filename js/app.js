console.log('Componente Vue');
console.log(Vue);

const app = Vue.createApp({
    //template: `
    //<h1> Hola Mundo</h1>
    //<p> Desde Vue.js</p>
    //<p>{{1+1}}</p>
    //`
    data() {
        return {
            nombre: 'Edison',
            apellido: 'Cayambe',
            mensaje: 'Hola mundo 2 desde Vue.js'
        }
    },
    methods: {
        cambiarNombre() {
            console.log('Boton cambiar Nombre');
            this.nombre = 'LUIS'
        },
        cambiarApellido(){
            console.log('Boton cambiar Apellido');
            this.apellido = 'ORTIZ'
        }
    }
})

app.mount('#app')