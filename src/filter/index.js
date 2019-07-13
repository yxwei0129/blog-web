import constants from '../js/constants'

export function navFilter(num) {
  let name = '';
  switch (num) {
    case 0:
      name = '详情';
      break;
    case 1:
      name = '点滴';
      break;
    case 2:
      name = '标签';
      break;
    case 3:
      name = '分类';
      break;
    case 4:
      name = '友链';
      break;
    case 5:
      name = '关于';
      break;
    default :
      name = '详情';
  }
  return name
}
