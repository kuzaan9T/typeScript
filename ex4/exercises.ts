interface User {
  readonly id: number;
  username: string;
  password: string;
  email?: string;
}

function login(user: User): void {
  console.log(`Logging in ${user.username}${user.email ? ` (${user.email})` : ""}`);
}

const alice: User = { id: 1, username: "alice", password: "secret123" };
const bob: User = { id: 2, username: "bob", password: "pass456", email: "bob@example.com" };

login(alice);
login(bob);

alice.id = 99;

export {};
