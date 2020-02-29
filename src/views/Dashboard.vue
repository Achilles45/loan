<template>
    <div class="dashboard">
        <div class="dashboard__wrapper">
           <div class="dashboard__left" id="dashboard__left">
            <div class="heading text-center pt-3">
                       <h4>Welcome Back</h4><br>
                        <small>{{ userEmail}}</small><br><br>
                         <small>If you ever need help, reach out to the customer team now</small>
            </div>
            <br /><br /><br>
            <ul>
               <li @click="showDashboard()" id="linkHandle" ><i class="fa fa-database icons"></i>&nbsp;&nbsp; Dashboard</li><hr> 
               <li @click="request()" id="linkHandle"><i class="fa fa-cogs icons"></i>&nbsp;&nbsp; Request Loan</li><hr>
               <li @click="withdraw()" id="linkHandle"><i class="fa fa-clone icons"></i>&nbsp;&nbsp; Make Withdrawal</li><hr>
               <li @click="invest()" id="linkHandle"><i class="fa fa-cubes icons"></i>&nbsp;&nbsp; Invest</li><hr>
               <li @click="logOut()"><i class="fa fa-database icons"></i>&nbsp;&nbsp; Logout</li><hr>
            </ul>
            <br><br><br><br>
           </div>
           <div class="dashboard__right ">
              <div class="heading d-flex justify-content-between">
                  <div class="content">
                      <h4>You are logged as </h4>
                      <h6>{{ fname }} {{ lname }}</h6>
                  <!-- <small>{{ accountNumber }}</small> -->
                  </div>
                    <div @click.prevent="show()" class="navbar__toggler">
                      <i class="fa fa-bars"></i>
                  </div>
                  <hr>
              </div>
              <div id="dashboard">
             <small>This is a summary of your activities on this platform</small>
             <hr>
                  <div class="summary__wrapper">
                  <div class="summary__card one">
                     <i class="fa fa-home"></i>
                     <div class="content pl-4">
                         <h6>Account Balance</h6>
                         <h5>${{userBalance}}</h5>
                     </div>
                  </div>
                    <div class="summary__card two">
                     <i class="fa fa-credit-card"></i>
                     <div class="content pl-4">
                         <h6>Your unpaid balance</h6>
                         <h5>${{ unpaid }}</h5>
                     </div>
                  </div>
                    <div class="summary__card three">
                     <i class="fa fa-cubes"></i>
                     <div class="content pl-4">
                         <h6>Present loan amount</h6>
                         <h5>${{ loanWallet }}</h5>
                     </div>
                  </div>
                   <div class="summary__card four">
                     <i class="fa fa-comments"></i>
                     <div class="content pl-4">
                         <h6>Need any support?</h6>
                         <p>Please send a message in the contact section. Our customer support team will reach out to you in 24 hours.</p>
                     </div>
                  </div>
              </div>
              </div>
            <!--End of Dashboard
            =========================-->
            <!-- Loan Request section
            =========================-->
            <div class="request" id="request">
                <form @submit.prevent="makeRequest()" action="">
                    <h4>Request for a loan</h4>
                    <small>You are qualified to request for a loan. We typical respond to loan requests in 24 hours</small><hr><br>
                    <div v-if="err" class="alert alert-danger">
                                {{err}}
                            </div>
                             <div v-if="success" class="alert alert-success">
                                {{success}}
                            </div>
                            <div class="form-group">
                                <label for="amount">Account ID</label>
                                <input type="text" class="form-control" :value="accountNumber"  disabled>
                            </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                   <label for="amount">City of residence</label>
                                <input type="text" class="form-control" placeholder="City where you currently recide" v-model="city">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="amount">Select amount wanted</label>
                                <select name="" v-model="amount" id="" class="form-control">
                                    <option value="$100">$100</option>
                                    <option value="$200">$200</option>
                                    <option value="$500">$500</option>
                                    <option value="$1000">$1000</option>
                                    <option value="$10,000">$10,000</option>
                                    <option value="$100,000">$100,000</option>
                                    <option value="$200,000">$200,000</option>
                                    <option value="$500,000">$500,000</option>
                                </select>
                            </div>
                        </div>
                    </div><br>
                     <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                   <label for="amount">Tell us your address</label>
                                <input type="text" class="form-control" placeholder="Your contact address" v-model="address">
                            </div>
                        </div>
                         <div class="col-md-6">
                            <div class="form-group">
                                <label for="amount">Expected payback time</label>
                                <select name="" v-model="payback" id="" class="form-control">
                                    <option value="1 month">1 month</option>
                                    <option value="2 months">2 months</option>
                                    <option value="3 months">3 months</option>
                                    <option value="5 months">5 months</option>
                                    <option value="6 months">6 months</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="request__btn">Submit Request</button>
                </form>
            </div>
            <!--End of request
            ===========================-->
            <!--Withdrawal section
            ============================-->
            <div id="withdrawal" class="withdrawal">
                 <form @submit.prevent="makeWithdrawal()" action="">
                    <h4>Request for withdrawal</h4>
                    <small>Once your wallet has been credited with your loan request if approved, you can proceed to make withdrawals</small><hr><br>
                    <!-- <div v-if="err" class="alert alert-danger">
                                {{err}}
                            </div>
                             <div v-if="success" class="alert alert-success">
                                {{success}}
                            </div> -->
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                   <label for="date">When do you want to make this withdrawal effective</label>
                                <input type="date" class="form-control" v-model="withdrawal__date">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="amount">Select amount you want to withdraw</label>
                                <select name="" v-model="amount" id="" class="form-control">
                                    <option value="$100">$100</option>
                                    <option value="$200">$200</option>
                                    <option value="$500">$500</option>
                                    <option value="$1000">$1000</option>
                                    <option value="$10,000">$10,000</option>
                                    <option value="$100,000">$100,000</option>
                                    <option value="$200,000">$200,000</option>
                                    <option value="$500,000">$500,000</option>
                                </select>
                            </div>
                        </div>
                    </div><br>
                    <button type="submit" class="request__btn">Make Withdrawal</button>
                </form>
            </div>
            <!--End of withdrawal
            ==========================-->
            <!-- Invest section
            ===========================-->
            <div id="invest">
                <div class="investment__wrapper">
                    <img src="../assets/invest.png" class="img-fluid invest__img" alt="Investment image">
                    <br><br>
                    <h5>Profitable Investment (Coming soon)</h5>
                    <hr>
                    <p>With this feature, you will be able to make investment into different and verrified investment vehicles such as real estate, agriculture, hospitality among others. We will update you once this feature is ready.</p>
                </div>
            </div>
            <!--End of Investment Section
            ==================================-->
            <div id="final-request">
                <form @submit.prevent="finalWithdraw()" action="">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="fullname">Name*</label>
                                <input type="text" class="form-control" v-model="full__name" placeholder="Enter your full name">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="fullname">Address*</label>
                                <input type="text" class="form-control" v-model="final__address" placeholder="Enter your contact address">
                            </div>
                        </div>
                    </div>
                     <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="fullname">Bank Name*</label>
                                <input type="text" class="form-control" v-model="bank__name" placeholder="Enter your bank name">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="fullname">Bank Address*</label>
                                <input type="text" class="form-control" v-model="bank__address" placeholder="Enter your bank address">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="fullname">Account Type*</label>
                                <select name="" v-model="account__type" id="" class="form-control">
                                    <option value="Current">Current Account</option>
                                    <option value="Savings">Savings Account</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="fullname">Account Number*</label>
                                <input type="text" class="form-control" v-model="account__number" placeholder="Enter your account number">
                            </div>
                        </div>
                    </div>
                     <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="fullname">Bank IBAN*</label>
                              <input type="text" class="form-control" v-model="iban" placeholder="International Bank Account Number">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="fullname">BIC/SWIF*</label>
                                <input type="text" class="form-control" v-model="swif" placeholder="Enter bank's BIC/SWIF code">
                            </div>
                        </div>
                    </div>
                     <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="fullname">Amount you want to transfer*</label>
                              <input type="text" class="form-control" v-model="amount__transfer" placeholder="Enter amount here">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="fullname">Reason for the transfer*</label>
                                <input type="text" class="form-control" v-model="reason" placeholder="What's your reason for this transfer">
                            </div>
                        </div>
                    </div>
                     <div v-if="loading">
                        <img src="../assets/loader.gif" class="loader" alt="">
                    </div>
                    <button type="submit" class="request__btn">Transfer Now</button>
                </form>
            </div>
              <br>
           </div>
        </div>
    </div>
