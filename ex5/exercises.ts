function echo<T>(input: T): T {
  return input;
}

const text = echo("hello");
const num = echo(42);
const list = echo([1, 2, 3]);
const person = echo({ name: "Alice", age: 30 });

console.log(text.toUpperCase());
console.log(num.toFixed(2));
console.log(list.length);
console.log(person.name);

interface ApiResult<T> {
  status: string;
  data: T;
}

const messageResult: ApiResult<string> = {
  status: "success",
  data: "User created",
};

const userResult: ApiResult<{ id: number; name: string }> = {
  status: "success",
  data: { id: 1, name: "Alice" },
};

console.log(messageResult.data);
console.log(userResult.data.name);

function first<T>(items: T[]): T {
  return items[0];
}

console.log(first([10, 20, 30]));
console.log(first(["apple", "banana", "cherry"]));
console.log(first([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]).name);

export {};
