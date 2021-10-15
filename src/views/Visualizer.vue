<template>
  <div class="visualizer">
    <div v-if="!isLoaded" class="loading">Loading Images...</div>
    <div class="art">
      <canvas ref="canvas" id="nft-canvas"></canvas>
      <button @click.prevent="randomize" class="btn-randomize">Randomize</button>
    </div>
    <div class="info">
      <h2>Info</h2>
      <div class="attribute">
        <span>HEAD:</span> <span class="blue">{{ art.heads[selectedHead].name }}</span>
      </div>
      <div class="attribute">
        <span>MOUTH:</span> <span class="blue">{{ art.mouths[selectedMouth].name }}</span>
      </div>
      <div class="attribute">
        <span>NOSE:</span> <span class="blue">{{ art.noses[selectedNose].name }}</span>
      </div>
      <div class="attribute">
        <span>RIGHT EYE:</span> <span class="blue">{{ art.rightEyes[selectedRightEye].name }}</span>
      </div>
      <div class="attribute">
        <span>LEFT EYE:</span> <span class="blue">{{ art.leftEyes[selectedLeftEye].name }}</span>
      </div>
      <div class="attribute">
        <span>RIGHT EAR:</span> <span class="blue">{{ art.rightEars[selectedRightEar].name }}</span>
      </div>
      <div class="attribute">
        <span>LEFT EAR:</span> <span class="blue">{{ art.leftEars[selectedLeftEar].name }}</span>
      </div>
      <div class="rarity">
        <h2>Rarity</h2>
        <div class="attribute">
          <label for="noseRange">NOSE: </label>
          <div class="value">{{ noseRarity }}<sup>%</sup></div>
          <input v-model="noseRarity" type="range" min="0" max="99" value="0" class="slider" id="noseRange">
        </div>
        <div class="attribute">
          <label for="rightEyeRange">RIGHT EYE: </label>
          <div class="value">{{ rightEyeRarity }}<sup>%</sup></div>
          <input v-model="rightEyeRarity" type="range" min="0" max="99" value="0" class="slider" id="rightEyeRange">
        </div>
        <div class="attribute">
          <label for="leftEyeRange">LEFT EYE: </label>
          <div class="value">{{ leftEyeRarity }}<sup>%</sup></div>
          <input v-model="leftEyeRarity" type="range" min="0" max="99" value="0" class="slider" id="leftEyeRange">
        </div>
        <div class="attribute">
          <label for="rightEarRange">RIGHT EAR: </label>
          <div class="value">{{ rightEarRarity }}<sup>%</sup></div>
          <input v-model="rightEarRarity" type="range" min="0" max="99" value="0" class="slider" id="rightEarRange">
        </div>
        <div class="attribute">
          <label for="leftEarRange">LEFT EAR: </label>
          <div class="value">{{ leftEarRarity }}<sup>%</sup></div>
          <input v-model="leftEarRarity" type="range" min="0" max="99" value="0" class="slider" id="leftEarRange">
        </div>
      </div>
    </div>
    <div class="bg"/>
  </div>
</template>

<script>
import loadImages from '@/utils/image-loader'

