// ! When dynamically generating elements in TypeScript, we need to cast the element to the correct type
const usersContainer = document.getElementById('users') as HTMLDivElement;
const fetchButton = document.getElementById(
  'fetch-button'
) as HTMLButtonElement;

const REQUEST_URL = 'https://api.github.com/users?per_page=5';

const getUsers = () => {
  // TODO: Add a fetch call to the GitHub API
  // TODO: Then parse the JSON response
  // TODO: Then iterate over the data and generate your HTML

  fetch(REQUEST_URL) //fetch is a get requst 
    .then((response) => response.json())  //first then is the server responce
    .then((data) => {                     // then we can do something with the data, data is passed from the server parsed and ready to use
      console.log(data);

      // * It's done when each user includes their login name and a URL to their GitHub profile.
      // * It's done when I click on a user, and a new tab opens to their GitHub profile.

      //we know what user contains because of the documentation 
      // https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-the-authenticated-user
          // "login": "octocat",
          // "id": 1,
          // "node_id": "MDQ6VXNlcjE=",
          // "avatar_url": "https://github.com/images/error/octocat_happy.gif",
          // "gravatar_id": "",
          // "url": "https://api.github.com/users/octocat",
          // "html_url": "https://github.com/octocat",
          // "followers_url": "https://api.github.com/users/octocat/followers",
          // "following_url": "https://api.github.com/users/octocat/following{/other_user}",
          // "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
          // "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
          // "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
          // "organizations_url": "https://api.github.com/users/octocat/orgs",
          // "repos_url": "https://api.github.com/users/octocat/repos",
          // "events_url": "https://api.github.com/users/octocat/events{/privacy}",
          // "received_events_url": "https://api.github.com/users/octocat/received_events",
          // "type": "User",
          // "site_admin": false


      data.array.forEach((user: any) => {
        const userBtn = createUserButton(user.login, user.html_url)
        usersContainer.appendChild(userBtn);
      });
    });
};

const createUserButton = (username: string, url: string) => {
  // Creating a h3 element and a p element
  const userName = document.createElement('h3');
  const userUrl = document.createElement('p');

  // Setting the text of the h3 element and p element.
  userName.textContent = username;
  userUrl.textContent = url;

  // Creating a link element that looks like a button
  const userButton = document.createElement('a');
  userButton.classList.add('btn', 'btn-primary');
  userButton.href = url;
  userButton.target = '_blank';

  // Append will attach the element as the bottom most child.
  userButton.append(userName);
  userButton.append(userUrl);

  return userButton;
};

fetchButton.addEventListener('click', getUsers); //get users passes reference // getUsers() is a call 

//fetchButton.addEventListener('click', createUserButton('4m4du35','')); 