let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let  passBox = document.getElementById("passBox");
let uppercase = document.getElementById("uppercase");
let   lowercase= document.getElementById("lowercase");
let numbers= document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genbtn = document.getElementById("genbtn");
let copyicon = document.getElementById("copyicon");


 slidervalue.textContent = inputslider.value;// ye hmne upper bhi isliye show kiya ha ki bydefault hamari value user ko show honi hi chahiye..

 //input slider ko ham command de rhe ha ki aisa ho to slidervalue me ye update krna ha..
inputslider.addEventListener('input', ()=> {
    slidervalue.textContent = inputslider.value;
});

genbtn.addEventListener('click',()=>{
    passBox.value = generatepassword();

    

})

let  smallLetter = "abcdefghijklmnopqrstuvwxyz";
let  capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
let  symbol = "!@#$%^&*~";
let  number = "0123456789";

//function to generate password
function generatepassword(){
    let genpassword = "";
    let allchar = "";

     allchar += lowercase.checked ? smallLetter : ""; 
     allchar += uppercase.checked ? capitalLetter : ""; 
     allchar += numbers.checked ? number : ""; 
     allchar += symbols.checked ? symbol : ""; 

    ////  Math.random() -> ye hme 0 or 1 le bich me koi bhi random value genrae kr ke de deta ah

    //// charAT() -> ye inbuilt function hme character genrate krke deta ha length pr
let i = 1;
while(i<=inputslider.value){
     genpassword += allchar.charAt(Math.floor(Math.random() * allchar.length)); 
   i++;
}
return genpassword;
}

//copy icon pr click krne se copy ho jaaye isliye ha ye sab..
 copyicon.addEventListener('click',()=>{
    if(passBox.value != "" || passBox.value.length >= 1){
        navigator.clipboard.writeText(passBox.value);
        copyicon.innerText = "check" //inbuilt function hain 
         copyicon.title = "Copied";  //copy hone ke baad cursor ko icon pr rkhne pr "copied" show hoga.

         setTimeout(()=>{
            copyicon.innerText = "content_copy"; //icon ka name ha index se liya ha
            copyicon.title = ""; // reset krne ke liye ha title ko 
         },2000)
    }
    
 })

 




