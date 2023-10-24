//define window scroll event show & hide for sticky header 
window.addEventListener('scroll',()=>{
    const header = document.querySelector('header')
    header.classList.toggle('sticky',window.scrollY > 0)
})

// get the reference of html class & element
let menuBtn = document.querySelector('.menu_btn')
let navigation = document.querySelector('.navigation')
let navigationItems = document.querySelectorAll('.navigation a')
//define Onclick event for show & hide to side bar with close btn 
menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('active')
    navigation.classList.toggle('active')
})
//define Onclick event for remove to side bar with close btn
navigationItems.forEach((navigationItem)=>{
navigationItem.addEventListener('click',()=>{
    menuBtn.classList.remove('active')
    navigation.classList.remove('active')})
})


//get the reference scroll of btn
let scrollBtn = document.querySelector('.scrollToTop_btn')
//define window scroll event for btn to show & hide  
window.addEventListener('scroll',()=>{
    scrollBtn.classList.toggle('active',window.scrollY > 800)
})
//define Onclick event for move screen from bottom to top 
scrollBtn.addEventListener('click',()=>{
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0   
})


//define window scroll event for scree reveal effect
window.addEventListener('scroll',reveal)
function reveal(){
   let reveals = document.querySelectorAll('.reveal')//get the reference of css class
   for(let i = 0; i<reveals.length; i++){
       let windowHeight = window.innerHeight
       let revealTop = reveals[i].getBoundingClientRect().top 
       let revealPoint = 50
       if(revealTop < windowHeight - revealPoint){reveals[i].classList.add('active')}
   }
}

// using smtpjs library link added in index

// get the reference of html element & send btn
const btn = document.querySelector('button')
const inputs = document.querySelector('form')
//define Onclick event for user send message to client. all message receive in my inbox to mailtrap.io website
btn.addEventListener('click',()=>{
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "4739ad93d72f5f",
        Password : "4d084b9536053b",
        To : 'sachin.pavale@gmail.com',
        From : inputs.elements['email'].value,
        Subject : inputs.elements['subject'].value,
        Body : inputs.elements['message'].value + "<br>" + "Regards, "  +inputs.elements['name'].value + "<br>" +" Ph no: " +inputs.elements['phone'].value,
    }).then(
      message => alert("The massage successfully sent")
    )
})
