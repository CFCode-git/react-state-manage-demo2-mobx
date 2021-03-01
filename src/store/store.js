import ClassMobxStore from "./classMobxStore";
import FnMobxStore from "./fnMobxStore";

let classMobxStore = new ClassMobxStore();
let fnMobxStore = new FnMobxStore();

const stores = {
  classMobxStore,
  fnMobxStore,
};
export default stores;
