const euro_flags = require('euro-flags');

const DARK_BLUE = 'blue-19';
const CLASSIC_BLUE = 'blue-26';
const SKY_BLUE = 'blue-39';

const create = function(scale, border, color) {
  const greek_flag = euro_flags.greece;
  let colorCode = CLASSIC_BLUE;
  if (color) {
    if (color.toLowerCase() === 'light') {
      colorCode = SKY_BLUE;
    } else if (color.toLowerCase() === 'dark') {
      colorCode = DARK_BLUE;
    }

    greek_flag.children[0].children[0].setColor(colorCode);
    greek_flag.children[0].children[2].setColor(colorCode);

    greek_flag.children[1].children[0].setColor(colorCode);
    greek_flag.children[1].children[2].setColor(colorCode);

    greek_flag.children[2].children[1].setColor(colorCode);

    greek_flag.children[3].children[0].setColor(colorCode);
    greek_flag.children[3].children[2].setColor(colorCode);

    greek_flag.children[4].children[0].setColor(colorCode);
    greek_flag.children[4].children[2].setColor(colorCode);

    greek_flag.children[6].children[0].setColor(colorCode);

    greek_flag.children[8].children[0].setColor(colorCode);
  }
  return greek_flag.create(scale, border);
}

module.exports = {
    create: create,
};