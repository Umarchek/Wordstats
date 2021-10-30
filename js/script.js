const searchButton = document.querySelector('.searchButton')
const searchValue = document.querySelector('.searchTerm')
const mainInfoDiv = document.querySelector('.main-info-div');
const maintext = document.querySelector('#main_title');
const maintitle_discription = document.querySelector('#main_title_discription');
searchButton.addEventListener('click', () => {
    mainInfoDiv.style.display = 'block'
    maintext.innerHTML = searchValue.value
    const randomNumber = Math.floor(Math.random() * 2000)
    maintitle_discription.innerHTML = randomNumber
    searchValue.value = ''
})