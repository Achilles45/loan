<template>
    <div class="navbar__wrapper">
        <div class="navbar__contents container-fluid">
            <div class="container">
                <div class="navbar__items d-flex justify-content-between align-items-center">
                    <div class="logo">
                        <h3><router-link to="/" class="logo-link"> Networth International</router-link></h3>
                    </div>
                <div class="navbar__links">
                    <ul class="nav__links d-flex justify-content-between">
                            <li><router-link to="/" class="nav__link home">Home</router-link></li>
                        <!-- <li v-if="!user"><router-link to="/about" class="nav__link about">About Us</router-link></li> -->
                        <li><router-link to="/contact" class="nav__link contact">Contact Us</router-link></li>
                        <li v-if="!user"><router-link to="/register" class="nav__link register">Create a free account</router-link></li>
                        <li v-if="!user"><router-link to="/login" class="nav__link login">Login</router-link></li>
                    </ul>
                </div>
                    <div @click="showNav()" class="navbar__toggler">
                        <i class="fa fa-bars"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase';
export default {
    name: 'Navbar',
    data(){
        return{
            user:null
        }
    },
    created(){
        firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
                this.user = user;
            }else{
                this.user = null
            }
        })
    },
    mounted(){
       this.fixNav();
    },
    methods:{
        showNav:function(){
            const nav = document.querySelector('.nav__links');
            nav.classList.toggle('show__nav');
        },
        fixNav:function(){
             const nav = document.querySelector('.navbar__wrapper');
            window.onscroll = function(){
                if (window.pageYOffset > 120) {
                    nav.classList.add('fix__nav');
                }else{
                    nav.classList.remove('fix__nav');
                }
            }
        },
        logOut:function(){
           firebase.auth().signOut()
           .then(()=>{
               this.$router.push({name: 'Login'})
           })
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
.navbar__wrapper{
.navbar__contents{
        // background: green;
        padding: .3rem 0;
    .navbar__items{
        padding-top: 1rem;
    }
    .logo{
        .logo-link{
            color: $primary-color;
            font-weight: bold;
            text-decoration: none;
            font-size: 1rem;
        }
    }
    .nav__links{
        li{
            list-style: none;
            margin-left: 2rem;
            padding-top: .89rem;
            .nav__link{
                color: $primary-color;
                font-size: .9rem;
                text-transform: capitalize;
                font-weight: bold;
                text-decoration: none;
                opacity: .8;
                &:hover{
                    color: $secondary-color;
                    transition: all ease-in-out .5s;
                }
            }
            .login{
                border: 1px solid $tertiary-color;
                border-radius: 2px;
                padding: .75rem 2.5rem;
            }
        }
    }
    .navbar__toggler{
        display: none;
        color:$primary-color;
    }
}
}

//FIXING NAV
.fix__nav{
    position: fixed;
    top: 0; 
    right: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background: #fff;
    transition: all ease-in-out .5s;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.17);
    .nav__link{
        color: $primary-color !important;
        &:hover{
            color: $secondary-color;
        }
}
}


//MEDIA QUERIES
@media only screen and (max-width: 990px){
     .logo-link{
         font-size: 1.2rem;
         padding-top: .4rem;
     }
    .nav__links{
        background: $primary-color;
        flex-direction: column;
        position: absolute;
        right:0;
        top: 10%;
        z-index: 100;
        width: 100%;
        height:100vh;
        padding: 3rem 0;
        display: none !important;
        line-height: 3;
        li{
            margin-left: 0 !important;
        }
        // height: calc(100vh - 20%);
    }
    .show__nav{
        display: block !important;
        transition: all ease-in-out .5s;
    }
     .nav__link{
         padding: 2rem;
         color: #fff !important;
     }
     .login{
        border: none !important;
        padding: 0rem 2rem !important;
        }
    .navbar__toggler{
        display: block !important;
        padding-right: 2rem;
        font-size: 1.4rem;
        cursor: pointer;
    }
    .fix__nav{
        padding: 1rem 0;
        .nav__link{
        padding: 0 2rem !important;
        color: #fff !important;
        font-weight: normal !important;
        }
    }
}
</style>