type User = {
  name: string;
  age: number;
  city: string;
};

function main() {
  const user: User = {
    name: "John Doe",
    age: 25,
    city: "New York",
  };

  console.log(user);

  console.log("Hello World!");
}

main();
