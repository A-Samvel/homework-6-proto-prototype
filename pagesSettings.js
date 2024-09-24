const myObjectMethods = {
  init: function (arr = [], number = this.array.length) {
    if (typeof number !== "number" || number < 0)
      throw new TypeError("invalid input");
    number = number > arr.length ? arr.length : number;

    let { array } = Pagination;
    for (let i = 0; i < arr.length; i += number) {
      array.push(arr.slice(i, i + number));
    }

    this.pageSize = number;
    this.currentPage = array[0];
  },
  getPageItems: function () {
    return this.currentPage;
  },
  firstPage: function () {
    this.currentPage = this.array[0];
  },
  lastPage: function () {
    this.currentPage = this.array[this.array.length - 1];
  },
  nextPage: function () {
    const currentPageIdx = this.array.indexOf(this.currentPage);
    const idx = currentPageIdx === this.array.length - 1 ? -1 : currentPageIdx;
    this.currentPage = this.array[idx+1];
  },
  prevPage: function () {
    const currentPageIdx = this.array.indexOf(this.currentPage);
    const idx = currentPageIdx === 0 ? this.array.length : currentPageIdx;
    this.currentPage = this.array[idx-1];
  },
  goToPage: function (idx = 0) {
    if (typeof idx !== "number") throw new TypeError("invalid input");

    if (idx > this.array.length) this.lastPage();
    else if (idx <= 0) this.firstPage();
    else this.currentPage = this.array[idx - 1];
  },
};

const Pagination = Object.create(myObjectMethods);
Pagination.array = [];
Pagination.pageSize = 0;
Object.defineProperty(Pagination, "currentPage", {
  value: "",
  enumerable: false,
  configurable: true,
  writable: true,
});
const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

Pagination.init(alphabetArray, 4);
console.log(Pagination.getPageItems())
Pagination.prevPage()
console.log(Pagination.getPageItems())
Pagination.nextPage()
console.log(Pagination.getPageItems())
Pagination.firstPage()
console.log(Pagination.getPageItems())
Pagination.lastPage()
console.log(Pagination.getPageItems())
Pagination.goToPage(4)
console.log(Pagination.getPageItems())