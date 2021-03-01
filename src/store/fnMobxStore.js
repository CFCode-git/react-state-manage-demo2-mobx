import { observable, action, makeObservable } from "mobx";

class FnMobxStore {
  constructor() {
    makeObservable(this);
  }

  @observable fnMobxCount = 0;

  @action add(num) {
    console.log("fn add");
    this.fnMobxCount += num;
  }
  @action subtract(num) {
    console.log("fn subtract");
    this.fnMobxCount -= num;
  }
}
export default FnMobxStore;
