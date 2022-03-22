

var count;

if(localStorage.getItem('countnum')==null)
{
    count=0
}
else
{
    count=localStorage.getItem('countnum')
}

document.querySelector('h3').innerText=count

document.querySelector('#likes').addEventListener('click',likefun)
function likefun(){
    count++
    localStorage.setItem('countnum',count)
    document.querySelector('h3').innerText=count
    
}

document.querySelector('#dislikes').addEventListener('click',dislikefun)
function dislikefun(){
    count--
    localStorage.setItem('countnum',count)
    document.querySelector('h3').innerText=count

}

