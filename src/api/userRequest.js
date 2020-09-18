const baseUrl = "https://api.github.com"

const authenticatedApiCall = (accessToken, url) => {
  return fetch(url, {
    headers: {
      'Authorization': 'token ' + accessToken, 
      'Content-Type': 'application/json'
    },
  }).then(response => response.json())
}


const getUserInfosRequest = async (accessToken, name) => {
  // First call to get First Infos
  const responseUserCall = await authenticatedApiCall(accessToken, `${baseUrl}/users/${name}`)

  const responseUserRepos = await authenticatedApiCall(accessToken, responseUserCall.repos_url)

  // Create all promises to get all commits from user on each Repo
  const promisesCommits = responseUserRepos.map(currentRepository => {
    return authenticatedApiCall(accessToken, `${baseUrl}/repos/${name}/${currentRepository.name}/commits`)
  })

  // wait for All repository calls.
  const responsesCommits = await Promise.all(promisesCommits)

  // Reducer is here just to calculate the total count
  const numberOfCommits = responsesCommits.reduce((acc, currentValue) => acc + currentValue.length, 0)

  const responseOrganization = await authenticatedApiCall(accessToken, responseUserCall.organizations_url)

  let organizations = []

  if (responseOrganization) {
    organizations = responseOrganization.reduce((acc, currentValue) => [...acc, currentValue.login], [])
  }


  return ({
    bio: responseUserCall.bio,
    avatar: responseUserCall.avatar_url,
    numberOfRepos: responseUserRepos.length,
    name: responseUserCall.name,
    organizationUrl: responseUserCall.organizations_url,
    login: responseUserCall.login,
    numberOfCommits,
    organizations,
    repos: responseUserRepos.slice(0, 3),
  })
}

export {
  getUserInfosRequest,
}