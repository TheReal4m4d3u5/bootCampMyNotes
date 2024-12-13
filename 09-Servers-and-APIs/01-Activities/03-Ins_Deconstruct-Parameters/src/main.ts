import './style.css';

fetch('https://api.github.com/gists/public?since=2023-06-01&per_page=100') // /gists/public - endpoint. query parameter - ?since=2023-06-01&per_page=100
  .then((response)  => response.json()) // server responce then((response) 
  .then((data) => { // then use the data as we want
    console.log(data);
  });


