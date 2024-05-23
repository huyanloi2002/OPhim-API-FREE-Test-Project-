const changeKeywordtoSlug = (str) => {
  if (str) {
    const replaceD = str.replace(/đ/g, "d").replace(/Đ/g, "D");
    const strRemoveAccent = replaceD
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const removeSpecialChar = strRemoveAccent.replace(/[;:-]/g, "");
    const lower = removeSpecialChar.toLowerCase();
    const arrStr = lower.split(" ");
    const removeSpace = arrStr.filter((el) => el !== "");
    const newStr = removeSpace.join("-");
    return newStr;
  }
};

module.exports = changeKeywordtoSlug;
