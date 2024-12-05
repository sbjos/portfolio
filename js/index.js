$(document).ready(() => {
  setTimeout(() => {
    highlight(".resume-btn");
  }, 2000);

  fadeIn(".summary");

  onHover(".project");
});

const onHover = (selector) => {
  $(selector).on("mouseenter", () => {
    $(selector).addClass("hov");
  });
  $(selector).on("mouseleave", () => {
    $(selector).removeClass("hov");
  });
};

const highlight = (selector) => {
  $(selector).fadeOut({ opacity: 0.3 }).fadeIn();
};

const fadeIn = (selector) => {
  $(selector).css("display", "none").fadeIn(2500);
};
