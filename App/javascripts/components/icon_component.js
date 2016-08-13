
import createIconSet from 'react-native-vector-icons/lib/create-icon-set';
const glyphMap = {
  yhq:0xe6e2,
  dn:0xe6e1,
  csml:0xe6e0,
  jcdp:0xe6df,
  sgdp:0xe6de,
  tp:0xe6dd,
  xx:0xe6db,
  gdcd:0xe6da,
  zhaq:0xe6d9,
  wddd:0xe6d0,
  xinxi:0xe6d1,
  xiaoxi:0xe6d2,
  ygz:0xe6d3,
  ywc:0xe6d4,
  yx:0xe6d5,
  yxsj:0xe6d6,
  zan:0xe6d7,
  zf:0xe6d8,
  tjgz:0xe6cf,
  sz:0xe6ce,
  sy:0xe6cd,
  sy_hover:0xe6cc,
  suo:0xe6cb,
  ss:0xe6ca,
  sq:0xe6c9,
  sq_hover:0xe6c8,
  sj:0xe6c7,
  gwc:0xe6be,
  hxgz:0xe6bf,
  jr:0xe6c0,
  js:0xe6c1,
  kf:0xe6c2,
  lj:0xe6c3,
  ljt:0xe6c4,
  qbdd:0xe6c5,
  qxgz:0xe6c6,
  gwc_hover:0xe6bd,
  grzx:0xe6bc,
  grzx_hover:0xe6bb,
  grxx:0xe6ba,
  gb:0xe6b9,
  fh:0xe6b8,
  fbwz:0xe6b7,
  cj:0xe6b5,
  Mac:0xe608,
  Linux:0xe726,
  Win:0xe681,
  dfk:0xe6b6,
};

let IconFont = createIconSet(glyphMap, 'IconFont', 'iconfont.ttf');

module.exports = IconFont;
module.exports.glyphMap = glyphMap;

