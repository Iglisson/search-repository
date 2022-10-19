export function Perfil(login, avatar_url) {
    const perfil = document.createElement("div");
    const github = document.createElement("a");
    const avatar = document.createElement("img");
    const name = document.createElement("h2");

    perfil.className = "perfil";
    github.href = "https://github.com/"+login;
    github.appendChild(avatar);
    avatar.src = avatar_url;
    avatar.alt = "Avatar do usuário"
    name.textContent = login;

    perfil.appendChild(github);
    perfil.appendChild(name);

    return perfil;
}

export function Stats(login){
    const stats = document.createElement("div");
    const topLangs = document.createElement("img");
    const githubStats = document.createElement("img");

    stats.className = "stats";
    stats.appendChild(topLangs);
    stats.appendChild(githubStats);

    topLangs.src = `https://github-readme-stats.vercel.app/api/top-langs/?username=${login}&hide_border=true&langs_count=10&layout=compact&custom_title=Linguagens%20Mais%20Usadas`;
    topLangs.alt = "Linguagens mais usadas";

    githubStats.src = `https://github-readme-stats.vercel.app/api?username=${login}&show_icons=true&line_height=29&hide_border=true&custom_title=Estatísticas%20do%20GitHub`;
    githubStats.alt = "Estátisticas do GitHub"

    return stats;
}