let addbook = document.querySelector(".addbtn")
let submite = document.querySelector(".submite");
let form = document.querySelector(".form-cantaner");
let blankDiv = document.querySelector(".blank-div")
const title = document.getElementById("title");
const titelvalue = title.value
const author = document.getElementById("author")
const bookauthor= author.value
const pages = document.getElementById("pages")
const bookpages= pages.value
let books = [];
let flag = false;

addbook.addEventListener("click", () => {
    console.log("hello")
    if (form.style.display === "block") {
        form.style.display = "none"
    } else {
        form.style.display = "block"
    }
    title.value = "";
    author.value = "";
    pages.value = "";
}
)
submite.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hi")
    blankDiv.style.display = "block";
    form.style.display = "none"
    const book = creatbook(title.value, author.value, pages.value)
    books.push(book)
    // submite.innerHTML = "";
    books.forEach((book) => {
        const div = document.createElement('div');
        div.setAttribute("id","cards")
        const titleP = document.createElement('p');
        const authorP = document.createElement('p');
        const pagesP = document.createElement('p');
        const removebutton = document.createElement("button")
        const readbutton = document.createElement("button")


        titleP.textContent = book.title;
        div.appendChild(titleP)
        blankDiv.appendChild(div)
        console.log("hlw")

        authorP.textContent = book.author;
        div.appendChild(authorP)
        blankDiv.appendChild(div)
        console.log("hii")

        pagesP.textContent = book.pages;
        div.appendChild(pagesP)
        blankDiv.appendChild(div)
        console.log("hie")

        readbutton.textContent = "read"
        blankDiv.appendChild(readbutton)

        removebutton.textContent = "Remove"
        blankDiv.appendChild(removebutton)

        readbutton.addEventListener("click", () => {
            console.log("hiii")
            if (readbutton.style.backgroundColor === "red") {
                readbutton.textContent = "read"
                readbutton.style.backgroundColor = "green"

            } else {
                readbutton.style.backgroundColor = "red"
                readbutton.textContent = "not read"
            }
        })
        removebutton.addEventListener("click", (e) => {
            console.log("sweet")
            blankDiv.style.display = "none"

        })
    })
})
function creatbook(title, author, pages) {
    return {
        title,
        author,
        pages
    }
}
