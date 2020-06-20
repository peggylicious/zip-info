<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>ZipInfo</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ZipSearch v-on:get-zip="getZipInfo"/>
      <!-- <p>{{ info["post  code"] }}</p> -->
      <zip-info v-bind:info="infos"></zip-info>
      <clear-info v-bind:clInfo="infos" v-on:clear-info="clearInfo"></clear-info>
    </ion-content>
  </div>
</template>

<script>
// @ is an alias to /src
import ZipSearch from "../components/ZipSearch"
import ZipInfo from "../components/ZipInfo"
import ClearInfo from "../components/ClearInfo"

export default {
  name: 'Home',
  components: {
    ZipSearch,
    ZipInfo,
    ClearInfo
  },
  data() {
    return {
      infos: null
    }
  },
  methods: {
    async getZipInfo(zip){
      // console.log(zip)
      const res = await fetch(`https://api.zippopotam.us/us/${zip}`);
      const result = await res.json();
      if(res.status == 404){
        // console.log(res.json())
        this.showAlert()
      }
      this.infos = result
      console.log(result)
      console.log(this.infos)
    },
    clearInfo(){
      this.infos = null
    },
    showAlert(){
      return this.$ionic.alertController
      .create({
          header: "Invalid Zipcode!",
          message: "Please enter a valid Us zipcode",
          buttons: ["Ok"]
      })
      .then(a => a.present())
    }
  }
}
</script>
