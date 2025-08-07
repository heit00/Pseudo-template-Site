var DARK_THEME;
document.addEventListener('DOMContentLoaded', () => {
    const arrowLeft = document.getElementById('arrowLeft');
    const arrowRight = document.getElementById('arrowRight');
    const themeButton = document.getElementById('li-button');
    const html = document.querySelector('html');
    let counter = [1,2,3,4,5];

    DARK_THEME = localStorage.getItem('theme') == 'true';
    if(DARK_THEME)
        html.classList.toggle('light');

    themeButton.addEventListener('click', () =>{
        html.classList.toggle('light');
        DARK_THEME = !DARK_THEME;
        localStorage.setItem('theme',DARK_THEME);
    })

    if(!arrowLeft || !arrowRight)
        console.log('Algum dos HTMLelment não estão definidos.');

    arrowLeft.addEventListener('click', () => {
        const arraySliders = document.querySelectorAll('div[class^="slider"]');   
        
        for(let i = 0; i < 5; i++){
            if(counter[i] == 1){
                counter[i] = 5;
                continue;
            } 
            counter[i]--;
        }

        arraySliders.forEach((el, idx) => {
            el.className = `slider${counter[idx]}`;
        })
    })

    arrowRight.addEventListener('click', () => {
        const arraySliders = document.querySelectorAll('div[class^="slider"]');    

        for(let i = 0; i < 5; i++){
            if(counter[i] == 5){
                counter[i] = 1;
                continue;
            } 
            counter[i]++;
        }

        arraySliders.forEach((el,idx) => {
            el.className = `slider${counter[idx]}`;
        })
    })
});


