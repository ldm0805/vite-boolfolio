<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'Contacts',
    data() {
        return {
            store,
            name: '',
            surname: '',
            email: '',
            phone: '',
            message: '',
            errors: {},
            success: false,
            loading: false,


        }
    },
    methods: {
        sendForm() {
            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                message: this.message,
            }
            this.loading = true;
            this.errors = null;
            axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
                if (!response.data.success) {
                    this.errors = response.data.errors
                    this.loading = false;
                } else {
                    this.name = '';
                    this.surname = '';
                    this.email = '';
                    this.phone = '';
                    this.message = '';
                    this.success = true;
                    this.loading = false;
                    setTimeout(() => {
                        this.$router.push({ 'name': 'thank-you' });
                    }, 2000)
                }
            });
        },
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row my-5">
            <div class="col-12">
                <h2 class="text-center my-5">Pagina contatti</h2>
            </div>
            <div class="col-12">
                <h5 class="text-center my-5">Informazioni di contatto</h5>
                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="text-center d-flex flex-column gap-2">
                            <div>
                                <strong>
                                    <i class="fa fa-address-book"></i>
                                    Indirizzo:
                                </strong>
                                Via acaso, Num, Città, Cap, (provincia)
                            </div>
                            <div>
                                <strong><i class="fa fa-book"></i>
                                    Partita Iva:
                                </strong>
                                123456789
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="text-center d-flex flex-column gap-2">
                            <div>
                                <strong>
                                    <i class="fa fa-phone"></i>
                                    Telefono:
                                </strong>
                                11626262226
                            </div>
                            <div>
                                <strong><i class="fa fa-mail-reply" aria-hidden="true"></i>
                                    Email:
                                </strong>
                                info@boolpress.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12" v-if="success">
                messaggio inviato con successo
            </div>
            <div class="col-12">
                <h5 class="text-center">Scrivici</h5>
                <form @submit.prevent="sendForm">
                    <div class="row">
                        <div class="col-12 col-md-6 my-2">
                            <label for="nome" class="control-label">Nome</label>
                            <input type="text" class="form-control"  name="nome" id="nome" placeholder="Nome" v-model="name">
                            <div  v-for="(error, index) in errors.name" :key="`message-error-${index}`" class="text-danger">
                            {{error}}
                            </div>
                        </div>
                        <div class="col-12 col-md-6 my-2">
                            <label for="cognome" class="control-label">cognome</label>
                            <input type="text" class="form-control" name="cognome" id="cognome" placeholder="cognome" v-model="surname">
                            <div v-for="(error, index) in errors.surname" :key="`message-error-${index}`" class="text-danger">
                                {{error}}
                                </div>
                        </div>
                        <div class="col-12 col-md-6 my-2">
                            <label for="email" class="control-label">Email</label>
                            <input type="mail" class="form-control" name="email" id="email" placeholder="email" v-model="email">
                            <div v-for="(error, index) in errors.email" :key="`message-error-${index}`" class="text-danger">
                                {{error}}
                                </div>
                        </div>
                        <div class="col-12 col-md-6 my-2">
                            <label for="telefono" class="control-label">telefono</label>
                            <input type="phone" class="form-control" name="telefono" id="telefono" placeholder="telefono" v-model="phone">
                            <div v-for="(error, index) in errors.phone" :key="`message-error-${index}`" class="text-danger">
                                {{error}}
                                </div>
                        </div>
                        <div class="col-12 my-2">
                            <label for="messaggio" class="control-label">Scrivi un messaggio personalizzato</label>
                            <textarea name="messaggio" id="messaggio" v-model="message" cols="30" rows="10" class="form-control"></textarea>
                            <div v-for="(error, index) in errors.message" :key="`message-error-${index}`" class="text-danger">
                                {{error}}
                                </div>
                        </div>
                        <div class="col-12 my-2 text-center">
                            <button type="submit" class="send_email" :disabled="loading">{{loading ? 'Invio...' : 'invia messaggio'}}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <h2>Google maps</h2>
    </div>
</template>
<style lang="scss" scoped>
.send_email {
    background-color: rgb(3, 73, 73);
    color: white;
    border: none;
    border-radius: .5em;
    padding: .5em;

    &:hover {
        background-color: rgb(7, 133, 133);
    }
}
</style>