export default {
  name: 'Visualizer',
  data () {
    return {
      ctx: null,
      art: {
        heads: [
          {
            name: 'head_1',
            index: 0,
            src: require('@/assets/art/heads/head_1.png')
          },
          {
            name: 'head_2',
            index: 0,
            src: require('@/assets/art/heads/head_2.png')
          },
          {
            name: 'head_3',
            index: 0,
            src: require('@/assets/art/heads/head_3.png')
          },
          {
            name: 'head_4',
            index: 0,
            src: require('@/assets/art/heads/head_4.png')
          },
          {
            name: 'head_5',
            index: 0,
            src: require('@/assets/art/heads/head_5.png')
          },
          {
            name: 'head_6',
            index: 0,
            src: require('@/assets/art/heads/head_6.png')
          }
        ],
        mouths: [
          {
            name: 'mouth_1',
            index: 0,
            src: require('@/assets/art/mouths/mouth_1.png')
          },
          {
            name: 'mouth_2',
            index: 0,
            src: require('@/assets/art/mouths/mouth_2.png')
          },
          {
            name: 'mouth_3',
            index: 0,
            src: require('@/assets/art/mouths/mouth_3.png')
          },
          {
            name: 'mouth_4',
            index: 0,
            src: require('@/assets/art/mouths/mouth_4.png')
          },
          {
            name: 'mouth_5',
            index: 0,
            src: require('@/assets/art/mouths/mouth_5.png')
          },
          {
            name: 'mouth_6',
            index: 0,
            src: require('@/assets/art/mouths/mouth_6.png')
          }
        ],
        noses: [
          {
            name: 'nose_1',
            index: 0,
            src: require('@/assets/art/noses/nose_1.png')
          },
          {
            name: 'nose_2',
            index: 0,
            src: require('@/assets/art/noses/nose_2.png')
          },
          {
            name: 'nose_3',
            index: 0,
            src: require('@/assets/art/noses/nose_3.png')
          },
          {
            name: 'nose_4',
            index: 0,
            src: require('@/assets/art/noses/nose_4.png')
          },
          {
            name: 'nose_5',
            index: 0,
            src: require('@/assets/art/noses/nose_5.png')
          },
          {
            name: 'nose_6',
            index: 0,
            src: require('@/assets/art/noses/nose_6.png')
          },
          {
            name: 'nose_7',
            index: 0,
            src: require('@/assets/art/noses/nose_7.png')
          }
        ],
        rightEyes: [
          {
            name: 'right_eye_1',
            index: 0,
            src: require('@/assets/art/right-eyes/right_eye_1.png')
          },
          {
            name: 'right_eye_2',
            index: 0,
            src: require('@/assets/art/right-eyes/right_eye_2.png')
          },
          {
            name: 'right_eye_3',
            index: 0,
            src: require('@/assets/art/right-eyes/right_eye_3.png')
          }
        ],
        leftEyes: [
          {
            name: 'left_eye_1',
            index: 0,
            src: require('@/assets/art/left-eyes/left_eye_1.png')
          },
          {
            name: 'left_eye_2',
            index: 0,
            src: require('@/assets/art/left-eyes/left_eye_2.png')
          },
          {
            name: 'left_eye_3',
            index: 0,
            src: require('@/assets/art/left-eyes/left_eye_3.png')
          },
          {
            name: 'left_eye_4',
            index: 0,
            src: require('@/assets/art/left-eyes/left_eye_4.png')
          },
          {
            name: 'left_eye_5',
            index: 0,
            src: require('@/assets/art/left-eyes/left_eye_5.png')
          }
        ],
        rightEars: [
          {
            name: 'right_ear_1',
            index: 0,
            src: require('@/assets/art/right-ears/right_ear_1.png')
          },
          {
            name: 'right_ear_2',
            index: 0,
            src: require('@/assets/art/right-ears/right_ear_2.png')
          },
          {
            name: 'right_ear_3',
            index: 0,
            src: require('@/assets/art/right-ears/right_ear_3.png')
          },
          {
            name: 'right_ear_4',
            index: 0,
            src: require('@/assets/art/right-ears/right_ear_4.png')
          }
        ],
        leftEars: [
          {
            name: 'left_ear_1',
            index: 0,
            src: require('@/assets/art/left-ears/left_ear_1.png')
          },
          {
            name: 'left_ear_2',
            index: 0,
            src: require('@/assets/art/left-ears/left_ear_2.png')
          },
          {
            name: 'left_ear_3',
            index: 0,
            src: require('@/assets/art/left-ears/left_ear_3.png')
          }
        ],
        markers: [
          {
            name: 'marker_1',
            index: 0,
            src: require('@/assets/art/markers/marker_1.png')
          }
        ]
      },
      selectedHead: 0,
      selectedMouth: 0,
      selectedNose: 0,
      selectedRightEye: 0,
      selectedLeftEye: 0,
      selectedRightEar: 0,
      selectedLeftEar: 0,
      selectedMarker: 0,
      headsLoaded: false,
      mouthsLoaded: false,
      nosesLoaded: false,
      rightEyesLoaded: false,
      leftEyesLoaded: false,
      rightEarsLoaded: false,
      leftEarsLoaded: false,
      markersLoaded: false,
      noseRarity: 0,
      rightEyeRarity: 0,
      leftEyeRarity: 0,
      rightEarRarity: 0,
      leftEarRarity: 0
    }
  },
  computed: {
    isLoaded () {
      return this.headsLoaded &&
      this.mouthsLoaded &&
      this.nosesLoaded &&
      this.rightEyesLoaded &&
      this.rightEarsLoaded &&
      this.leftEarsLoaded &&
      this.leftEyesLoaded &&
      this.markersLoaded
    }
  },
  mounted () {
    loadImages(this.art.heads).then(images => {
      this.headsLoaded = true
    })
    loadImages(this.art.mouths).then(images => {
      this.mouthsLoaded = true
    })
    loadImages(this.art.noses).then(images => {
      this.nosesLoaded = true
    })
    loadImages(this.art.rightEyes).then(images => {
      this.rightEyesLoaded = true
    })
    loadImages(this.art.leftEyes).then(images => {
      this.leftEyesLoaded = true
    })
    loadImages(this.art.rightEars).then(images => {
      this.rightEarsLoaded = true
    })
    loadImages(this.art.leftEars).then(images => {
      this.leftEarsLoaded = true
    })
    loadImages(this.art.markers).then(images => {
      this.markersLoaded = true
    })
    this.ctx = this.$refs.canvas.getContext('2d')
    this.$refs.canvas.width = 500
    this.$refs.canvas.height = 500
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(0, 0, 500, 500)
  },
  methods: {
    randomize () {
      this.selectedHead = Math.floor(Math.random() * this.art.heads.length)
      this.selectedMouth = Math.floor(Math.random() * this.art.mouths.length)
      this.selectedNose = Math.floor(Math.random() * this.art.noses.length)
      this.selectedRightEye = Math.floor(Math.random() * this.art.rightEyes.length)
      this.selectedLeftEye = Math.floor(Math.random() * this.art.leftEyes.length)
      this.selectedRightEar = Math.floor(Math.random() * this.art.rightEars.length)
      this.selectedLeftEar = Math.floor(Math.random() * this.art.leftEars.length)
      this.drawImage()
    },
    drawImage () {
      this.ctx.clearRect(0, 0, 500, 500)
      this.ctx.fillStyle = 'white'
      this.ctx.fillRect(0, 0, 500, 500)
      this.ctx.drawImage(this.art.heads[this.selectedHead].img, 0, 0)
      if (this.randomPercent() > this.rightEarRarity) {
        this.ctx.drawImage(this.art.rightEars[this.selectedRightEar].img, 0, 0)
      }
      if (this.randomPercent() > this.leftEarRarity) {
        this.ctx.drawImage(this.art.leftEars[this.selectedLeftEar].img, 0, 0)
      }
      if (this.randomPercent() > this.noseRarity) {
        this.ctx.drawImage(this.art.noses[this.selectedNose].img, 0, 0)
      }
      this.ctx.drawImage(this.art.mouths[this.selectedMouth].img, 0, 0)
      if (this.randomPercent() > this.rightEyeRarity) {
        this.ctx.drawImage(this.art.rightEyes[this.selectedRightEye].img, 0, 0)
      }
      if (this.randomPercent() > this.leftEyeRarity) {
        this.ctx.drawImage(this.art.leftEyes[this.selectedLeftEye].img, 0, 0)
      }
    },
    randomPercent () {
      return Math.floor(Math.random() * 100)
    }
  }
}
</script>

