import axios from 'axios'

export const getGithubRepositories = async () => {
  const response = await axios.get(
    `https://api.github.com/users/JoaoVitorPaludo/repos?sort=updated&per_page=10`,
  )
  return response
}
