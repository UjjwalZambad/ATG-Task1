const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modal1 = document.querySelector('.modal1');
const overlay1 = document.querySelector('.overlay1');
const modal2 = document.querySelector('.mobile_CA');
const overlay2 = document.querySelector('.overlay2');
const modal3 = document.querySelector('.mobile_SI');
const overlay3 = document.querySelector('.overlay3');

const openModal =() =>{
    console.log('Modal is open');
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
    modal1.classList.remove("modal1active");
    overlay1.classList.remove("overlay1active");
}

const closeModal =() =>{
    console.log('Modal is closed');
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}

const openModal1 = () =>{
    console.log('Modal1 is open');
    modal1.classList.add("modal1active");
    modal.classList.remove("active");
    overlay1.classList.add("overlay1active");
    overlay.classList.remove("overlayactive");
}

const closeModal1 =() =>{
    console.log('Modal is closed');
    modal1.classList.remove("modal1active");
    overlay1.classList.remove("overlay1active");
}

const openModal2 =() =>{
    console.log('Modal2 is open');
    modal2.classList.add("modal2active");
    overlay2.classList.add("overlay2active");
    modal3.classList.remove("modal3active");
    overlay3.classList.remove("overlay3active");
}

const closeModal2 =() =>{
    console.log('Modal is closed');
    modal2.classList.remove("modal2active");
    overlay2.classList.remove("overlay2active");
}

const openModal3 = () =>{
    console.log('Modal1 is open');
    modal3.classList.add("modal3active");
    modal2.classList.remove("modal2active");
    overlay3.classList.add("overlay3active");
    overlay2.classList.remove("overlay2active");
}

const closeModal3 =() =>{
    console.log('Modal is closed');
    modal3.classList.remove("modal3active");
    overlay3.classList.remove("overlay3active");
}
