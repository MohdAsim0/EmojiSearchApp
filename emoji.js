const resultsDiv = document.querySelector(".results");
const btn = document.querySelector("button");

window.addEventListener("load", () => {
  createList(emojiList);
});

function createList(inputList) {
  inputList.forEach((emoji) => {
    const parent = document.createElement("div");
    parent.classList.add("parent");

    //for emoji
    const em = document.createElement("span");
    em.classList.add("emoji");
    em.innerText = emoji.emoji;
    parent.append(em);

    const alias = document.createElement("span");
    alias.classList.add("alias");
    const newAlias = emoji.aliases.map((alias) => alias.replaceAll("_", " "));
    alias.innerText = newAlias.join();
    parent.append(alias);

    const desc = document.createElement("span");
    desc.classList.add("desc");
    desc.innerText = emoji.description;
    parent.append(desc);

    resultsDiv.append(parent);
  });
}

btn.addEventListener("click", filterEmojis);
const input = document.querySelector("input");

function filterEmojis(e) {
  e.preventDefault();

  const keyword = input.value;

  const filteredData = emojiList.filter((emoji) => {
    if (emoji.description.includes(keyword)) return emoji;
    else if (emoji.category.includes(keyword)) return emoji;
    else if (emoji.aliases.includes(keyword)) return emoji;
    else if (emoji.tags.includes(keyword)) return emoji;
  });

  //resetting previous data in the div
  resultsDiv.innerText = "";
  createList(filteredData);
  input.value="";
}
