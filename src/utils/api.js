import axios from "axios";

const fetchPopularRepos = (lang) => {
  const encodeURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${lang}&sort=stars&order=desc&type=Repositories`);

  return axios.get(encodeURI)
    .then(res => res.data.items)
}

export {fetchPopularRepos};