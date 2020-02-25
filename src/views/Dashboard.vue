<template>
    <div class="dashboard">
        <div class="dashboard__wrapper">
           <div class="dashboard__left">
            <div class="heading text-center">
                   <h4>Welcome Back</h4><br><br>
               <small>If you ever need help, reach out to the customer team now</small>
            </div>
            <br /><br /><br>
            <ul>
               <li @click="showDashboard()" ><i class="fa fa-database icons"></i>&nbsp;&nbsp; Dashboard</li><hr> 
               <li @click="request()"><i class="fa fa-cogs icons"></i>&nbsp;&nbsp; Request Loan</li><hr>
               <li @click="withdraw()"><i class="fa fa-clone icons"></i>&nbsp;&nbsp; Make Withdrawal</li><hr>
               <li @click="invest()"><i class="fa fa-cubes icons"></i>&nbsp;&nbsp; Invest</li><hr>
               <li @click="logOut()"><i class="fa fa-database icons"></i>&nbsp;&nbsp; Logout</li><hr>
            </ul>
           </div>
           <div class="dashboard__right">
              <div class="heading">
                  <h4>You are logged into your account</h4>
                  <small>achilles@gmail.com</small>
                  <hr>
              </div>
              <div id="dashboard">
                  <div class="summary__wrapper">
                  <div class="summary__card one">
                     <i class="fa fa-bars"></i>
                     <div class="content pl-4">
                         <h6>Account Balance</h6>
                         <p>Your account balance is $00.00</p>
                     </div>
                  </div>
                    <div class="summary__card two">
                     <i class="fa fa-bars"></i>
                     <div class="content pl-4">
                         <h6>Your unpaid balance</h6>
                         <p>The total loan you still owe us is $00.00</p>
                     </div>
                  </div>
                    <div class="summary__card three">
                     <i class="fa fa-bars"></i>
                     <div class="content pl-4">
                         <h6>Lorem, ipsum dolor.</h6>
                         <p>$00.00</p>
                     </div>
                  </div>
                   <div class="summary__card four">
                     <i class="fa fa-bars"></i>
                     <div class="content pl-4">
                         <h6>Lorem, ipsum dolor.</h6>
                         <p>$00.00</p>
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
                    <div v-if="err" class="alert alert-danger">
                                {{err}}
                            </div>
                             <div v-if="success" class="alert alert-success">
                                {{success}}
                            </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                   <label for="amount">When do you want to make this withdrawal effective</label>
                                <input type="date" class="form-control" v-model="date">
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
              <br>
              <small>Networth International prides herself as your partner of choice that simplifies access to personal loan. We believe if you are empowered by significant financial support, you could go on to do so much <br> If you find anything unclear while using out platforms, kindly reach out to the support team through the contact page</small>
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
            city:null,
            amount:null, 
            address:null,
            payback:null,
            err:null,
            success:null,
            date:null
        }
    },
    methods:{
        logOut:function(){
           firebase.auth().signOut()
           .then(()=>{
               this.$router.push({name: 'Login'})
           })
        },
        makeWithdrawal:function(){
            //Check if the form was fiilled
            if(!this.date || !this.amount){
                //Through error
                this.err = 'Please fill out this form'
            }else{
                this.success = 'Request submited. We will get back to you'
            }
        },
        makeRequest:function(){
            //Check if the user has filled in the details
            if(!this.city || !this.amount || !this.address || !this.payback){
                this.err = 'Please fill in all details'
            }else{
                //Let the user name the request
                db.collection('request').add({
                    city:this.city,
                    amount:this.amount,
                    address:this.address,
                    payback:this.payback,
                })
                this.success = 'Request sucessfully sent'
            }
        },
        showDashboard:function(){
            const dashboard = document.querySelector('#dashboard');
            const request = document.querySelector('#request')
            const withdrawal = document.querySelector('#withdrawal')
            const invest = document.querySelector('#invest')
            dashboard.style.display = 'block',
            request.style.display = 'none'
            withdrawal.style.display = 'none'
            invest.style.display = 'none'

        },
        request:function(){
            const dashboard = document.querySelector('#dashboard');
            const request = document.querySelector('#request')
            const withdrawal = document.querySelector('#withdrawal')
            const invest = document.querySelector('#invest')
            dashboard.style.display = 'none',
            request.style.display = 'block'
            withdrawal.style.display = 'none'
            invest.style.display = 'none'
        },
        withdraw:function(){
            const withdrawal = document.querySelector('#withdrawal')
            const dashboard = document.querySelector('#dashboard');
            const request = document.querySelector('#request')
            const invest = document.querySelector('#invest')
            dashboard.style.display = 'none',
            request.style.display = 'none'
            withdrawal.style.display = 'block'
            invest.style.display = 'none'
        },
        invest:function(){
            const withdrawal = document.querySelector('#withdrawal')
            const dashboard = document.querySelector('#dashboard');
            const request = document.querySelector('#request')
            const invest = document.querySelector('#invest')
            dashboard.style.display = 'none',
            request.style.display = 'none'
            withdrawal.style.display = 'none'
            invest.style.display = 'block'
        },
        showPersonal:function(){
            const personal = document.querySelector('.personal__contents');
            const bank = document.querySelector('.bank__contents');
            personal.style.display = 'block';
            bank.style.display = 'none';
        },
        showBank:function(){
            const personal = document.querySelector('.personal__contents');
            const bank = document.querySelector('.bank__contents');
            personal.style.display = 'none';
            bank.style.display = 'block';
        },
        //Function to hide the profile section when mounted
        hideBankDetails: function(){
        const bank = document.querySelector('.bank__contents');
           bank.style.display = 'none';
        }
    },
    mounted(){
        this.showDashboard();
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
.dashboard{
    width: 100vw;
    height: 100vh;
    .dashboard__wrapper{
    display: grid;
    grid-template-columns:  300px 1fr;
    // grid-gap: 30px;
    .dashboard__left{
        background: #251F68;
        padding: 3rem;
        color:#fff;
        small{
            opacity: .8;
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
            grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
            grid-gap: 30px;
            margin-top: 2rem;
            .summary__card{
                display: flex;
                padding: 1.3rem 2rem;
                border-radius: 4px;
                font-size: .9rem;
                color:#fff !important;
                margin-bottom: 2rem;
                p{
                    color:#fff !important;
                    padding-top: .4rem;
                    opacity: .9;

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
                    background: #FFCA28;
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
</style>