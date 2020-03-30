(function (){

// Define objects
let friendList = document.querySelector('.friendList')
const server = 'https://lighthouse-user-api.herokuapp.com'
const index = server + '/api/v1/users/'

// Connect to API to get front page's data
axios.get(index)
  .then((response) => {
    let user = response.data.results
    user.forEach(element => {
        friendList.innerHTML += `
          <div class="user" data-id="${element.id}">
            <img src="${element.avatar}" data-toggle="modal" data-target="#profile-modal">
            <h6>${element.name}</h6>
          </div>
        `
    })
  })
  
// Add event listener on images
friendList.addEventListener('click', (event) => {
    showProfile(event.target.parentElement.dataset.id)
})
  
// Modal
function showProfile (id) {
  // get element
  const profileImage = document.getElementById('profile-image')
  const profileName = document.getElementById('profile-name')
  const profileBirthday = document.getElementById('profile-birthday')
  const profileCountry = document.getElementById('profile-country')
  const profileEmail = document.getElementById('profile-email')
  // Define API url
  const url = index + id
  // Send request to API
  axios.get(url)
    .then(response => {
      console.log(response)
      let profile = response.data
      // insert content
      profileName.innerHTML = `<i class="fas fa-user"></i> ${profile.name} ${profile.surname}`
      profileImage.innerHTML = `<img id="modal-img" src="${profile.avatar}" alt="">`
      profileCountry.innerHTML = `<i class="fas fa-globe"></i>  ${profile.region}`
      profileBirthday.innerHTML = `<i class="fas fa-birthday-cake"></i> ${profile.birthday}`
      profileEmail.innerHTML = `<i class="fas fa-envelope"></i> ${profile.email}`
  })
}
  
})()