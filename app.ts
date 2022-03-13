const userName = "Phuong"

let user = {
  name: "test",
  age: 20,
}

let customerName = user.name ?? "a";


const button = document.querySelector('button1');
console.log(22222, button);

button?.addEventListener('click', () => {
  console.log("Click me!");
})

console.log(userName);