import * as THREE from "three";
export class Points {
  constructor(scene, { size, opacity, range, count, setAnimation, setPosition, url }) {
    this.scene = scene;
    //范围
    this.range = range;
    //数量
    this.count = count;
    this.pointList = [];

    this.size = size
    this.opacity = opacity
    this.setAnimation = setAnimation;
    this.setPosition = setPosition;
    this.url = url;
    //存放位置坐标信息
  
    this.init();
  }
  init() {
    //粒子和粒子系统

    //材质
    this.material = new THREE.PointsMaterial({
      size: this.size,
      map: new THREE.TextureLoader().load(this.url),
      transparent: true,
      opacity: this.opacity,
      depthTest: false,
    });
    //几何体
    this.geometry = new THREE.BufferGeometry();
    //给每个雪花添加不同的位置信息
    for (let i = 0; i < this.count; i++) {
      const position = new THREE.Vector3(
        Math.random() * this.range - this.range / 2,
        Math.random() * this.range,
        Math.random() * this.range - this.range / 2
      );
      this.setPosition(position);

      this.pointList.push(position);
    }

    this.geometry.setFromPoints(this.pointList);
    this.point = new THREE.Points(this.geometry, this.material);
    this.scene.add(this.point);
  }
  animation() {
    // this.scene.remove(this.point)
    this.pointList.forEach((position) => {
      this.setAnimation(position);
    });
    this.point.geometry.setFromPoints(this.pointList);
  }
}
