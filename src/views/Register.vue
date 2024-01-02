<template>
    <div class="container">

        <div class="row">
            <div class="col-12 d-flex align-items-center justify-content-center  vh-100">
                <form class=" bg-secondary text-white p-5 border border-4">

                    <div class="form-group ">
                        <h1 class=" text-center m-3 font-weight-bolder">Create your fire Blog </h1>

                        <label>First Name</label>
                        <input type="text" v-model="firstName" class="form-control m-2" aria-describedby="emailHelp"
                            placeholder="First Name">

                    </div>
                    <div class="form-group ">

                        <label>Last Name</label>
                        <input type="text" v-model="lastName" class="form-control m-2" aria-describedby="emailHelp"
                            placeholder="Last Name">

                    </div>
                    <div class="form-group ">

                        <label>Username</label>
                        <input type="text" v-model="userName" class="form-control m-2" aria-describedby="emailHelp"
                            placeholder="Username">

                    </div>
                    <div class="form-group ">

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
                            <button @click.prevent="register" type="submit" class="btn btn-primary mt-3">Create</button>

                        </div>
                        <div class=" d-flex align-items-center justify-content-between mt-3 ">
                            Have an account?
                            <router-link to="/LogIn" class="btn btn-primary ">Log in Account</router-link>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import db from "../firebase/firebseinit"
export default {
    name: 'FireBlogRegister',

    data() {
        return {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            userName: '',
            error: null,
            errorMessage: 'ggg'

        };
    },

    mounted() {

    },

    methods: {
        async register() {
            if (
                this.email !== "" &&
                this.password !== "" &&
                this.firstName !== "" &&
                this.lastName !== "" &&
                this.username !== ""
            ) {
                this.error = false;
                this.errorMessage = '';
                const firebaseAuth = await firebase.auth();
                const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
                const result = await createUser;
                const dataBase = db.collection('users').doc(result.user.uid);
                await dataBase.set({
                    email: this.email,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    userName: this.userName,
                });
                this.$router.push({ name: "Home" });
                return
            }
            this.error = true;
            this.errorMessage = "Please fill out all the fields";
            return;
        }
    },
};
</script>

<style scoped></style>