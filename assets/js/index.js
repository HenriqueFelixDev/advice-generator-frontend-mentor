const adviceIdElement = document.querySelector('[data-target="advice-id"]')
const adviceElement = document.querySelector('.card .card__advice')
const reloadAdviceButton = document.querySelector('.card .card__reload-button')
const cardLoaderElement = document.querySelector('.card .card__loader')
const cardContentElement = document.querySelector('.card .card__content')

loadAdvice()
reloadAdviceButton.onclick = loadAdvice

function loadAdvice() {
    setLoading(true)

    fetchAdviceSlip()
        .then(({ slip }) => {
            adviceIdElement.innerText = slip.id
            adviceElement.innerText = slip.advice
        })
        .finally(() => setLoading(false))
}

function setLoading(isLoading) {
    cardLoaderElement.style.display = isLoading ? 'block' : 'none'
    cardContentElement.style.display = isLoading ? 'none' : 'flex'
}

async function fetchAdviceSlip() {
    const result = await fetch('https://api.adviceslip.com/advice')
    const slipData = await result.json()
    return slipData
}
