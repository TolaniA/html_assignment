console.log(document.body.parentNode);
const children = document.body.childNodes;
//console.log(children)

function listDomElements () {
    const children = document.body.childNodes;
    console.log (children);
    for(let i = 0; i<children.length; i++ ) {
        console.log(children[i])

    }
    }
    
    //const description = document.getElementById("description");//

    const description = document.querySelector("#description") //query selector is used to select all elements, # used for id//

    //const description = document.querySelector(".description") //used for class//

    console.log (description.innerHTML);

    //innerHTML will get you all the information within the element, thus all the info in the p tag:  codher <strong>amazing</strong>//

    //const birmingham = {
        //name: "Birmingham",
        //country: "United Kingdom",
        //population: 1141816,
        //landmarks: [
            //"Birmingham Museum and Art Gallery",
            //"Cadbury World",
            //"National Sea Life Centre",
            //"Library of Birmingham"
       //],
    
    //};

    //function displayPopulation() {
        //const paragraph = document.createElement('p'); //// <p></p>
       // const content = document.createTextNode('population: ' + birmingham.population );///1141816
        //paragraph.appendChild(content);///<p>1141816</p>
       // document.body.appendChild(paragraph);// <boody><p>1141816</p></body>
    //}

    //const button = document.createElement('button');// <button></button>
   //const textButton = document.createTextNode('Show Population');// Show Population
    //button.appendChild(textButton); // <button>Show Population</button> 
    //button.onclick = displayPopulation;///<button onClick = "displayPopulation()">Show Population</button> 
    //document.body.appendChild(button);/// <body><button onClick = "displayPopulation()">Show Population</button></body>


    /////////
    //let fruits = ["mango", "orange", "watermelon", "grape", "lemon"];

    //function createListOfFruits (fruits) {
       // const listContainer = document.querySelector("#list-container");
       // const title = document.createElement('h2');
       // const titleText = document.createTextNode('This is the list of fruits');
      //  const unOrderedList = document.createElement('ul');
      //  fruits.map((fruit)=>{
         //   const item = document.createElement('li');
         //  item.textContent = fruit;
         //  unOrderedList.appendChild(item);
    
       // })

       // title.appendChild(titleText);
      //  listContainer.appendChild(title);
      //  listContainer.appendChild(unOrderedList); 
//}

//createListOfFruits(fruits);


//console.log(document.body.parentNode);
// const children = document.body.childNodes;
// //console.log(children);



// function listDomElements() {
//     const children = document.body.childNodes;
//  console.log(children);
// for(let i = 0; i<children.length; i++ ) {
//     console.log(children[i])

// }
// }
// const description = document.querySelector("#description");

// console.log(description.innerHTML);



// const birmingham = {
//     name: "Birmingham",
//     country: "United Kingdom",
//     population: 1141816,
//     landmarks: [
//         "Birmingham Museum and Art Gallery",
//         "Cadbury World",
//         "National Sea Life Centre",
//         "Library of Birmingham"
//     ],

// };

// function displayPopulation() {
//     const paragraph = document.createElement('p'); //// <p></p>
//     const content = document.createTextNode('population: ' + birmingham.population );///1141816
//     paragraph.appendChild(content);///<p>1141816</p>
//     document.body.appendChild(paragraph);// <boody><p>1141816</p></body>
// }

// const button = document.createElement('button');// <button></button>
// const textButton = document.createTextNode('Show Population');// Show Population
// button.appendChild(textButton); // <button>Show Population</button> 
// button.onclick = displayPopulation;///<button onClick = "displayPopulation()">Show Population</button> 
// document.body.appendChild(button);/// <body><button onClick = "displayPopulation()">Show Population</button></body>



///////////////
let fruits = ["mango", "orange", "Watermelon", "grape", "lemon"];

function crealeListOfFruits(fruits) {
   
    const listContainer = document.querySelector("#list-container");
    const title = document.createElement('h2');
    const titleText = document.createTextNode('This is the list of fruits');
    const unOrderedList = document.createElement('ul');
    fruits.map((fruit)=>{
        const item = document.createElement('li');
       item.textContent = fruit;
       unOrderedList.appendChild(item);

    })
    title.appendChild(titleText);
    listContainer.appendChild(title);
    listContainer.appendChild(unOrderedList); 
}

crealeListOfFruits(fruits);
