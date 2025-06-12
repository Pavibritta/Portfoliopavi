const checkBtn=document.getElementById('check-btn');
const ispalindrome=(string)=>{
  let reversed="";
  for(let i=string.length-1;i>=0;i--){
   reversed=reversed+string[i]
  }
  if(reversed==string){
    return `${string} is palindrome` 
  }else{
    return `${string} is not a palindrome` 
  }
  }
checkBtn.addEventListener('click',()=>{
  const textInput=document.getElementById('text-input').value.trim();
  const resultElement=document.getElementById('result');
  if(!textInput){
    alert("Please input a value")
  }else{
    const report=ispalindrome(textInput);
    resultElement.innerHTML=report
  }
  

})



