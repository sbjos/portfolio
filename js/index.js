$(document).ready(() => {
  setTimeout(() => {
    highlight(".resume-btn");
  }, 2000);

  fadeIn(".home-summary");

  onHover(".container-project");
  onHover(".project-im", "card-hov");
  onHover(".project-codecamp", "card-hov");
});

const onHover = (selector, content) => {
  $(selector).on("mouseenter", () => {
    $(selector).addClass(content);
  });
  $(selector).on("mouseleave", () => {
    $(selector).removeClass(content);
  });
};

const highlight = (selector) => {
  $(selector).fadeOut({ opacity: 0.5 }).fadeIn();
};

const fadeIn = (selector) => {
  $(selector).css("display", "none").fadeIn(1000);
};
