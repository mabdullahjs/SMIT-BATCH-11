function hello(user) {
  return `hello ${user}`;
}

let username = "abdullah";

function hello2(user2) {
  return `user2 ${user2}`;
}

function defaultFunction(num1, num2) {
  return num1 + num2;
}

console.log(hello("abdullah"));

export { hello, username, hello2 };
export default defaultFunction

// import export
