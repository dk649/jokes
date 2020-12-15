window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');


const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokebtn');

    jokeBtn.addEventListener('click', (event) => {
        gererateJoke()
    })


    gererateJoke();


   async function gererateJoke() {

        const config = {

            headers: { 
                Accept: 'application/json',
            },
        }

        const response = await fetch('https://icanhazdadjoke.com', config)

        const data = await response.json()

        jokeEl.innerHTML = data.joke;



    }  // end of function gererateJoke




//     function gererateJoke() {

//         const config =  {
//             headers: {
//                 'Accept': 'application/json'
//             }

//     }

//         fetch('https://icanhazdadjoke.com', config)
//             .then((response) => response.json())
//             .then((data) => {

//                 jokeEl.innerHTML = data.joke;
//             })


// } // end of gererateJoke function

});
