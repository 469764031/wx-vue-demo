<template>
  <div style="height: 1000px">
    <mt-search v-model="value" cancel-text="取消" placeholder="搜索" style="height: 1000px"></mt-search>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        value: ""
      }
    }
  }
</script>
