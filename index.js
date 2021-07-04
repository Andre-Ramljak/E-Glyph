window.onload = () =>
{
    const input = document.getElementById("input")
    const display = document.getElementById("single")
    const previous = document.getElementById("left")
    const next = document.getElementById("right")
    let currentIndex = 0
    let text = ""
    

    const updateDisplay = () =>
    {
        if (!text) {return}
        display.innerHTML = text[currentIndex]
    }

    fetch('https://raw.githubusercontent.com/Andre-Ramljak/E-Glyph/master/Frankenstein.txt')
        .then(response => response.text())
        .then((data) => {
            text = data
            updateDisplay()
        })

    input.onchange = () => {
        textfile = input.files[0]
        textfile.text()
            .then(s => {text = s})
            .then(() => {updateDisplay()})
            .then(() => {console.log(text)})
    }
    next.onclick = () =>
    {
        if (currentIndex + 1 == text.length)
        {
            updateDisplay()
        } else 
        {
            currentIndex++
            updateDisplay()
        }
    }
    previous.onclick = () =>
    {
        if (currentIndex == 0)
        {
            updateDisplay()
        }
        else {
            currentIndex--
            updateDisplay()
        }
    }
}

//previous = document.getElementById("left")
//next = document.getElementById("right")




