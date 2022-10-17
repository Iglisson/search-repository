const btnSearch = document.querySelector("#search");
const iptUser = document.querySelector("#username");
const repositories = document.querySelector("main");

const year = document.querySelector("#current-year");
year.textContent = new Date().getFullYear();

btnSearch.addEventListener("click", () => getApiGitHub())
iptUser.addEventListener("keypress", ({ keyCode }) => {
    if (keyCode === 13) getApiGitHub();
});

function getApiGitHub() {

    const queryString = "q=" + encodeURIComponent("user:" + iptUser.value);
    fetch("https://api.github.com/search/repositories?" + queryString)
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            var data = await res.json();

            data.items.map(item => {

                writeRepositories(item.name, item.html_url, item.description)

            })
        });
}

function writeRepositories(title, github, description) {
    const card = document.createElement("div");
    const repository = document.createElement("h3");
    const desc = document.createElement("p");
    const links = document.createElement("div")
    const linkGithub = document.createElement("a");
    const urlTestOnline = document.createElement("a");

    card.classList = "card";

    desc.textContent = description;

    repository.textContent = title.replace(/-/g, " ");

    linkGithub.textContent = "Github";
    linkGithub.href = github;

    urlTestOnline.textContent = "Teste aqui";
    urlTestOnline.href = "https://iglisson.github.io/" + title;
    urlTestOnline.target = "_blank";

    links.classList = "links";
    links.appendChild(linkGithub);
    links.appendChild(urlTestOnline);

    card.appendChild(repository);
    card.appendChild(desc);
    card.appendChild(links)

    repositories.appendChild(card);
}