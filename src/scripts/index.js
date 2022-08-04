async function advice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    return await response.json()
}


function getAdvice(){
    advice().then(adviceData =>{
        let renderAdvice = `${adviceData.slip.id}`
        document.querySelector('.advice-text').innerHTML = renderAdvice
    })
}

document.getElementById('btn-advice').addEventListener('click', () =>{
    getAdvice()
})
