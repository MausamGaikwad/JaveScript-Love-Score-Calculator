document.querySelector("#button").addEventListener("click", function()
{
    var firstname=document.querySelector("#firstname").value;
    var secondname=document.querySelector("#secondname").value;

    // Check if either of the input fields is blank
    if (firstname.trim() === '' || secondname.trim() === '') {
        alert("Please enter both names before calculating the love score.");
        return;
    }

    var lovescore=Math.floor(Math.random() * 100);
    var result=("Your Love Score Is "+lovescore);
    document.querySelector("#result").innerHTML = result;

    if (lovescore >= 75 && lovescore <= 100) {
        alert("Congratulations! You are a true lover!");
    } else {
        alert("Keep spreading the love!");
    }
});