const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        
        if(entry.isIntersecting){
            entry.target.classList.add('show')
            entry.target.classList.add('other');
        }
        else{
            entry.target.classList.remove('show', 'other');
        }
      

    });
})

const hiddenelements=document.querySelectorAll('.hidden')
const anotherelement=document.querySelectorAll('.another')

hiddenelements.forEach((el)=>observer.observe(el));
anotherelement.forEach((el)=>observer.observe(el))

const bgImages = [
    "url('white.png')",
    "url('bgg.png')",
    
    // Add more image URLs as needed
];
let currentImageIndex = 0;

function change(){
    const body = document.body;
    console.log("hello")

    // Update the background image
    body.style.backgroundImage = bgImages[currentImageIndex];


    if (body.style.backgroundImage.includes("white.png")) {
        body.classList.add('white-bg'); // Add white-bg class
    } else {
        body.classList.remove('white-bg'); // Remove white-bg class
    }

    // Increment the image index or reset to 0 if it reaches the end
    
    // Increment the image index or reset to 0 if it reaches the end
    if (currentImageIndex === bgImages.length - 1) {
        currentImageIndex = 0;
    } else {
        currentImageIndex++;
    }
}
const form=document.querySelector('form')
const name=document.getElementById('name')
const email=document.getElementById('email')
const message=document.getElementById('message')

function sendemail(){
    const body=`Name:${name.value}<br>
                Email:${email.value}<br>
                Message:${message.value}<br>;`
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "skuamarakilla@gmail.com",
        Password : "1B17757F1C17324D48CF2554C6FCD3883D54",
        To : 'skuamarakilla@gmail.com',
        From : "skuamarakilla@gmail.com",
        Subject : "This is the subject",
        Body : body
    }).then(
      message => {
        if(message=="OK"){
            Swal.fire({
                title: "Message Sent! 💌",
                text: "Your message has successfully landed in my inbox,I'll be sure to respond as soon as possible.",
                icon: "success"
              });
        }
      }
    );
} 
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    sendemail()
})
