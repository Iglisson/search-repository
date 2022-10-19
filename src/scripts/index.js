import CardRepository from "../components/CardRepository.js";
import { Perfil, Stats } from "../components/UserInfo.js";

const btnSearch = document.querySelector("#search");
const iptUser = document.querySelector("#username");
const userInfo = document.querySelector("main .user-info");
const repositories = document.querySelector("main .repositories");

const year = document.querySelector("#current-year");
year.textContent = new Date().getFullYear();

function clearMain() {
    userInfo.innerHTML = "";
    repositories.innerHTML = "";
}

btnSearch.addEventListener("click", () => {
    clearMain();
    getApiGitHub()
})

iptUser.addEventListener("keypress", ({ keyCode }) => {
    if (keyCode === 13) {
        clearMain();
        getApiGitHub();
    };
});

function getApiGitHub() {

    const queryString = "q=" + encodeURIComponent("user:" + iptUser.value);
    fetch("https://api.github.com/search/repositories?" + queryString)
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            let data = await res.json();
            let user = data.items[0].owner;

            
            userInfo.appendChild(Perfil(user.login, user.avatar_url));
            userInfo.appendChild(Stats(user.login));
        
            data.items.map(item => {

                repositories.appendChild(CardRepository(item.name, item.description, item.has_pages, item.owner));

            })
        })
        .catch(e => {
            console.error(e);
            alert("Usuário sem repositório de código! Tente outro login.");
            iptUser.value = "";
        });
}