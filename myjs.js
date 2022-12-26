const txtlink = document.getElementById('linkedin')
const txttwit = document.getElementById('Twitter')
const txtinsta = document.getElementById('Instagram')
const txtfb = document.getElementById('Fb')
const txtconnect = document.getElementById('connect')


function link() {
    document.location = 'https://www.linkedin.com/in/achira-weerasuriya-658891256/'
    
}
txtlink.addEventListener('click',link)
function twit() {
    document.location = 'https://twitter.com/AchiraWeer66'
    
}
txttwit.addEventListener('click',twit)

function insta() {
    document.location = 'https://www.instagram.com/achcha__/?next=%2F'
    
}
txtinsta.addEventListener('click',insta)
function fb() {
    document.location = 'https://www.facebook.com/acce.ventura.9465/'
    
}
txtfb.addEventListener('click',fb)

const text = 'Connect with me via...';
let index = 0;
setInterval(writeText,120);
function writeText() {
    txtconnect.innerText = text.slice(0,index);
    index++;

    
}