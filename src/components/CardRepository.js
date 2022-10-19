export default function CardRepository(title, description, has_pages, { login }) {
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
    linkGithub.href = "https://github.com/"+login;

    urlTestOnline.textContent = "Teste aqui";
    urlTestOnline.href = `https://${login}.github.io/${title}`;
    urlTestOnline.target = "_blank";

    links.classList = "links";
    if (has_pages) links.appendChild(urlTestOnline);
    links.appendChild(linkGithub);


    card.appendChild(repository);
    card.appendChild(desc);
    card.appendChild(links)

    return card;
}