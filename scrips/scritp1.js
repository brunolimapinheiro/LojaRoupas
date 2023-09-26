const logo = document.querySelectorAll(' .logoP ');
console.log(logo);


logo.forEach(item =>{
    setInterval(()=>{
        item.style.transform='translateY(0)';
        item.style.opacity =1;
    } ,10 );
})
