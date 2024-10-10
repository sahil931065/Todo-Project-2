const inputBox = document.getElementById("taskInput");
const cantainerList = document.getElementById("cantainer-list");


let addTask = () => {
    if(inputBox.value === ""){
        alert("Please Enter Something");
    }
    else{
        let LI = document.createElement("li");
        LI.innerHTML = inputBox.value;
        cantainerList.appendChild(LI);

        let span = document.createElement("span")
        span.innerHTML = "X";
        LI.appendChild(span)

    }
    sortData();
    inputBox.value = "";
}

cantainerList.addEventListener("click" , function(e){
    if (e.target.tagName === "SPAN"){
        e.target.parentNode.remove();
        sortData();
    }
    else if
    (e.target.tagName ===  "LI")
    {
        e.target.classList.toggle("checked");
        sortData();
    };
})

let sortData = () =>{
    localStorage.setItem("data",cantainerList.innerHTML);
}


let saveData = () => {
    cantainerList.innerHTML=localStorage.getItem("data")
}

saveData()