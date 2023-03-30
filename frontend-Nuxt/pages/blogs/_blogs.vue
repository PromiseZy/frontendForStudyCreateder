<template>
    <div>
      <header>
        <MyBar />
      </header>
        <h1>{{ this.data.title }}</h1>
        <div v-if=(!this.checkData)></div>
        <div v-else><img :src="getImageUrl(this.data.topphoto.data.attributes.url)"></div>
        <h3>{{ this.data.intro }}</h3>
        {{ this.data.content }}
    </div>
  </template>

  <script>
  export default {
    
    name: 'fetchData',
      data () {
      return {
        datas: [],
        data:[],
        checkData:"",

      }
      },
      mounted(){
        const getResult = async () => {
          const fdata = await fetch('http://localhost:1337/api/article-tests?populate=*');
          const res = await fdata.json()
          this.datas = res;
          this.data = [];
        }
        getResult()
      },updated(){
        for (let i = 0; i < this.datas.data.length; i++) {
          if(this.$router.currentRoute.path==("/blogs/"+(this.datas.data[i].attributes.slug))){
            this.data=this.datas.data[i].attributes;
          }
        }
        this.checkData="check"
        console.log(this.data)
      },methods: {
    getImageUrl(url) {
      return `http://localhost:1337${url}`;
    },
  }
  }
</script>

<script setup>
</script>