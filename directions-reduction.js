// https://www.codewars.com/kata/directions-reduction

function isOpposite(dir1, dir2) {
  const oppositeDirs = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST'
  };

  return oppositeDirs[dir1] === dir2;
}

function dirReduc(arr) {
  return arr.slice(1).reduce((acc, dir) => {
    const lastDir = acc[acc.length - 1];
    if (isOpposite(lastDir, dir)) {
      acc.pop();
    } else {
      acc.push(dir);
    }
    return acc;
  }, arr.slice(0, 1));
}
