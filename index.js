const toggleBtn = document.getElementsByClassName('n-toggle')[0]
const navbarLinks = document.getElementsByClassName('n-links')[0]

toggleBtn.addEventListener('click', ()=> {
	navbarLinks.classList.toggle('active')
});