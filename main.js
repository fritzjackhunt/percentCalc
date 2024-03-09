function calc() {
    //Get the HTML element
    //Using the Value attribute get the value
    //Use the Number attribute to change the type from string to number
    
    const num = document.getElementById("num1")
    const numValue = num.value
    const fig = Number(numValue)

    const num1 = document.getElementById("num2")
    const numValue1 = num1.value
    const fig1 = Number(numValue1)

    //Formula for calculating percents
    //Final Value - Initial Value
    //Dividide the difference by the initial value
    //Then multiply by hundred

    const difference = fig1 - fig
    const divided = difference / fig
    const finalAnswer = divided * 100

    document.getElementById("answer").innerHTML = finalAnswer + "%";
}
