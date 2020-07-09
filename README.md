# Meme generator 

Project Link: [Meme Generator](https://druserkes.github.io/Meme-generator/)

## What this project was about: 

This was my first assessment for Springboard. 
I had to built a meme generator in which a user can supply a url, optional text for the top and/or bottom of the image and it would spit out a meme for them. The user should also have the ability to delete memes after their creation by clicking them. 
I was responsible for keeping track of and reporting my start and end times. 

## What I did: 

I started with an html form to collect user input, requiring the url and leaving top and bottom text optional. 
On submission, the program stores the user inputs in JavaScript variables, clears the form, creates a div with the image provided in the url, and 2 divs with the text provided in the optional text fields. The div is then appended to the document with the two text divs appended to the image (placed at the top and bottom respectively). 
Each image has an event listener for a click to remove the div from the document. Additionally, I allowed for the addition of multiple memes by having the page height grow to fit the content. 

## What I learned: 

This project got me more comfortable with DOM manipulation, and allowed for further CSS practice (still not an expert but I'm getting better). 
I actually knew exactly how to build this right away - the logic and DOM manipulation were both easy enough for me to code with confidence. 
Of the 5 hours I spent on this project, I probably mucked around with css (positioning, media queries, etc) for 60%+ of the time. 
It was the first time I was able to begin a project with confidence that I could get it done exactly as I had envisioned and in a timely manner. 

## Looking forward: 

I'd like to revisit my global variables (declaring with const rather than let, cleaning up the space where possible), and simplifying any css properties I can. 
I would also like to update the program when I learn how to make it possible to download the generated meme, as it currently needs a screen shot. 