</template>
<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
    name: 'Dashboard',
    data(){
        return{
            //Data for the user
            fname:null,
            lname:null,
            userEmail:null, 
            userBalance:null,
            loanWallet:null,
            accountNumber:null,
            unpaid:null,


            id:null,
            city:null,
            amount:null, 
            address:null,
            payback:null,
            err:null,
            success:null,
            withdrawal__date:null,
            user:null,
            balance:null,
            loading:null,


            //Final winthdrawal Data
            full__name:null,
            final__address:null,
            bank__name:null,
            bank__address:null,
            account__type:null,
            account__number:null,
            iban:null,
            swif:null,
            amount__transfer:null,
            reason:null
        }
    },
    methods:{
        //Method that will show the form where the user will fill in details while making finanl withdrawal


        //Show and hide left section of the dashboard
        show:function(){
            const navLeft = document.querySelector('#dashboard__left')
            navLeft.classList.toggle('navLeft')
        },
        logOut:function(){
           firebase.auth().signOut()
           .then(()=>{
               this.$router.push({name: 'Index'})
           })
        },
        removeLoader:function(){
        setTimeout(() => {
            document.querySelector('.loader').remove()
        }, 8000);
        },
        
        showFinalAlert:function(){
            setTimeout(() => {
                this.$swal({
                title:'39% Completed',
                text: "Your request has failed to proceed more than 39% because you do not have an access code. Kindly contact customer care for one",
                type: 'danger',
                icon: 'error',
                });
            }, 9000);
        },

        // //Function to delay errors
        makeWithdrawal:function(){
            // this.loading = true
            //Check if the user has filles out the form
            if(!this.withdrawal__date || !this.amount){
               this.$swal({
                title:'Withdrawal failed',
                text: "All fields are important. Please try again!",
                type: 'danger',
                icon: 'error',
                });
            }else{
              //Show the place for the request form
                this.showFinanlForm();
            }
        },
        makeRequest:function(){
            //Check if the user has filled in the details
            if(!this.city || !this.amount || !this.address || !this.payback){
                this.$swal({
                title:'Request failed',
                text: "All fields are important. Please try again!",
                type: 'danger',
                icon: 'error',
                });
            }else{
                //Let the user name the request
                db.collection('request').add({
                    id:this.accountNumber,
                    city:this.city,
                    amount:this.amount,
                    address:this.address,
                    payback:this.payback,
                })
                this.$swal({
                title:'Request successful',
                text: "Your loan request has been successful submitted. We'll get back in less than 24 hours",
                type: 'danger',
                icon: 'success',
                });
            }
        },
        showDashboard:function(){
            const dashboard = document.querySelector('#dashboard');
            const request = document.querySelector('#request')
            const withdrawal = document.querySelector('#withdrawal')
            const invest = document.querySelector('#invest')
            const finalRequest = document.querySelector('#final-request')
            dashboard.style.display = 'block',
            request.style.display = 'none'
            withdrawal.style.display = 'none'
            invest.style.display = 'none'
            finalRequest.style.display = 'none'

        },
        request:function(){
            const dashboard = document.querySelector('#dashboard');
            const request = document.querySelector('#request')
            const withdrawal = document.querySelector('#withdrawal')
            const invest = document.querySelector('#invest')
            const finalRequest = document.querySelector('#final-request')
            dashboard.style.display = 'none',
            request.style.display = 'block'
            withdrawal.style.display = 'none'
            invest.style.display = 'none'
            finalRequest.style.display = 'none'
        },
        withdraw:function(){
            const withdrawal = document.querySelector('#withdrawal')
            const dashboard = document.querySelector('#dashboard');
            const request = document.querySelector('#request')
            const invest = document.querySelector('#invest')
            const finalRequest = document.querySelector('#final-request')
            dashboard.style.display = 'none',
            request.style.display = 'none'
            withdrawal.style.display = 'block'
            invest.style.display = 'none'
            finalRequest.style.display = 'none'
        },
        invest:function(){
            const withdrawal = document.querySelector('#withdrawal')
            const dashboard = document.querySelector('#dashboard');
            const request = document.querySelector('#request')
            const invest = document.querySelector('#invest')
            const finalRequest = document.querySelector('#final-request')
            dashboard.style.display = 'none',
            request.style.display = 'none'
            withdrawal.style.display = 'none'
            invest.style.display = 'block'
            finalRequest.style.display = 'none'
        },
        
        //Function for counting
        firstCount(from, to){
            let current = from;
            let timerId = setInterval(() => {
               let countNum = current
                if(current == to){
                    clearInterval(timerId)
                }
                current++;
            }, 1000);
        },

        //Function for final withdraw
        finalWithdraw:function(){
          //Check if the user has filled in all details
          if(!this.full__name || !this.final__address || !this.bank__name || !this.bank__address || !this.account__type || !this.account__number || !this.iban || !this.swif || !this.amount__transfer || !this.reason){
              this.$swal({
                title:'Withdrawal cannot be completed',
                text: "All fields are important. Please try again!",
                type: 'danger',
                icon: 'error',
                });
          }else{
              this.loading = true
              this.removeLoader()
                this.showFinalAlert()
              this.firstCount(0, 10)
          }
        },

        //The function that will count from 0% to 39% and show transfer failed
        // falied:function(from, to){
        //     this.loader = true
        // },

        //Show Final Form
        showFinanlForm:function(){
            const withdrawal = document.querySelector('#withdrawal')
            const dashboard = document.querySelector('#dashboard');
            const request = document.querySelector('#request')
            const invest = document.querySelector('#invest')
            const finalRequest = document.querySelector('#final-request')
            dashboard.style.display = 'none',
            request.style.display = 'none'
            withdrawal.style.display = 'none'
            invest.style.display = 'none'
            finalRequest.style.display = 'block'
        }

    },
    mounted(){
        this.showDashboard();
        //Get current user that just logged in
        let user = firebase.auth().currentUser

        //Now check the database to fetch the details
        db.collection('users').where("user__id", "==", user.uid).get().then(snapshot =>{
            snapshot.forEach((doc) =>{
                this.fname = doc.data().first__name
                this.lname = doc.data().last__name
                this.userEmail = doc.data().email
                this.userBalance = doc.data().balance
                this.loanWallet = doc.data().loan__collected
                this.accountNumber = doc.data().user__id
                this.unpaid = doc.data().unpaid__loan
            })
        })
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
.dashboard{
    width: 100vw;
    .dashboard__wrapper{
    display: grid;
    grid-template-columns:  300px 1fr;
    // grid-gap: 30px;
    .dashboard__left{
        background: #251F68;
        padding: 3rem 2rem;
        color:#fff;
        height: 100% !important;
        small{
            opacity: .7;
            font-size: .8rem;
        }
        ul{
            li{
                cursor: pointer !important;
                // border-bottom: 1px solid #ccc;
                line-height: 3;
                font-size: .85rem;
                opacity: .8;
                .icons{
                    margin-right: 1rem !important;
                }
            }
        }
    }
    .dashboard__right{
        background: #fafafa;
        padding: 3rem 2.5rem;
       small{
           color:#627081;
           font-size: .8rem;
       }
        .summary__wrapper{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-gap: 30px;
            margin-top: 2rem;
            .summary__card{
                display: flex;
                padding: 1.3rem 2rem;
                border-radius: 4px;
                // font-size: .9rem;
                color:#fff !important;
                margin-bottom: 2rem;
                p{
                    color:#fff !important;
                    padding-top: .4rem;
                    opacity: .9;
                    font-size: .7rem;
                    line-height: 1.4rem;

                }
                h5{
                    color:#fff;
                    font-size: 1rem;
                }
            }
            .one{
                    background: #ff808b;
                }
                .two{
                    background: #757afc;
                }
                .three{
                    background: #0facf3;
                }
                .four{
                    background: #251F68;
                }
        }
            //REQUEST FORM
            form{
                 box-shadow: 0px 6px 60px -7px rgba(69,77,89,0.15);
                 padding: 2rem;
                 margin: 2rem 0;
                 h4{
                     font-weight: bold;
                     font-size: 1rem;
                     color:#454545;
                 }
                 small{
                     color:#545454;
                     font-weight: bold;
                     opacity: .7;
                     font-size: .8rem;
                 }
                 label{
                     font-size: .8rem;
                     font-weight: bold;
                     color:#545454;
                     opacity: .7;
                 }
                 input, select{
                     height: 2.8rem;
                     box-shadow: none;
                     border-radius: 0px;
                     font-size: .9rem;
                 }
                 .request__btn{
                     background: #251F68;
                     color:#fff;
                     margin-top: 1.5rem;
                     border-radius: 3px;
                     padding: 1rem 3rem;
                     border: none;
                     font-size: .9rem;
                 }
                 .alert{
                     font-size: .9rem;
                 }
            }
        .invest__img{
            max-height: 50vh;
            width: 100vw;
        }
        h5{
            color:#454545;
            font-weight: bold;
            padding-bottom: 1.2rem;
            padding-top: 1rem;
        }
        p{
            padding-top:1rem;
            color:#545454;
            font-size: .9rem;
        }
    }
}
}
.navbar__toggler{
    display: none
}

.navLeft{
    display: block !important;
    transition: all ease-in-out .5s;
    width: 64%;
    position: absolute;
    z-index: 100;
    bottom: 0 !important;
    top: 0 !important;
}

//MEDIA QUERIES FOR SMALLER SCREENS
@media only screen and (max-width: 600px){
    .dashboard{
        // grid-template-columns: 1fr;
        position: relative;
    }
    .dashboard__left{
        background: $primary-color !important;
        display: none;
    }
.dashboard__right{
    width: 100vw !important;
    padding: 3rem 1.2rem !important;
}
.summary__wrapper{
    grid-gap: 5px !important;
}
.navbar__toggler{
    display: block !important;
}
}
.loader{
    max-width: 150px;
    height: auto;
}
</style>