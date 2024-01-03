<template>
    <div class="container">

        <div class="row">
            <div class="col-12 d-flex align-items-center justify-content-center  vh-100">
                <form class=" bg-secondary text-white p-5 border border-4">
                    <div class="form-group ">
                        <h1 class=" text-center m-3 font-weight-bolder">LogIn to fireblogs</h1>

                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" v-model="email" class="form-control m-2" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Enter email">

                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" v-model="password" class="form-control m-2" id="exampleInputPassword1"
                            placeholder="Password">
                    </div>

                    <div v-if="error" class=" text-center text-danger">{{ this.errorMessage }}</div>


                    <div class=" ">
                        <div>
                            <button @click.prevent="logIn" type="submit" class="btn btn-primary mt-3">Log in</button>

                        </div>
                        <div class=" d-flex align-items-center justify-content-between mt-3 ">
                            Don't have an account?
                            <router-link to="/register" class="btn btn-primary ">Register Account</router-link>
                        </div>
                        
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth'
export default {
    name: 'FireBlogLogIn',

    data() {
        return {
            email: '',
            password: '',
            error: null,
            errorMessage : '',

        };
    },

    mounted() {

    },

    methods: {
        logIn() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.$router.push({ name: 'Home' })
                    this.error = false;
                    this.errorMessage = '';
                    console.log(firebase.auth().currentUser.uid);
                }).catch((err) => {
                    this.error = true;
                    this.errorMessage = 'Something wrong.Please check your email and password'
            })
        }

    },
};
</script>

<style lang="scss" scoped></style>