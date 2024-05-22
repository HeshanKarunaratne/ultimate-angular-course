## Documentation

#### Installation

```txt
- Install Angular CLI
npm install -g @angular/cli

- Angular version
ng version

- Angular Help
ng help

- Create new angular application
ng new $app_name

- Start the application
ng server

- Install typescript
npm install -g typescript

- Compile Typescript to Javascript
npx tsc $file_name
```

#### JIT vs AOT Compiler

- JIT
  - Larger file size
  - Loads slower since compiler run in the browser
  - Catch errors in browser
- AOT
  - Small file size
  - Loads faster since app is compiled on delivery to the browser
  - Catch errors on the server

#### Typescripts

- string, number, boolean, null, undefined, any are valid types
- You can tightly couple variables to a type using typescript

```js
function addShipping(price, shipping) {
  console.log(price + shipping);
}

addShipping("hello", 5);
```

```ts
function addShipping(price: number, shipping: number): number {
  return price + shipping;
}
addShipping(10, 5);
```
