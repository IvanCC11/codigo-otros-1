const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//se agrego punto
const $b = document.querySelector('.blog');//se cambio # por punto ya que es una clase
const $l = document.querySelector('.location');
c

async function displayUser(username) {//se añadió el async
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);