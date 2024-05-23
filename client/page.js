$(document).ready(function () {
  var totalPages = 11; // Total number of pages var visiblePages = 3; // Number of visible page numbers on each side var currentPage = 1; // Current page

  renderPagination(currentPage, totalPages, visiblePages);

  function renderPagination(currentPage, totalPages, visiblePages) {
    var paginationHTML = "";
    var startPage = Math.max(currentPage - visiblePages, 1);
    var endPage = Math.min(currentPage + visiblePages, totalPages);

    if (currentPage > visiblePages + 1) {
      paginationHTML += '<a href="#" class="page" data-page="1">1</a>';
      paginationHTML += '<span class="ellipsis">...</span>';
    }

    for (var i = startPage; i <= endPage; i++) {
      paginationHTML +=
        '<a href="#" class="page' +
        (i === currentPage ? " current" : "") +
        '" data-page="' +
        i +
        '">' +
        i +
        "</a>";
    }

    if (currentPage < totalPages - visiblePages) {
      paginationHTML += '<span class="ellipsis">...</span>';
      paginationHTML +=
        '<a href="#" class="page" data-page="' +
        totalPages +
        '">' +
        totalPages +
        "</a>";
    }

    $(".pagination .page-numbers").html(paginationHTML);
  }

  $(".pagination").on("click", ".page", function (e) {
    e.preventDefault();
    var page = parseInt($(this).data("page"));
    if (page !== currentPage) {
      currentPage = page;
      renderPagination(currentPage, totalPages, visiblePages);
    }
  });
});
