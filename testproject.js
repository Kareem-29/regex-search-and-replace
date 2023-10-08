function replace(){
    let searchText = document.getElementById("searchword").value
    let replaceText = document.getElementById("replaceWord").value
    let text = document.getElementById("textarea")



    if(text.value.trim() != ""){
    let reg = new RegExp(searchText, 'gi')
    text.value= text.value.replace(reg, replaceText)
    }else{
        alert("Textarea is empty! Please enter some text before performing the replace operation.")
    }
 
}

