<template>
  <h1>Hello, YJJ!</h1>
  <el-button @click="submit">Default</el-button>
</template>

<script>
export default {
  setup(){
    function submit(){
      //TODO:和后端交互
      alert("上传成功！")
    }
    return{
      submit,

    }
  }
}
</script>