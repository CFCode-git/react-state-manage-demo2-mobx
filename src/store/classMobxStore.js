import { observable, action, makeObservable } from "mobx";

class ClassMobxStore {
  constructor() {
    makeObservable(this);
  }
  @observable classMobxCount = 0;

  @action add() {
    console.log("class add");
    this.classMobxCount += 1;
  }
  @action subtract() {
    console.log("class subtract");
    this.classMobxCount -= 1;
  }
}
export default ClassMobxStore;
