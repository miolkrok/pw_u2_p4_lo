const app = Vue.createApp({
    data() {
        return {
            entidad: {
                nombre: '',
                apellido: '',
                edad: '',
                email: ''
            },
            entidades: []
        };
    },
    methods: {
        agregarEntidad() {
            
            if (this.entidad.nombre && this.entidad.apellido && this.entidad.edad && this.entidad.email) {
                this.entidades.push({ ...this.entidad });
                this.entidad.nombre = '';
                this.entidad.apellido = '';
                this.entidad.edad = '';
                this.entidad.email = '';
            }
        }
    }
});

app.mount('#app');