const app= Vue.createApp({
    data() {
        return {
            resultado: '',
            numeros: ['7','8','9','4','5','6','1','2','3','0'],
            operadores: ['+','-','*','/']
        }
    },
    methods: {
        agregarAlResultado(valor) {
            this.resultado += valor;
        },agregarOperador(operador) {
            this.resultado += operador;
        },limpiarResultado() {
            this.resultado = '';
        },calcular(){
            try {
                this.resultado = eval(this.resultado);
            } catch (error) {
                this.resultado = 'Error';
            }
        }
    }
})

app.mount('#app')

