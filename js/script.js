// Question 1

const cat = {
    complain: function () {
        console.log('Meow!');
    }
};

cat.complain();

// ************


// Question 2

const heading = document.querySelector("h3");
console.log(heading);

heading.innerHTML = "Updated heading";

// ************


// Question 3

heading.style.fontSize = "2em";
console.log(heading);

// ************


// Question 4

heading.classList.add("subheading");
console.log(heading);

// ************


// Question 5

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
    console.log(paragraphs[i]);
}

// ************


// Question 6

const resultsContainer = document.querySelector(".results");
console.log(resultsContainer);

resultsContainer.innerHTML = `
<p style="background: yellow">New paragraph</p>
`;

console.log(resultsContainer.innerHTML);

// ************


// Question 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catObjects(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

catObjects(cats);

// ************


// Question 8

let html = "";

function createCats(cats) {
    for (let i = 0; i < cats.length; i++) {

        let noAge = "";

        if (cats[i].age) {
            noAge = cats[i].age;
        } else {
            noAge = "Age unknown";
        }

        html = html + `
        <div>
        <h5> Name: ${cats[i].name}</h5>
        <p> Age: ${noAge}</p>
        </div>
        `;
    }

    const finalHtml = html;
    return finalHtml;
}

const newHtml = createCats(cats);
console.log(newHtml);

const catsContainer = document.querySelector(".cat-container");
console.log(catsContainer);

catsContainer.innerHTML = newHtml;

// ************
