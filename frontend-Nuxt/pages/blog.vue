<template>
  <div>
    <header>
      <MyBar />
    </header>
    <h1>Welcome to my Blog</h1>
    <main>
      <div className="grid-container">
        <li v-if=(!this.datas)></li>
        <span v-else>
          <MyCardVue v-for="item in datas.data" v-bind="item" />
        </span>
      </div>
    </main>

  </div>
</template>

<script setup>
  import MyBar from '../components/MyBar.vue';
  import MyCardVue from '../components/MyCard.vue';

</script>

<script>
export default {
  name: 'fetchData',
      data () {
      return {
        datas: [],
        checkData:"",

      }
      },
      mounted(){
        const getResult = async () => {
          const fdata = await fetch('http://localhost:1337/api/article-tests?populate=*');
          const res = await fdata.json()
          this.datas = res;
        }
        getResult()
      },
  methods: {
    getImageUrl(url) {
      return `http://localhost:1337${url}`;
    }
  }
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  inline-size: 0px;
}
</style>
