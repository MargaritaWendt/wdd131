const input = document.querySelector("#favchap");
const button = document.querySelector("#button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
    if (input.value.trim() !== "") {

        displayList(input.value);

        chaptersArray.push(input.value);

        setChapterList();

        input.value = "";

        input.focus();
    }
});

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    const li = document.createElement("li");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.classList.add('delete');

    li.textContent = item;
    li.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });

    document.querySelector("#list").appendChild(li);
}

function setChapterList() {
    localStorage.setItem('chapterList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("chaptersList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);

    setChapterList();
}