<template>
    <img class="logo" src="../assets/resto.png" alt="">
    <h1>Sign Up</h1>
    <div class="register-form">
        <input type="text" v-model="name" placeholder="Please Enter Name">
        <input type="email" v-model="email" placeholder="Please Enter E-mail">
        <input type="password" v-model="password" placeholder="Please Enter Password">
        <button v-on:click="signUp">Submit</button>
    </div>
</template>
<script>
    import axios from 'axios'
    export default{
        name : 'SignUp',
        data(){
            return {
                name:'',
                email:'',
                password:''
            }
        },
        methods:{
            async signUp()
            {
                let result = await axios.post("http://localhost:3000/users", {
                    email:this.email,
                    name:this.name,
                    password:this.password,
                });
                
                console.warn(result);
                if(result.status==201)
                {
                    alert("Sign Up Done");
                    localStorage.setItem("user-info",JSON.stringify(result.data))
                }
                }   
        }
    }
</script>
<style>
    .logo{
        width: 300px;
    }
    .register-form input {
        width: 300px;
        height: 40px;
        padding-left: 20px;
        margin-left: auto;
        margin-right: auto;
        display: block;
        margin-bottom: 30px;
        border: 2px solid rosybrown;
    }
    .register-form button {
        width: 330px;
        height: 40px;
        cursor: pointer;
        background: rosybrown;
        color: antiquewhite;
        border: none;
    }
</style>