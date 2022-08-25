//set up json server to be running
//on the directory =>json-server --watch db.json

//ADDEVENTLISTENERS to capture form data
const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener("submit",(event)=>{ //event represents the object that will be sent as reply from the server
        event.preventDefault();
        // console.log(event) 
        // event.target.children[1].value //access input from event object
        const input = document.querySelector("input#searchByID")
        console.log(input.value)//access input value directly

        //FETCH data based on user input ,from the server
        fetch(`http://localhost:3000/movies/${input.value}`) //modify url based on the input typed in the html form
        .then(response => response.json()) //returns a PROMISE
        //.then(data => {console.log(data)})  //code to manipulate the DOM
        
        //DISPLAY fetched data on the page
        .then(data => {                              //accessing DOM and storing the 2 elem in JS
            const title = document.querySelector("section#movieDetails h4")
            const summary = document.querySelector("section#movieDetails p")

            //change contents of title and summary based on retrieved data
            title.innerText = data.title;          //object.property
            summary.innerText = data.summary;
        })


    });
  
}

document.addEventListener('DOMContentLoaded', init);