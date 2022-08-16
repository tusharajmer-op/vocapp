const show = document.querySelector('.container2')
const btn=document.getElementById('btn');
const meaning= document.getElementById('mean')
const sent1= document.getElementById('sent1')
const sent2= document.getElementById('sent2')
const sent3= document.getElementById('sent3')
const sent4= document.getElementById('sent4')
const sent5= document.getElementById('sent5')
const word= document.querySelector('#word')
show.style.display='none';
const url = 'http://localhost:3000/find'
const xhr = new XMLHttpRequest();
var file;
const upload=(method,url,body)=>{
    xhr.open(method,url);
    xhr.responseType='json';
    xhr.setRequestHeader('content-type','application/json');
    xhr.send(JSON.stringify(body))
    xhr.onreadystatechange=()=>{
        if(xhr.readyState===XMLHttpRequest.DONE){
            file=xhr.response
            console.log(file.word);
            if(file.error==="500"){
                alert('no such word')
                show.style.display='none';

            }
            else{
                meaning.value=file.meaning;
                sent1.value=file.sent1;
                sent2.value=file.sent2
                sent3.value=file.sent3
                sent4.value=file.sent4
                sent5.value=file.sent5
            }
            

        }
    }
    
}

btn.addEventListener('click',(e)=>{
// e.preventDefault();

if(word.value===""){
    show.style.display='none'
}
else{
    show.style.display='flex';
    upload('post',url,{
        "word":`${word.value}`});
    }
})



