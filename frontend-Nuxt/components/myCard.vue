<template >
  <div class="card">
    <div className="container">
        <div v-if=!this.attributes></div>
        <div v-else>      
          <NuxtLink :to="getSlugUrl(attributes.slug)">
            <img :src="'http://localhost:1337'+this.attributes.topphoto.data.attributes.url"
            width="320"
            height="160"
            class="center">
            <h3>{{ attributes.title }}</h3>
          </NuxtLink>
          <p>{{attributes.intro}}</p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['id','attributes'],
  mounted(){
    console.log(this.attributes)
  },
  methods: {
    getImageUrl(url) {
      return `http://localhost:1337${url}`;
    },
    getSlugUrl(url){
      return `blogs/${url}`
    }
  }
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 30%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
