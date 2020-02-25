<template>
    <section class="banner__wrapper container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-12 banner-text">
                    <h3>Get Access To Personal Loans</h3>
                     <p>Netwoth International is your partner of choice to help you achieve financial freedom by leveraging on technology to provide real time access to personal credit at a very competitive interest rate</p>
                    <div class="banner__text__description mb-4">
                       <p><i class="fa fa-check-square"></i> &nbsp;&nbsp;No collateral needed</p>
                       <p><i class="fa fa-check-square"></i> &nbsp;&nbsp;No fees for early pay off</p>
                    </div>
                     <router-link to="/register" class="hero__btn">Get started Here</router-link>
                </div>
                <div class="col-md-6 d-none d-md-block">
                    <img src="../assets/banner-img-3.png" class="img-fluid" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Banner'
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
.banner__wrapper{
    padding: 7rem 0;
    .banner-text{
        h3{
            font-weight: bolder;
            color: $primary-color;
            font-size: 2.6rem;
            text-transform: capitalize;
            padding-bottom: 1.5rem;
            padding-top: 1rem;
        }
        p{
          color: #545454;
            font-size: .9rem;
            font-weight: 400;
            line-height: 1.8;
            opacity: .9;
        }
        .banner__text__description{
            padding-bottom: 1rem;
        }
        .hero__btn{
            background: $primary-color;
            text-align: center;
            text-decoration: none;
            padding: 1.35rem 4rem;
            border-radius: 4px;
            color: #fff;
            cursor: pointer !important;
            &:hover{
                background: $primary-color;
                transition: all ease-in-out .5s;
            }
        }
        .google-icon, .ios-icon{
                height: 45px;
            }
    }
}

//MEDIA QUERIES
@media only screen and (max-width: 990px){
    .banner-text{
        text-align:center;
        padding-bottom: 3rem;
        h3{
            font-size: 1.6rem !important;
        }
        p{
            padding-bottom: 3rem;
        }
        .banner__text__description{
            display: none !important;
        }
    }
}
</style>