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
                    <div v-if="loading">
                        <img src="../assets/loader.gif" class="loader" alt="">
                    </div>
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
        }
    },
    methods:{
        //Show and hide left section of the dashboard
        show:function(){
            const navLeft = document.querySelector('#dashboard__left')
            navLeft.classList.toggle('navLeft')
        },
        logOut:function(){
           firebase.auth().signOut()
           .then(()=>{
               this.$router.push({name: 'Login'})
           })
        },
        removeLoader:function(){
        setTimeout(() => {
            document.querySelector('.loader').remove()
            this.err = 'Request failed. Please contact customer support in the contact page'
        }, 5000);
        },
        makeWithdrawal:function(){
            //Check if the form was fiilled
            if(!this.withdrawal__date || !this.amount){
                //Through error
                this.err = 'Please fill out this form'
            }else if(this.loanWallet < this.amount){
                    this.err = 'Insufficient fund. Please make a loan request first'
                } 
            else{
                this.loading = 'true'
                this.removeLoader()
             
            }
        },
        makeRequest:function(){
            //Check if the user has filled in the details
            if(!this.city || !this.amount || !this.address || !this.payback){
                this.err = 'Please fill in all details'
            }else{
                //Let the user name the request
                db.collection('request').add({
                    id:this.accountNumber,
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