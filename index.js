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
        display.innerHTML = text[currentIndex]
    }
    input.onchange = () => {
        textfile = input.files[0]
        textfile.text()
            .then(s => {text = s})
            .then(() => {updateDisplay()})
            .then(() => {console.log(text)})
    }
    next.onclick = () =>
    {
        if (currentIndex == text.length)
        {

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

        }
        else {
            currentIndex--
            updateDisplay()
        }
    }
}

//previous = document.getElementById("left")
//next = document.getElementById("right")




