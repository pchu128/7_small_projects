let dogImg = document.querySelector('.dogImg')

axios.get('https://dog.ceo/api/breeds/image/random')
  .then(function (response) {
  dogImg.src = response.data.message
  })


//點擊圖片時自動更新狗狗照片
dogImg.addEventListener('click', function(event) {
  if (event.target.matches('.dogImg')) {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
    dogImg.src = response.data.message
    })
  }
})