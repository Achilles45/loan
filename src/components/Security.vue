<template>
    <section class="security">
        <div class="security_-wrapper contaibner-fluid">
            <div class="container">
                <div class="row">
                  <div class="col-md-5">
                      <h4>All your data are well secured on this platform</h4>
                      <div class="security__details mt-4">
                          <h5><i class="fa fa-check-square security-icons"></i>&nbsp;&nbsp; Secured Dashboard</h5>
                          <p>We utilize up-to-date technology to secure all your data to ensure your dashboard is safe and secure and can only be accessed by you.</p>
                          <h5><i class="fa fa-check-square security-icons"></i>&nbsp;&nbsp; Privacy</h5>
                          <p>Networth International does not and will not share any of your data with a third party without your express permission</p>
                      </div>
                  </div>
                  <div class="col-md-3"></div>
                  <div class="col-md-3">
                      <img src="../assets/gurantee.svg" class="img-fluid security-logo" alt="">
                  </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Security'
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
.security{
    background: $primary-color;
    padding: 4rem 0;
    color: #fff;
    h4{
        font-weight: bold;
        font-size: 1.7rem;
        padding-bottom: 1.7rem;
        padding-top: 1.3rem;
        line-height: 1.7;
    }
}
.security__details{
        p{
            opacity: .7;
            font-size: .9rem;
            padding-top: 1rem;
            padding-bottom: .8rem;
            line-height: 1.9;
        }
    }
    .security-logo{
        max-width: 300px !important;
        height: auto;
    }



    //MEDIA QUERIES
    @media only screen and (max-width: 990px){
        .security h4{
            font-size: 1.6rem !important;
        }
    }
</style>