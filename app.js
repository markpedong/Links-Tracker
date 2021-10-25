const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-El")
let myLeads = []
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

//getting the value of localStorage and converting it into an array of object
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


tabBtn.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        // This is what would add the value from the INPUT ELEMENT to the ARRAY
        myLeads.push(tabs[0].url)

        // Saving the array to the LocalStorage
        localStorage.setItem("myLeads", JSON.stringify(myLeads))

        render(myLeads)

    }) 
})

// kaya ka gumamit ng parameter para magamit kahit anong array ang iinput mo
render = (leads) => {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li><a target = '_blank' href= '#'>" + leads[i] + "</a></li>"
        listItems += `<li>
                            <a target = '_blank' href= '${leads[i]}'> 
                                ${leads[i]} 
                            </a>
                      </li>`

    }
    
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", () => {
    // This is what would add the value from the INPUT ELEMENT to the ARRAY
    myLeads.push(inputEl.value)

    // Empty the array after getting the value
    inputEl.value = ""

    // Saving the array to the LocalStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)

})

deleteBtn.addEventListener('dblclick', () => {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

// This code will save the data the we input even if we refresh the page
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// Template Literals/ Strings
// const recipient = "James"
// const sender = "Mark"

// const email = `Hey ${recipient}! 
// How is it going?
// Cheers ${sender}!`

// console.log(email);

// const credits = 1

// //ternary operator
// console.log((NaN) ? "Let's Play!" : "Sorry! You have no credits!");

// //checking the value if it is true of false
// let trueOrFalse = Boolean("")

// console.log(trueOrFalse);

// welcomeEl = document.querySelector("#welcome-el")

// greetUser = (greeting, name) => {
//     welcomeEl.textContent = `${greeting} ${name}`
// }

// let hi = "Howdy"
// greetUser(hi, "James")


// add = (num1, num2) => {
//     return num1 + num2
// }

// console.log(add(3, 4));


// getFirst = (arr) => { 
//     return arr[0]
// }

// console.log(getFirst([10, 1, 2]))
