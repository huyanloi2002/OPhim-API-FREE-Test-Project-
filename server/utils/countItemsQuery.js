const Movie = require("../models/movieModel");
const changeKeywordtoSlug = require("./changeKeywordtoSlug");

const countItemsQuery = async (queryStr) => {
  const newStr = changeKeywordtoSlug(queryStr.keyword);
  const keyword = newStr
    ? {
        slug: {
          $regex: newStr, //Khớp với từng chữ có trong name (nhiều hoặc ít)
          $options: "i", //Không phân biệt chữ hoa và thường
        },
      }
    : {};

  const countItems = await Movie.countDocuments({ ...keyword });
  return countItems;
};

module.exports = countItemsQuery;
