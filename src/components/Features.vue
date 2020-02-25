<template>
    <section class="features container-fluid">
        <div class="features__contents container">
            <div class="row">
                <div class="col-12 text-center features__heading">
                    <h4>Features That Makes Us Standout</h4>
                </div>
            </div>
                <img src="../assets/hero-image-pattern-alt.svg" class="img-fluid features-img d-none d-md-block" alt="">
            <div class="features__wrapper">
                <div class="features__card">
                   <img src="../assets/price.svg" class="feature__img" />
                    <h5>Good Pricing</h5>
                    <p>All our products are sensitively priced to make sure they are accessible to our target audience. Also, they are competively priced so much that they are attractive</p>
                    <img src="../assets/half-maze-gray.png" class="img-fluid card-img"  alt="">
                </div>
                 <div class="features__card">
                        <img src="../assets/advise.svg" class="feature__img" />
                    <h5>Advisory Services</h5>
                    <p>We do not just provide you with capital and leave you there. Networth international provides top notch advisory services upon request to all her customers</p>
                     <img src="../assets/half-maze-orange.png" class="img-fluid card-img"  alt="">
                </div>
                 <div class="features__card">
                        <img src="../assets/support.svg" class="feature__img" />
                    <h5>24/7 Customer Support</h5>
                    <p>We hold our customers in high exteem as we are here to serve you. The customer support team is always handy to respond to all your queries in less than 24 hours</p>
                     <img src="../assets/half-maze-green (1).png" class="img-fluid card-img"  alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Features'
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
.features{
    background: #E0E8F3;
    .features__contents{
        padding: 4rem 0;
        .features__heading h4{
            font-weight: bolder;
            font-size: 2rem;
            color: $primary-color;
        }
        .features-img{
            position: absolute;
            right: 85%;
            height: 100px;
        }
        .features__wrapper{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-gap: 20px;
            margin-top: 1.5rem;
            position: relative !important;
            z-index: 1;
            .features__card{
                background: #fff;
                padding: 2rem 3rem;
                border-radius: 4px;
                margin: 2rem 0;
                position: relative !important;
                .card-img{
                   height: 100px;
                   width: 100px;
                   position: absolute;
                   right: 0;
                   z-index: 1;
                   bottom: 0;
                }
                .feature__img{
                    max-width: 60px;
                    height: auto;
                    padding: 1rem 0rem;
                }
                h5{
                    color:$primary-color;
                    font-weight: 400;
                    padding: .7rem 0;
                }
                p{
                    font-size: .9rem;
                    color: $primary-color;
                    padding-bottom: 3rem;
                    line-height: 1.9;
                    padding-top: .8rem;
                    opacity: .9;
                }
            }
        }
    }
}


//MEDIA QUERIES
@media only screen and (max-width: 990px){
    .features__heading h4{
        font-size: 1.5rem !important;
    }
}
</style>