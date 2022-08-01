Array.prototype.filter = function (fn) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this);
  }
};
