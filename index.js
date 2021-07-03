window.onload = () =>
{
    const input = document.getElementById('input')
    const display = document.getElementById("single")
    let currentIndex = 0
    let text = ""
    input.onchange = () => {
        textfile = input.files[0]
        text = FileReaderSync.readAsText(textfile)
        console.log(text)
        updateDisplay()
    }
    const updateDisplay = () =>
    {
        display.innerHTML = text[currentIndex]
    }
    function next()
    {
        if (currentIndex == text.length)
        {

        } else 
        {
            currentIndex++
            updateDisplay()
        }
    }

    function previous()
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




