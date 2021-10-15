function loadImage (src, i, onLoad) {
  return new Promise((resolve, reject) => {
    if (typeof src === 'string') {
      src = {
        name: 'image' + i,
        src
      }
    }

    const img = new Image()
    img.crossOrigin = 'Anonymous'
    src.img = img

    img.onerror = function () { console.log('Image failed!') }
    img.onload = (event) => {
      if (typeof onLoad === 'function') {
        onLoad(null, img, i)
      }
      resolve(src)
    }
    img.src = src.src.replace(/%2C/g, ',')
  })
}

function loadImages (images, onLoad) {
  return Promise.all(
    images.map((src, i) => {
      return loadImage(src, i, onLoad)
    })
  )
}

export default function ImageLoader (images, onLoad) {
  return new Promise((resolve, reject) => {
    loadImages(images, onLoad).then(loadedImages => {
      const r = {}
      loadedImages.forEach(curImage => {
        r[curImage.name] = {
          img: curImage.img,
          src: curImage.src,
          index: curImage.index
        }
      })

      resolve(r)
    })
  })
}
