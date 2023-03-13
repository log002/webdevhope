// Todo: Make M+ M- and MC functional
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(string.charAt(0) == '+' || string.charAt(0) == '-' || string.charAt(0) == '*' || string.charAt(0) == '/' || string.charAt(0) == '%'){
      alert("Invalid input");
     }
    if(e.target.innerHTML == '='){
      if(string.charAt(string.length-1) == '+' || string.charAt(string.length-1) == '-' || string.charAt(string.length-1) == '*' || string.charAt(string.length-1) == '/' || string.charAt(string.length-1) == '%'){
        alert("Invalid input");
       }
       
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }else if(e.target.innerHTML == 'back'){
      string = string.slice(0, string.length-1);
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }

    //  let result = string.includes("/0");
     if(string.includes("/0")){
      alert("invalid operation");
      string = string.slice(0, string.length-1);
      document.querySelector('input').value = string;
     } 
     
  })
})