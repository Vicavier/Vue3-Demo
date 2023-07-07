<template>
  <h1>Hello, YJJ!</h1>
  <el-input v-model="userInfo.user_name" placeholder="请输入用户名"></el-input>
  <el-input v-model="userInfo.user_passwd" placeholder="请输入密码" type="password" show-password></el-input>
  <el-button @click="login">登录</el-button>
</template>

<script>
import {reactive} from "vue";
import axios from "axios";

export default {
  setup(){
    let userInfo = reactive({
      user_name:'',
      user_passwd:'',
    })
    function login(){
      //TODO:和后端交互
      axios({
        method: 'POST',
        url: 'http://localhost:9090/user/login',
        headers:{
          "Content-Type":"application/json",
        },
        data:JSON.stringify(userInfo)
      }).then(resp => {
        if(resp.data.code === 200){
          console.log(resp.data)
          localStorage.setItem("user",JSON.stringify(resp.data.data))
          alert("登录成功!")
        } else
          alert("登录失败!")
      })

    }
    return{
      userInfo,
      login,
    }
  }
}
</script>