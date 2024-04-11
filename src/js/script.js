window.addEventListener ("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('scrolling',window.scrollY > 0)
})