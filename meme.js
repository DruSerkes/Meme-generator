//Grab necessary variables 
let url = document.getElementById('url');
let topText = document.getElementById('top-text');
let bottomText = document.getElementById('bottom-text');
let form = document.querySelector('.form');
let memeSection = document.getElementById('meme-section');


//Create memes!!!!!! 
form.addEventListener('submit', e => {
    e.preventDefault();
    //create the meme and give it a background image 
    let memeDiv = document.createElement('div');
    memeDiv.classList.add('memeDiv');
    let meme = document.createElement('img');
    meme.setAttribute("src", `${url.value}`); 
    memeSection.append(memeDiv);
    memeDiv.append(meme);

    //create the top text 
    let top = document.createElement('p');
    top.classList.add('top-text');
    top.innerText = topText.value;
    memeDiv.append(top);
    //create the bottom text 
    let bottom = document.createElement('p');
    bottom.classList.add('bottom-text');
    bottom.innerText = bottomText.value;
    memeDiv.append(bottom);

    //create hidden h2 - 
    let h2 = document.createElement('h2');
    h2.innerText = 'X';
    h2.classList.add('hover-text');
    memeDiv.append(h2);

    //Mouseover stuff for img's
    memeDiv.addEventListener('mouseenter', e => {
        h2.style.display = 'block';
        meme.style.boxShadow = '0px 0px 20px black';
        meme.style.opacity = '0.6';
    })
    memeDiv.addEventListener('mouseleave', e => {
        h2.style.display = 'none';
        meme.style.boxShadow = '';
        meme.style.opacity = '1';
    })

    // clear the form 
    url.value = '';
    topText.value = '';
    bottomText.value = '';
})

//DESTROY MEMES!!!!! 
memeSection.addEventListener('click', e => {
    if (e.target.tagName === 'IMG'|| e.target.tagName === 'H2' || e.target.tagName === 'P'){
        e.target.parentElement.remove();
    }
})



