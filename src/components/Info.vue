<template>
    <section class="info">
        <div class="info__wrapper container-fluid">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-1"></div>
                    <div class="col-md-10">
                       <h4>Over $1,000,000 worth of personal loan disbursed here</h4>
                       <p>Since existence, Networth Internatinal has helped lot of people change their financial situation by providing acccess personal loans, investment advisory services at highly competitive prices.</p>
                       <router-link to="/register" class="register-btn">Create a free Account</router-link>
                       <div class="app__store pt-2">
                           <a href="#"><img src="../assets/google-play-badge.webp" class="google-icon" alt=""></a>
                           <a href="#"><img src="../assets/iosbadge-101-image.webp" class="ios-icon" alt=""></a>
                       </div>
                    </div>
                    <div class="col-md-1"></div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Info'
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
.info{
    .info__wrapper{
        padding: 5rem 0;
        margin: 0 auto;
        h4{
            color: $primary-color;
            font-weight: bold;
            font-size: 1.8rem;
            padding-bottom: 1rem;
        }
        p{
            font-size: .95rem;
            color: $tertiary-color;
            padding-bottom: 3rem;
            line-height: 2;
        }
        .register-btn{
            background: $primary-color;
            text-align: center;
            text-decoration: none;
            padding: 1.4rem 4rem;
            border-radius: 4px;
            font-size: .9rem;
            color: #fff;
            &:hover{
                background: $secondary-color;
                transition: all ease-in-out .5s;
            }
        }
        .app__store{
            margin-top: 3rem;
            .google-icon, .ios-icon{
                height: 47px;
                padding: 0 1rem;
            }
        }
    }
}


//MEDIA QUERIES
@media only screen and (max-width: 990px){
     .info__wrapper h4{
         font-size: 1.5rem !important;
     }
}
</style>