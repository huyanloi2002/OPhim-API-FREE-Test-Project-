export const handleOpenPopupFacebook = () => {
  const url =
    "https://www.facebook.com/share.php?u=https://www.justwatch.com/us/movies";
  const title = "Chia sẻ lên Facebook";

  return window.open(
    url,
    title,
    `scrollbars=yes, width=${700}, height=${850}, top=${50} left=${600}`
  );
};

export const handleOpenShare = (setOpenShare, openShare) => {
  setOpenShare(!openShare);
};
