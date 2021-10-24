const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-El")


let myLeads = []

inputBtn.addEventListener("click", () => {
    // This is what would add the value from the INPUT ELEMENT to the ARRAY
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderleads()
})

renderleads = () =>{
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a target = '_blank' href= '#'>" + myLeads[i] + "</a></li>"
        listItems += `<li>
                            <a target = '_blank' href= '${myLeads[i]}'> 
                                ${myLeads[i]} 
                            </a>
                      </li>`

    }
    
    ulEl.innerHTML = listItems
}


// Template Literals/ Strings
// const recipient = "James"
// const sender = "Mark"

// const email = `Hey ${recipient}! 
// How is it going?
// Cheers ${sender}!`

// console.log(email);