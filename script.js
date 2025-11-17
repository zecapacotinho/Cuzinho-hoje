function noDenial(){
    const PositiveButton = document.getElementById('sim')
    const NegativeButton = document.getElementById('nao')

    const widthWindow = window.innerWidth
    const heithWindow  = window.innerHeight

    const maxX = widthWindow - NegativeButton.offsetWidth
    const maxY = heithWindow - NegativeButton.offsetHeight

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)

    NegativeButton.style.left = randomX + 'px'
    NegativeButton.style.top = randomY + 'px'

    NegativeButton.addEventListener('click', () => {
        window.alert('Você apertou no botão! Infelizmente não tera cuzinho hoje... 😢')
    })

    PositiveButton.addEventListener('click', () => {
        window.open("https://i.redd.it/pyhppn3djl1e1.jpeg", "_blank");

    })

}