<style lang="scss" scoped>
.visualizer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  position: relative;
  z-index: 2;
  padding: 100px;
}

.blue {
  color: #32ccee;
}

.art {
  width: 500px;
  margin-right: 100px;
}

.bg {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-image: url('../assets/home-bg.jpg');
  background-size: cover;
  opacity: 0.15;
}

#nft-canvas {
  width: 500px;
  height: 500px;
  box-shadow: 3px 3px 1px 1px rgba(0,0,0,0.75);
  position: relative;
  z-index: 2;
}

.btn-randomize {
  position: relative;
  z-index: 2;
  width: 100%;
  margin-top: 25px;
  padding: 14px 0;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #656363;
  border-radius: 3px;
  color: white;
  font-family: 'Anton', sans-serif;
  font-size: 20px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #f80;
    border: 1px solid black;
  }

  &:active {
    transform: translateY(2px);
    transition: none;
  }
}

h2 {
  font-size: 72px;
  margin: 0;
  padding: 0;
}

.info {
  width: 500px;
  position: relative;
  z-index: 2;
}

.attribute {
  font-family: 'Anton', sans-serif;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
}

.loading {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 50;
  background: rgba(0,0,0,0.75);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 56px;
}

.rarity {
  margin-top: 30px;
}

.value {
  margin: 0 15px 0 auto;
}

sup {
  font-size: 13px;
}
</style>
