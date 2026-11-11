function fullName(first: string, last: string): string {
  return first + " " + last;
}

console.log(fullName("John", "Doe"));

function registerUser(username: string, isAdmin?: boolean, language: string = "en"): void {
  console.log({ username, isAdmin: isAdmin ?? false, language });
}

registerUser("alice");
registerUser("bob", true);
registerUser("carla", false, "fr");

function average(...scores: number[]): number {
  if (scores.length === 0) return 0;
  return scores.reduce((sum, s) => sum + s, 0) / scores.length;
}

console.log(average(80, 90, 100));
console.log(average(70, 85, 90, 95));
console.log(average(60, 75, 80, 88, 99));

export {};
