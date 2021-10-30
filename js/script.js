const searchButton = document.querySelector('.searchButton')
const searchValue = document.querySelector('.searchTerm')
const mainInfoDiv = document.querySelector('.main-info-div');
const maintext = document.querySelector('#main_title');
searchButton.addEventListener('click', () => {
    mainInfoDiv.style.display = 'block'
    maintext.innerHTML = searchValue.value
    searchValue.value = ''
})