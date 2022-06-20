window.addEventListener("load", () => {
    var data = [
        [" ", " ", " ", " "],
        [" ", " ", " ", " "],
        [" ", " ", " ", " "],
        [" ", " ", " ", " "]
    ];
   
    let container = document.getElementById("grid");
    for (let i of data) { for (let j of i) {
      let cell = document.createElement("div");
      cell.innerHTML = j;
      cell.className = "cell";
      container.appendChild(cell);
    }}
  });


//function gridDimen (row, column){
    //let horizontal = document.createElement('div')*row; 
    //let veritcal = document.createElement('div')*column

