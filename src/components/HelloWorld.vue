<template>
  <div class="hello">
    <h1>Digital Terraform</h1>
  <div class="bg"/>

  <div class="cont">
    <div class="drip"></div>
    <div class="drip"></div>
    <div class="drip"></div>
    <div class="drip"></div>
    <div class="drip"></div>
    <div class="drip"></div>
    <div class="drip"></div>
    <div class="drip"></div>
    <div class="drip"></div>
    <div class="drip"></div>
    <div class="drip"></div>
    <div class="drip"></div>
    <div class="drip"></div>
    <div class="drip"></div>
    <div class="drip"></div>
    <div class="drip"></div>
    <div class="drip"></div>
    <div class="drip"></div>
    <div class="drip"></div>
    <div class="drip"></div>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  </div>

  <div v-if="account" class="account">{{ truncatedAccount }}</div>

  <div class="social">
    <a href="https://twitter.com" target="_blank">
      <img class="icon-social" src="../assets/icon-twitter.svg" alt="Twitter">
    </a>
    <a href="https://discord.com" target="_blank">
      <img class="icon-social" src="../assets/icon-discord.svg" alt="Discord">
    </a>
    <a href="https://opensea.io" target="_blank">
      <img class="icon-social" src="../assets/icon-opensea.svg" alt="Open Sea">
    </a>
  </div>
  <section class="main-content">
    <div class="column-half">
      <div class="column">
        <h2 class="green">About this shit</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div class="column">
        <CardFlip />
      </div>
    </div>
    <div class="column-half">
      <div class="column">
        <CardFlip />
      </div>
      <div class="column">
        <h2 class="orange">About this shit</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
    <div class="column-half">
      <div class="column">
        <h2 class="blue">About this shit</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div class="column">
        <CardFlip />
      </div>
    </div>
    <div class="column-half">
      <div class="column">
        <CardFlip />
      </div>
      <div class="column">
        <h2 class="blue">About this shit</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
    <div class="column-half">
      <div class="column">
        <h2 class="orange">About this shit</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div class="column">
         <CardFlip />
      </div>
    </div>
    <div class="column-half">
      <div class="column">
         <CardFlip />
      </div>
      <div class="column">
        <h2 class="green">About this shit</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import OpenSea from '@/services/OpenSea'
