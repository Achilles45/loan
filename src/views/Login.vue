<template>
    <div class="login">
        <Navbar />
        <div class="login__wrapper container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <div class="login__heading text-center">
                            <h4>Hey! Welcome back</h4>
                            <p>Please login</p>
                        </div>
                        <div class="login__form_-wrapper mt-4">
                             <div v-if="err" class="alert alert-danger">
                            {{ err }}
                        </div>
                            <form @submit.prevent="logIn()" class="login__form">
                                <div class="form-group">
                                    <label for="email">Email Address *</label>
                                    <input type="email" class="form-control" v-model="email" placeholder="Registered email">
                                </div>
                                <div class="form-group">
                                    <label for="password">Password *</label>
                                    <input type="password" class="form-control" v-model="password" placeholder="Your password">
                                </div>
                                <button type="submit" class="login__btn btn-block">Sign In</button>
                                <div class="login__helper text-center pt-4">
                                    <p>New to Networth International?&nbsp;&nbsp; <router-link to="/register" class="register">Register Here</router-link></p>
                                    <p>Forgot Password? <router-link to="/reset-password" class="password">Reset Password</router-link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-4"></div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import firebase from 'firebase';
export default {
    name: 'Login',
    components:{
        Navbar,
        Footer
    },
    data(){
        return{
            password:null,
            email:null,
            err:null,
            user:null
        }
    },
    methods:{
        logIn:function(){
            //Check if the fields has been filled out
            if(!this.email || !this.password){
               this.err = 'Please enter your credentials'
            }else{
                this.err = null;
                //Let's check first if the email has been verified
                let user = firebase.auth().onAuthStateChanged(user=>{
                    if(user){
                        if(user.emailVerified == true){
                               firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                                .then((cred)=>{
                                    this.$router.push({name: 'Dashboard'})
                                })
                                .catch(err=>{
                                    this.err = err.message
                                })
                        }else{
                            this.err = 'Login failed. Please verify your email address first'
                        }
                    }
                })
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
.login__wrapper{
    padding-top: 5rem;
    padding-bottom: 7rem;
    .login__heading{
        padding-bottom: 1rem;
        h4{
            font-weight: bold;
            color: $primary-color;
            font-size: 1.3rem
        }
        p{
            color: $tertiary-color;
        }
    }
    .login__form{
        label{
            color: $tertiary-color;
            font-weight: bold;
            font-size: .8rem;
        }
        input[type=email], input[type=password]{
            height: 2.9rem;
            border-radius: 0;
            box-shadow: none;
            font-size: .8rem;
            &::placeholder{
                font-size:.8rem;
            }
        }
        .login__btn{
             background: $secondary-color;
            padding: .75rem 3rem;
            color:#fff;
            text-decoration: none;
            border:none;
            border-radius: 3px;
            &:hover{
                background: $primary-color;
                transition: all ease-in-out .5s;
            }
        }
        .login__helper{
            padding-top: 3rem;
        p{
            color: $tertiary-color;
            font-size: .85rem;
            .register, .password{
                color:$secondary-color;
                text-decoration: none;
                font-size: .9rem;
                &:hover{
                    color: $primary-color;
                    transition: all ease-in .5s;
                }
            }
        }
    }
    }
}
//MEIDA QUERIES
@media only screen and (max-width: 990px){
    .errors{
        bottom: 0;
    }
}
</style>