// console.log(`object`)
const allSpans = document.querySelectorAll('.last-part .pagenations span');
const lists = document.querySelectorAll('.art-gallrey .gallery-sections nav ul li');
const images = document.querySelectorAll('img')
allSpans.forEach((e) => {
    e.addEventListener('click', () => {
        allSpans.forEach((el) => {
            el.classList.remove('active')
        })
        e.classList.add('active')
    })
})
lists.forEach(list => {
    list.addEventListener('click', () => {
        lists.forEach(e => {
            e.classList.remove('active')
        })
        list.classList.add('active')
    })
})
for (let i = 0; i < images.length; i++) {
    images[i].setAttribute('loading', 'lazy')
}