<template>
  <div class="header">
    <div class="content-bar">
      <div class="logo">{{ text.klook }}</div>
      <div class="right-option download text">
        <button v-on:click="download">{{ text.download }}</button>
      </div>
      <div class="right-option email text">{{ text.login }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      text: {
        klook: "KLOOK",
        download: "Download Package",
        login: "Login"
      }
    };
  }, 
  methods: {
    download: function(){
      this.$http.get('http://localhost:3000/download', {

      }).then(function(data) {
        if (!data) {
            return;
        }
        let url = window.URL.createObjectURL(new Blob([data]))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', 'a.png')

        document.body.appendChild(link)
        link.click()
      }, function(err) {
        console.log(err);
      });
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  min-width: 522px;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12);
}

.content-bar {
  width: calc(100% - 144px);
  height: 24px;
  margin: auto;
  position: relative;
  top: 24px;
  display: flex;
}

.logo {
  height: 23.5px;
  font-size: 26px;
  color: #ff5722;
  float: left;
  min-width: 134px;
  flex-grow: 140;
}

.right-option {
  height: 22px;
  padding-top: 8px;
}

.download {
  min-width: 134px;
  flex-grow: 10;
}

.email {
  min-width: 110px;
  flex-grow: 1;
}

.text {
  font-family: SFProText;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #3c2e2e;
}
</style>
