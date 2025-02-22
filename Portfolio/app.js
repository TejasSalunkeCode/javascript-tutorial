// const sections=document.querySelectorAll('.section');
// const secBtns=document.querySelectorAll('.controls');
// const secBtn=document.querySelectorAll('.control');
// const allSections=document.querySelector('.main-content');

// function pageTransition(){
//     for(let i=0;i<secBtn.length;i++){
//         secBtn[i].addEventListener('click',()=>{
//             let currentBtn=document.querySelectorAll('.active-btn');
//             currentBtn[0].className=currentBtn[0].className.replace('active-btn','');
//         })
//     }
//     allSections.addEventListener('click',(e)=>{
//         console.log(e.target);
//     })
// }
// pageTransition();





// // function pageTransition(){
// //     for(let i=0;i<secBtn.length;i++){
// //         secBtn[i].addEventListener('click',()=>{
// //             let currentBtn = document.querySelectorAll('.active-btn');
            
// //             // Check if a button has the 'active-btn' class, and remove it
// //             if (currentBtn.length > 0) {
// //                 currentBtn[0].classList.remove('active-btn');
// //             }
            
// //             // Add the 'active-btn' class to the clicked button
// //             secBtn[i].classList.add('active-btn');
// //         });
// //     }
    
// //     allSections.addEventListener('click',(e)=>{
// //         console.log(e.target);
// //     });
// // }





const sections = document.querySelectorAll('.section');  // Select all sections
const secBtns = document.querySelectorAll('.control');  // Select all control buttons
const allSections = document.querySelector('.main-content');  // Main content area

function pageTransition() {
    // Loop through all buttons and add click event listener
    secBtns.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-id');  // Get the target section id from the data-id attribute

            // Remove 'active-btn' class from all buttons
            secBtns.forEach(btn => {
                btn.classList.remove('active-btn');
            });

            // Add 'active-btn' class to the clicked button
            button.classList.add('active-btn');

            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Show the target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Optionally, log clicked elements in the main content area for debugging
    allSections.addEventListener('click', (e) => {
         console.log(e.target);  // Log the element clicked within the main content

        // const id=e.target.dataset.id;
        // if(id){
        //     secBtns.forEach((btn)=>{
        //         btn.classList.remove('active');
        //     })
        //     e.target.classList.add('active')

        //     sections.forEach((section)=>{
        //         section.classList.remove('active')
        //     })
        //     const element=document.getElementById(id);
        //     element.classList.add('active');
        // }

    });
}

// Initialize page transition functionality
pageTransition();
