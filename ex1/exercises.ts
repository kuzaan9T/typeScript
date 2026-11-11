let productName: string = "Laptop";
let price: number = 999.99;
let discountAvailable: boolean = true;

productName = "Phone";
price = 499;
discountAvailable = false;

function getDiscount(price: number, discount: number): number {
  return price - price * discount;
}

console.log(getDiscount(100, 0.2));

function printLength(x: string | unknown[]): void {
  console.log(x.length);
}

printLength("Hello");
printLength([1, 2, 3]);

function safePrintLength(x: unknown): void {
  if (typeof x === "string" || Array.isArray(x)) {
    console.log(x.length);
  } else {
    console.log("Value has no length");
  }
}

safePrintLength("Hello");
safePrintLength(123);
