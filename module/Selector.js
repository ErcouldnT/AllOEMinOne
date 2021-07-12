/* eslint-disable no-console */

function Selector(title, search) {
  title = title.toLowerCase();
  search = search.toLowerCase();
  const searching = search.trim().split(' ');
  for (let i = 0; i < searching.length; i++) {
    const e = searching[i];
    if (!title.includes(e)) {
      return false;
    }
  }
  return true;
}

// const title1 = 'Ryzen 5 3600';
// const search1 = 'ryzen 3600';
// console.log(Selector(title1, search1));

module.exports = Selector;
