// Question 1

const cat = {
    complain: function (says) {
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

heading.classList.add("title");
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

// ************


// Question 7

// ************


// Question 8
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

