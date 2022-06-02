const userForm = document.getElementById('userForm')

fetch('http://localhost:8080/users')
  .then(response => response.json())
  .then(users => {
    console.log(users)
  })
  .catch(e => console.error(e))

userForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = document.getElementById('name')
  const lastname = document.getElementById('lastname')
  const age = document.getElementById('age')
  const h4 = document.getElementById('message')

  const user = {
    name: name.value,
    lastname: lastname.value,
    age: age.value,
  }

  fetch('http://localhost:8080/form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .then(data => {
    h4.innerHTML = 'Usuario creado correctamente'
    name.value = ''
    lastname.value = ''
    age.value = ''
  })
  .catch(e => console.error(e))
  
  console.log(user)
})

socket.on('newUser', (data) => {
  
})