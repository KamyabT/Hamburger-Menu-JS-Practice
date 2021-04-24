


const hamBtn = document.querySelector('.nav-toggle');
const menuClassList = document.querySelector('.links')


//simple design

// hamBtn.addEventListener('click', function(){
//     if(menuClassList.classList.contains('show-links')) {
//         menuClassList.classList.remove('show-links')   
//     } else {
//         menuClassList.classList.add('show-links')
//     }
// })



//toggle design 

hamBtn.addEventListener('click', function(){
    menuClassList.classList.toggle('show-links')
})