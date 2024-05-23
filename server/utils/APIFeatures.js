const changeKeywordtoSlug = require("./changeKeywordtoSlug");

class APIFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const newStr = changeKeywordtoSlug(this.queryStr.keyword);
    const keyword = newStr
      ? {
          slug: {
            $regex: newStr, //Khớp với từng chữ có trong name (nhiều hoặc ít)
            $options: "i", //Không phân biệt chữ hoa và thường
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };
    const removeFields = ["keyword", "limit", "page"];
    removeFields.forEach((item) => delete queryCopy[item]);
    this.query = this.query.find(queryCopy);
    return this;
  }

  pagination(totalItems) {
    const currentPage = this.queryStr.page || 1;
    const skip = totalItems * (currentPage - 1);

    this.query = this.query.limit(totalItems).skip(skip);
    return this;
  }

  sort() {
    this.query = this.query.sort({ modified: -1 });
    return this;
  }
}
module.exports = APIFeatures;
