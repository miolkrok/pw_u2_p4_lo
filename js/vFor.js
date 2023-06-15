const arreglo = [{ nombre: "Luis", apellido: "Ortiz" },
{ nombre: "Ariel", apellido: "Ortega" },
{ nombre: "Francisco", apellido: "Orellana" },
{ nombre: "Carlos", apellido: "Montalvo" },
{ nombre: "Paulo", apellido: "Aldaz" },
{ nombre: "Pepe", apellido: "Benalcazar" },
{ nombre: "Juan", apellido: "Jimenez" },
{ nombre: "Nicolas", apellido: "Carrera" },
{ nombre: "Gabriel", apellido: "Jesus" },
{ nombre: "Vinicius", apellido: "Jr" }
]
console.log(arreglo);

const app = Vue.createApp({
    //template: `
    //<h1> Hola Mundo</h1>
    //<p> Desde Vue.js</p>
    //<p>{{1+1}}</p>
    //`
    data() {
        return {
            miarreglo: arreglo,
            nombre: 'LUIS'
        }
    },
    methods: {
        agregarEstudiante(event){
            console.log('Vamos agregar')
            console.log(this.nombre)
            console.log(event)
            console.log(event.charCode)
            if(event.charCode=='13'){
                console.log('Presiono enter')
                const nuevoEstudiante = {
                    nombre: this.nombre,
                    //apellido: this.apellido
                }
                //this.miarreglo.unshift(nuevoEstudiante)
                this.miarreglo.push(nuevoEstudiante)

            } else {
                console.log('No es enter')
            }
        },agregarEstudiante2(){
            console.log('Vamos agregar')
            const nuevoEstudiante = {
                nombre: this.nombre,
                //apellido: this.apellido
            }
            this.miarreglo.unshift(nuevoEstudiante)
        }
    }

})

app.mount('#app2')
