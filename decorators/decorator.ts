function MenuItem(itemID: string) {
  return function (value) {
    return class extends value {
      id = itemID;
    };
  };
}

@MenuItem("123")
class Pizza {
  id: string;
}

@MenuItem("434")
class Hamburger {
  id: string;
}

console.log(new Pizza().id);
console.log(new Hamburger().id);
