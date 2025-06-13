let conarr=[];
let subButton=document.getElementById('submit');

function valid() {
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let password = document.getElementById('pass').value.trim();
  let num = document.getElementById('num').value.trim();
  let msg=document.getElementsByClassName('demo') 
  let container=document.getElementById('container')
  let box=document.getElementById('box')
  let obj={name:name,Email:email,Password:password}

  if (name === "") {
      msg[0].classList.add('show')
  } else if (email === "") {
    msg[0].classList.remove('show')
    msg[0].classList.add('hide')
    msg[1].classList.add('show')  
  } else if (password === "") {
    msg[1].classList.remove('show')
    msg[1].classList.add('hide')
    msg[2].classList.add('show') 
  } else if (num === "") {
    msg[2].classList.remove('show')
    msg[2].classList.add('hide')
    msg[3].classList.add('show')   
  } else {
    msg[3].classList.remove('show')
    msg[3].classList.add('hide')
    container.classList.add('hide')
    box.classList.add('show')  
  }
    return obj
}


subButton.addEventListener('click',()=>{
  let result=valid();
  
if(result.name!==""&&result.Email!==""&&result.Password!==""){
  conarr.push(result)
  
}
localStorage.setItem("infoObject",JSON.stringify(conarr))
})

setInterval(()=>{
  let time=document.getElementById('time')
  let date=new Date()
  let hours=date.getHours()
  
  if(hours<=12){
    time.innerText="GOOD MORNING!"
  }else{
    time.innerText="GOOD AFTERNOON!"
  }
  // time.innerText=date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds()
},1000)

   

