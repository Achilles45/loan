<template>
    <section class="process">
        <div class="process__wrapper container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <img src="../assets/img1.png" class="img-fluid phone" alt="">
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-5">
                        <div class="process__heading">
                            <h4>Begin your journey to financial freedom today!</h4>
                        </div>
                        <div class="process__details mt-4">
                            <h5>01 &nbsp;&nbsp; Create an Account</h5>
                            <p>Creating an account is very simple and it is free. You you can complete the entire process in 1 minute.</p><br />
                            <h5>02 &nbsp;&nbsp; Request for a loan</h5>
                            <p>Sign in into your account and request for a loan. We will get back to you if you get credited.</p><br />
                            <h5>03 &nbsp;&nbsp; Make Withdrawal</h5>
                            <p>Once you have been credited, you can then make a request to make your withdrawals. Yes, it this simple.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Process'
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
.process__wrapper{
    padding: 5rem 0;
    .process__heading{
        h4{
            font-weight: bold;
            font-size: 2rem;
            color: $primary-color;
            padding-bottom: 1rem;
            line-height: 1.5;
        }
    }
    .phone{
        max-width: 380px;
        height: auto;
    }
    .process__details{
        h5{
            color:$primary-color;
            font-weight: 400;
            padding-bottom: .6rem;
        }
        p{
            font-size: .9rem;
            color: $primary-color;
            opacity: .9;
            line-height: 1.9;
        }
    }
}


//MEDIA QUERIES
@media only screen and (max-width: 990px){
    .process__heading h4{
        font-size: 1.35rem !important;
    }
    .phone{
        max-width: 270px !important;
        padding-bottom: 2rem;
    }
}
</style>