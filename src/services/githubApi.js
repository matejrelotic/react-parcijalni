function handleResponse(response) {
  if (response.status === 200) {
    return response.json();
  }

  if (response.status === 404) {
    throw new Error('Korisnik ne postoji!');
  }

  throw new Error('Server error');
}

function getUser(username) {
  const url = `https://api.github.com/users/${username}`;
  return fetch(url).then((response) => handleResponse(response));
}

function getUserRepos(username) {
  const url = `https://api.github.com/users/${username}/repos`;
  return fetch(url).then((response) => handleResponse(response));
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUser,
  getUserRepos,
};
