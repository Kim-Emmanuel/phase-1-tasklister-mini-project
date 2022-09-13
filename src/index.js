document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector ('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(e.target.creatForm.value)
    form.reset()
  })
})

function buildToDo(todo){
  const p = document.createElement('p');
  const btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'X'
  p.textContent = `${todo} `
  p.appendChild(btn)
  console.log(p)
  document.getElementById('list').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}