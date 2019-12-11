<template>
    <div class="container mt-50">
        <div class="columns">
            <div class="column is-6 is-offset-3">
                <h3 class="title is-3">Iniciar sesion</h3><hr>
                <form action="#" @submit.prevent="login">

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" v-model="email">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Contraseña</label>
                        <div class="control">
                            <input class="input" type="password" v-model="password">
                        </div>
                    </div>

                    <button type="submit" class="button is-primary">Iniciar sesion</button>
                </form>

                <div class="notification is-danger mt-10" v-if="error">
                    {{error}}
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import db from'@/firebase/init'
import firebase from 'firebase'
export default {
    data () { //dar propiedades a un objeto
        return {
            email: '',
            password: '',
            error: '',
        }
    },
    name: 'login',
    methods: {
        login() {
            this.error = ''
            if (this.email && this.password) { //enviar, propiedades del componente
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                    .then(user => {
                        this.$router.push({name: 'dashboard'}) //redirigir al usuario
                    }).catch(err => {
                        this.error = err.message
                    })
            }else{
                this.error = 'Todos los campos son requeridos'
            }            
        }
    }
}
</script>