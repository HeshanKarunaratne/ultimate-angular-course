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

- Create new component
ng g c $component_name
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

#### Interpolation

Static value passed to the view

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  name = "heshan";

  getName() {
    return this.name;
  }
}
```

```html
<p>Hello {{ name.toUpperCase() }}!</p>
<p>Hello {{ getName() }}!</p>
<p>{{ 15 + 13 }}</p>
```

#### Property Binding

- Dynamic value passed to the view
- Attribute name is surrounded by square brackets

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  imgURL = "https://picsum.photos/id/237/500/500";
}
```

```html
<img [src]="imgURL" />
```

#### Event Binding and Type Assertions

- Dynamically change the value from the view

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  imgURL = "https://picsum.photos/id/237/500/500";
  changeImage(e: KeyboardEvent) {
    this.imgURL = `https://picsum.photos/id/${
      (e.target as HTMLInputElement).value
    }/500/500`;
  }
}
```

```html
<input (keyup)="changeImage($event)" [value]="id" /> <img [src]="imgURL" />
```

#### Passing data from one component to another

- Need to use property binding syntax to pass from parent to child

```html
<input (keyup)="changeImage($event)" [value]="id" />
<app-post [postImg]="imgURL"></app-post>
```

- Need to add @Input() decorator send data from parent to child

```ts
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent {
  @Input() postImg = "";
}
```

#### EventEmitter

- To send data from child to parent need to use EventEmitter instance

```ts
import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent {
  @Input() postImg = "";
  @Output() imgSelected = new EventEmitter<string>();
}
```

```html
<input (keyup)="changeImage($event)" [value]="id" />
<app-post [postImg]="imgURL" (imgSelected)="logImg($event)"></app-post>
```

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  imgURL = "https://picsum.photos/id/237/500/500";
  logImg(event: string) {
    console.log("event", event);
  }
}
```

#### Content Projection

- Can pass HTML content from parent to child using content projection
- Need to place `<ng-content></ng-content>` tag in child component where the element needs to render

```html
<app-post [postImg]="imgURL" (imgSelected)="logImg($event)">
  <p>Some caption in app component</p>
</app-post>
```

```html
<img [src]="postImg" (click)="imgSelected.emit(postImg)" />
<ng-content></ng-content>
```

#### Life Cycle Hooks

```ts
import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  OnDestroy,
} from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit, OnChanges, OnDestroy {
  @Input() postImg = "";
  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log("contructor called");
  }
  ngOnChanges() {
    console.log("ngOnChanges() called");
  }
  ngDoCheck() {
    console.log("ngDoCheck() called");
  }
  ngOnInit() {
    console.log("ngOnInit() called");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy() called");
  }
}
```

#### Pipes

```html
<p>{{ currentDate | date: 'yyyy:MM:dd' }}</p>
```
