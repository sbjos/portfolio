$(document).ready(() => {
  setTimeout(() => {
    highlight(".resume-btn");
  }, 2000);

  fadeIn(".summary");
});

const onHover = (selector) => {
  $(selector).on("mouseover", () => {
    $(selector).addClass("card-hover");
  });
};

const highlight = (selector) => {
  $(selector).fadeOut({ opacity: 0.3 }).fadeIn();
};

const fadeIn = (selector) => {
  $(selector).css("display", "none").fadeIn(2500);
};
