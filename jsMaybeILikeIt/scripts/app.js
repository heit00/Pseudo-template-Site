document.addEventListener('DOMContentLoaded',() =>{
    const h1Text = document.querySelector('main > section > .header-titleAlter > h1');
    h1Text.innerText = '';
    const text = "HelloWorld!";

    let i = 0;
    let alternate = false;
    let pause = false;
    const idInterval = setInterval(() =>{
        if(pause)
            return;
        if(!alternate){
            h1Text.innerText += text[i];
            i++;
            if(i === text.length){
                i--;
                alternate = true;
                pause = true;
                setTimeout(() =>{
                    pause = false;
                }, 1500);
            }
        }
        else{
            h1Text.innerText = text.slice(0, i);
            i--;
            if(i === -1){
                i++;
                alternate = false;
                pause = true;
                setTimeout(() =>{
                    pause = false;
                }, 1500);
            }
        }
    },125 );
})