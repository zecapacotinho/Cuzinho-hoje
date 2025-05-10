function noDenial(){
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
        window.alert('Parabéns você conseguiu aperta no botão, infelizmente não tera cuzinho hoje... 😢')
    })

}