import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

//创建加载器
const fbxLoader = new FBXLoader();
export const loadFBX = (url) => {
  return new Promise((resolve, reject) => {
    fbxLoader.load(
      url,
      (object) => {
        resolve(object);
      },
      () => {},
      (error) => {
        reject(error);
      }
    );
  });
};
