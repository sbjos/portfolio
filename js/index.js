$(document).ready(() => {
  setTimeout(() => {
    highlight(".resume-btn");
  }, 2000);

  fadeIn(".home-summary");

  onHoverPortfolioCard(".container-project", ".container-project-grid-hov");
  onHoverPortfolioCard(".project-im", "card-hov");
  onHoverPortfolioCard(".project-codecamp", "card-hov");
});

const onHoverPortfolioCard = (selector, content) => {
  $(selector).on("mouseenter", () => {
    $(selector).addClass(content);
  });
  $(selector).on("mouseleave", () => {
    $(selector).removeClass(content);
  });
};

const highlight = (selector) => {
  $(selector).fadeOut({ opacity: 0.3 }).fadeIn();
};

const fadeIn = (selector) => {
  $(selector).css("display", "none").fadeIn(2500);
};
