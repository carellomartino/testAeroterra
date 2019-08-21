function submitt(){
    let x = document.getElementById("form-id")
    for (let i = 0; i < x.length ;i++) {
        console.log(x.elements[i].value)
      }
}