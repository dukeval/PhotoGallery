const photoGallery =[
    {
        "title" : "Basketball",
        "imageLocation" : "images/basketball.jpg",
    },
    {
        "title" : "LeBron",
        "imageLocation" : "images/LeBron.jpg",
    },
    {
        "title" : "Jordan",
        "imageLocation" : "images/Jordan.jpg",
    },
    {
        "title" : "programming",
        "imageLocation" : "images/programming.jpg",
    },
    {
        "title" : "JavaScript",
        "imageLocation" : "images/JavaScript.jpg",
    },
    {
        "title" : "Angular",
        "imageLocation" : "images/Angular.jpg",
    },
    {
        "title" : "Cooking",
        "imageLocation" : "images/Cooking.jpg",
    },
    {
        "title" : "vegetables",
        "imageLocation" : "images/vegetables.jpg",
    },
    {
        "title" : "Meat",
        "imageLocation" : "images/Meat.jpg",
    }
]
let counter =0;
let row;

const galleryElement = photoGallery.map((photo)=>{
    if(row==null || counter%3 ==0)
    {
        row = document.createElement("div");
        row.setAttribute("class","row");
    }

    const col = document.createElement("div");
    col.setAttribute("class", "col-lg-4");

    const link = document.createElement("a");
    link.setAttribute("href", `fullView.html?image=${photo.title}`);
    const image = document.createElement("img");
    image.setAttribute("class", "imageSize");
    image.setAttribute("src", `${photo.imageLocation}`);
    image.setAttribute("alt",photo.title);

    link.appendChild(image);

    if(col!=null){
        col.appendChild(link);
    }

    row.appendChild(col);

    counter+=1;
    return row;
});

window.addEventListener("DOMContentLoaded", (event) =>{
    const homeContainer = document.querySelector('#homeContainer');
    const fullViewcontainer = document.querySelector('#fullViewContainer');

    if(homeContainer !=null)
    {
        galleryElement.forEach((val)=>{
            homeContainer.appendChild(val);
            
        });
    }

    if(fullViewcontainer!=null){
        const urlParams = new URLSearchParams(window.location.search);
        let imageElement = document.createElement("img");
        let titleElement = document.createElement("div");

        imageElement.setAttribute("src",`images/${urlParams.get("image")}.jpg`); 
        
        titleElement.setAttribute("class", "title");
        titleElement.insertAdjacentText('beforeend',urlParams.get("image"));

        fullViewcontainer.appendChild(imageElement);
        fullViewcontainer.appendChild(titleElement);
    }
});