<template>
    <div class="contact">
        <Navbar />
        <div class="container">
            <div class="row contact__heading mt-3">
                <div class="col-12 text-center">
                    <h4>Contact Us</h4>
                </div>
            </div>
        </div>
        <div class="contact__contents">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="contact__details">
                   <div class="row contact__body">
                       <div class="col-md-5">
                           <h5>We would love to hear form you today!</h5>
                           <p>Our support team is always available to respond to all your concerns while using this platform.</p>
                           <h6><i class="fa fa-home contact-icon"></i>&nbsp;&nbsp; Head Office</h6>
                           <p>245 East Ohio Street Chicago, IL 60611</p>
                           <h6><i class="fa fa-envelope contact-icon"></i>&nbsp;&nbsp; Email Address</h6>
                           <p>networthinternational4@gmail.com</p>
                           <h6><i class="fa fa-phone contact-icon"></i>&nbsp;&nbsp; Phone</h6>
                           <p>+1 618-710-6254</p>
                       </div>
                       <div class="col-md-7"></div>
                   </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
export default {
    name: 'Contact',
    components:{
        Navbar
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
  .contact__heading{
        padding-top: 4rem;
        h4{
        font-weight: bold !important;
        font-size: 1.4rem;
        padding-bottom: 2rem;
        }
    }
    .contact__contents{
        .contact__details{
           box-shadow: 0px 6px 60px -7px rgba(69,77,89,0.15);
            background: #fff;
            width: 100%;
            margin-top: 4rem;
            margin-bottom: 4rem;
            // padding-bottom: 2rem;
            border-radius: 4px;
            .contact__body{
                padding: 4rem 3rem;
                h5{
                    font-weight: bold;
                    // color: $tertiary-color;
                    padding-bottom: 1.3rem;
                    font-size: 1.5rem;
                    line-height: 1.8;
                }
                h6{
                    font-size: 1rem;
                    padding: .5rem 0;
                }
                p{
                    color: $tertiary-color;
                    font-size: .85rem;
                }
            }
        }
    }
</style>