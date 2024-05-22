function addShipping(price: number, shipping: number): number {
  return price + shipping;
}
addShipping(10, 5);

interface IAccount {
  name: string;
  balance: number;
  status?: string;
  deposit?: () => void;
}

const account: IAccount = {
  name: 'heshan',
  balance: 12,
  deposit() {
    console.log(this.name);
  },
};

console.log(account.deposit);

class InvestmentAccount implements IAccount {
  constructor(public name: string, public balance: number) {}
}

class Queue<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  remove() {
    this.data.shift();
  }
}

const nameQueue = new Queue<string>();
nameQueue.add('heshan');
nameQueue.add('dilan');

const numberQueue = new Queue<number>();
numberQueue.add(1);
numberQueue.add(2);
