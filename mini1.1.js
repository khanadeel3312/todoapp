const input_box=document.getElementById('input-box');
const list_container=document.getElementById('list_conatiner');

function addlist(){
    if(input_box.value==='')
    {
        alert ('You didnt enter anything')
    }
    else{
        let li=document.createElement('li')
        li.textContent=input_box.value;
        list_container.appendChild(li)
        let span=document.createElement('span')
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    input_box.value='';
    savedata()
}
input_box.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addlist();
    }
});

list_container.addEventListener("click",function(e){
    if(e.target.tagName==='LI'){
    e.target.classList.toggle('checked');
    savedata()}
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        savedata()
    }
},false)
function savedata(){
    localStorage.setItem('data',list_container.innerHTML)
}
function showdata(){
    list_container.innerHTML=localStorage.getItem('data')
}
showdata()

