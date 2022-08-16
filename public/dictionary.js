

const btn = document.getElementById('btn');
const word = document.getElementById('word')
const xhr = new XMLHttpRequest();
const cont = document.querySelector(".container2")
const mean=document.getElementById("mean");

btn.addEventListener('click',(e)=>{
   
   e.preventDefault();
    let wd=word.value 
    let url =  `https://api.dictionaryapi.dev/api/v2/entries/en/${wd}`
    // console.log(url)
    upload('get',url);

})
btn.key
 const upload=async(method,ur)=>{
   const response = await fetch(ur);
   const data = await response.json();
   console.log(data);
   
   if(data)
   {  cont.style.display="flex";
      mean.innerHTML=data[0].meanings[0].definitions[0].definition;
   }
   
}