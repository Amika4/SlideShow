function keyPush(env) {
  switch (env.keyCode) { //移動方向
    case 37: xd = -1; yd = 0; break; //左矢印
    case 38: xd = 0; yd = -1; break; //上矢印
    case 39: xd = 1; yd = 0; break; //右矢印
    case 40: xd = 0; yd = 1; break; //下矢印
  }
}
