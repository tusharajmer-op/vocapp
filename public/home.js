const btn = document.getElementById('btn');
let word = document.getElementById('word');
let meaning=document.getElementById('mean');
let sent1=document.getElementById('sent1');
let sent2=document.getElementById('sent2');
let sent3=document.getElementById('sent3');
let sent4=document.getElementById('sent4');
let sent5=document.getElementById('sent5');


const xhr = new XMLHttpRequest();
const url='http://localhost:3000/add';

function upload(method, url, body)
{
    if(word.value!=""&&meaning.value!=""&&sent1.value!=""&&sent2.value!=""&&sent3.value!="")
     {   
        alert('data stored')

        xhr.open(method, url);
        xhr.responseType='json';
        xhr.setRequestHeader('Content-Type','application/json')
        // let ball = json.toString(body)
        console.log(JSON.stringify(body))
        xhr.send(JSON.stringify(body))
     
    }
    else{
        alert('please fill all fields');
    }
}


btn.addEventListener('click',(e)=>{
    
    e.preventDefault();
    upload('post', url,{
        "word": `${word.value}`,
        'meaning':`${meaning.value}`,
        'sentance1':`${sent1.value}`,
        'sentance2':`${sent2.value}`,
        'sentance3':`${sent3.value}`,
        'sentance4':`${sent4.value}`,
        'sentance5':`${sent5.value}`,
    }
    
    )
    console.log('uploaded')
    
})


