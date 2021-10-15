<template>
  <div class="card">
    <div class="content">
      <div class="front">
        <img class="front-image" v-if="asset" :src="asset.imageUrl" :alt="asset.name"/>
      </div>
      <div class="back">
        <div v-if="asset" class="attributes">
          <div class="trait" v-for="(trait, index) in asset.traits" :key="index">
            {{ trait.trait_type }}: {{ trait.value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OpenSea from '@/services/OpenSea'

export default {
  name: 'CardFlip',
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
  }
}
</script>

<style scoped lang="scss">
  .card {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    margin: -150px;
    float: left;
    perspective: 500px;
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);

    transition: transform 1s;
    transform-style: preserve-3d;
  }

  .card:hover .content {
    transform: rotateY( 180deg ) ;
    transition: transform 0.5s;
  }

  .front,
  .back {
    position: absolute;
    height: 100%;
    width: 100%;
    background: white;
    line-height: 300px;
    color: #03446A;
    text-align: center;
    font-size: 60px;
    backface-visibility: hidden;
  }

  .back {
    background: #03446A;
    color: white;
    transform: rotateY( 180deg );
  }

  .front-image {
    width: 100%;
    height: 100%;
  }

  .attributes {
    display: flex;
    flex-direction: column;
    margin-top: -50px;
    /* height: 100%; */
    height: 300px;
    /* align-items: flex-start; */
    justify-content: flex-start;
  }

  .trait {
    font-family: 'Share Tech', sans-serif;
    height: 50px;
    font-size: 40px;
  }
</style>