import CardFlip from '@/components/CardFlip.vue'
export default {
  name: 'HelloWorld',
  components: {
    CardFlip
  },
  data () {
    return {
      asset: null,
      account: null
    }
  },
  created () {
    const openSeaService = new OpenSea()
    const tokenAddress = '0x88B48F654c30e99bc2e4A1559b4Dcf1aD93FA656'
    const tokenId = '80587809748774686717533570647593927513269926828822375583733104331769054756865'
    openSeaService.getAsset(tokenAddress, tokenId)
      .then(asset => {
        this.asset = asset
      })

    openSeaService.getAccount()
      .then(account => {
        this.account = account
      })
  },
  computed: {
    truncatedAccount () {
      return this.account ? `${this.account.slice(0, 5)}...${this.account.slice(-4)}` : ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin: 0;
  font-size: 10vw;
  text-shadow: 7 8 8 black;
  text-shadow: 3px 4px 2px #000000;
  letter-spacing: 0.05em;
  position: relative;
  z-index: 1;
  width: 100%;
  text-align: center;
  margin-bottom: 100px;

  @media only screen and (max-width: 768px) {
    font-size: 19vw;
    line-height: 15vw;
    padding-top: 50px;
  }
}

h2 {
  font-size: 72px;
  margin: 0;
}

h3 {
  margin: 40px 0 0;
}

p {
  font-family: 'Share Tech', sans-serif;
  font-size: 22px;
  line-height: 28px;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.green {
  color: #42b983;
}

.orange {
  color: #f80
}

.blue {
  color: #32ccee;
}

.bg {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-image: url('../assets/home-bg.jpg');
  background-size: cover;
  opacity: 0.2;
}

.social {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0 40px 30px 0;
  display: flex;
}

.icon-social {
  width: 30px;
  margin: 0 10px;
}

.main-content {
  position: relative;
  z-index: 1;
  width: 80vw;
  margin-left: 10vw;
}

.column-half {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 150px;

  .column {
    position: relative;
    width: 48%;
    padding: 0 1%;
  }

  @media only screen and (max-width: 768px) {
    padding-bottom: 50px;

    .column {
      width: 100%;
      padding: 0;
      min-height: 400px;
    }
  }
}

.cont{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  overflow:hidden;
  border-top:15px solid black;
  border-bottom:15px solid black;
  border-radius: 10px;
  filter:url("#goo");
  box-shadow: 0 2px 10px rgba(0,0,0,0.5);
}
.cont .drip{
  height:30px;
  width:30px;
  border-radius: 50%;
  background:black;
  position:absolute;
  top:-100%;
  animation:falling 5s linear infinite;
}
@keyframes falling{
  0%{
    top:-100%;
  }
  50%{
    top:0%;
  }
  80%{
    top:80%;
  }
  100%{
    top:100%;
  }
}
.cont .drip:nth-child(1){
  border-color:black;
  height:140px;
  width:140px;
  animation-delay: -0.2s;
  background:black;
  left:173px;
  margin-left:60px;
}
.cont .drip:nth-child(2){
  border-color:black;
  height:25px;
  width:25px;
  animation-delay: -0.4s;
  background:black;
  left:76px;
  margin-left:60px;
}
.cont .drip:nth-child(3){
  border-color:black;
  height:380px;
  width:380px;
  animation-delay: -0.6s;
  background:black;
  left:96px;
  margin-left:60px;
}
.cont .drip:nth-child(4){
  border-color:black;
  height:290px;
  width:290px;
  animation-delay: -0.8s;
  background:black;
  left:24px;
  margin-left:60px;
}
.cont .drip:nth-child(5){
  border-color:black;
  height:200px;
  width:200px;
  animation-delay: -1s;
  background:black;
  left:93px;
  margin-left:60px;
}
.cont .drip:nth-child(6){
  border-color:black;
  height:140px;
  widows: 140px;
  animation-delay: -1.2;
  background:black;
  left:117px;
  margin-left:60px;
}
.cont .drip:nth-child(7){
  border-color:black;
  height:50px;
  width:50px;
  animation-delay: -1.4s;
  background:black;
  left:31px;
  margin-left:60px;
}
.cont .drip:nth-child(8){
  border-color:black;
  height:20px;
  width:20px;
  animation-delay: -1.6s;
  background:black;
  left:4px;
  margin-left:60px;
}
.cont .drip:nth-child(9){
  border-color:black;
  height:20px;
  width:20px;
  animation-delay: -1.8s;
  background:black;
  left:14px;
  margin-left:60px;
}
.cont .drip:nth-child(10){
  border-color:black;
  height:160px;
  width:160px;
  animation-delay: -2s;
  background:black;
  left:143px;
  margin-left:60px;
}
.cont .drip:nth-child(11){
  border-color:black;
  height:110px;
  width:110px;
  animation-delay: -2.2s;
  background:black;
  left:10px;
  margin-left:60px;
}
.cont .drip:nth-child(12){
  border-color:black;
  height:40px;
  width:40px;
  animation-delay: -2.4s;
  background:black;
  left:158px;
  margin-left:60px;
}
.cont .drip:nth-child(13){
  border-color:black;
  height:180px;
  width:180px;
  animation-delay: -2.6s;
  background:black;
  left:163px;
  margin-left:60px;
}
.cont .drip:nth-child(14){
  border-color:black;
  height:40px;
  width:40px;
  animation-delay: -2.8s;
  background:black;
  left:168px;
  margin-left:60px;
}
.cont .drip:nth-child(15){
  border-color:black;
  height:130px;
  width:130px;
  animation-delay: -3s;
  background:black;
  left:103px;
  margin-left:60px;
}
.cont .drip:nth-child(16){
  border-color:black;
  height:40px;
  width:40px;
  animation-delay: -3.2s;
  background:black;
  left:158px;
  margin-left:60px;
}
.cont .drip:nth-child(17){
  border-color:black;
  height:270px;
  width:270px;
  animation-delay: -3.4s;
  background:black;
  left:179px;
  margin-left:60px;
}
.cont .drip:nth-child(18){
  border-color:black;
  height:130px;
  width:130px;
  animation-delay: -3.6s;
  background:black;
  left:97px;
  margin-left:60px;
}
.cont .drip:nth-child(19){
  border-color:black;
  height:230px;
  width:230px;
  animation-delay: -3.8s;
  background:black;
  left:149px;
  margin-left:60px;
}
.cont .drip:nth-child(20){
  border-color:black;
  height:200px;
  width:200px;
  animation-delay: -4s;
  background:black;
  left:156px;
  margin-left:60px;
}

.account {
  position: fixed;
  top: 30px;
  right: 40px;
  color: white;
  font-family: 'Share Tech', sans-serif;
  border: 1px solid white;
  border-radius: 2px;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.5);
}

</style>
