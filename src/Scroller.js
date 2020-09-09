class Scroller {
  constructor() {
    this.sections = document.querySelectorAll("section");
    const sectionsArr = [...this.sections];
    const currentSectionIndex = sectionsArr.findIndex(this.isScrolledIntoView);
    this.currentSectionIndex =
      currentSectionIndex < 0 ? 0 : currentSectionIndex;
    this.isThrottled = false;
    this.drawNavigation();
  }
  isScrolledIntoView(element) {
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top;
    const elementBottom = Math.floor(rect.bottom);
    const isVissible = elementTop >= 0 && elementBottom <= window.innerHeight;
    return isVissible;
  }

  listenScroll(e) {
    if (this.isThrottled) return;
    this.isThrottled = true;
    if (this.sections.length === 0) {
      this.listenScroll(e)
    } else {
      setTimeout(() => {
        this.isThrottled = false;
      }, 1000);

      const direction = e.deltaY > 0 ? 1 : -1;

      this.scroll(direction);
    }
  }
  scroll(direction) {
    if (direction === 1) {
      const isLastSection =
        this.currentSectionIndex === this.sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const firstSection = this.currentSectionIndex === 0;
      if (firstSection) return;
    }
    this.currentSectionIndex = this.currentSectionIndex + direction;

    this.scrollToCurrentSection();
  }

  scrollToCurrentSection() {
    this.selectActiveNavItem();
    if (this.sections.length === 0) {}

    this.sections[this.currentSectionIndex].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  drawNavigation() {
    this.navigationContainer = document.createElement("asaid");
    this.navigationContainer.setAttribute("class", "scroller__navigation");
    const list = document.createElement("ul");

    this.sections.forEach((section, index) => {
      const listItem = document.createElement("li");
      listItem.addEventListener("click", () => {
        this.currentSectionIndex = index;
        this.scrollToCurrentSection();
      });
      list.appendChild(listItem);
    });

    this.navigationContainer.appendChild(list);
    document.querySelector("#root").appendChild(this.navigationContainer);
    this.selectActiveNavItem();
  }

  selectActiveNavItem() {
    if (this.navigationContainer) {
      const navigationItems = this.navigationContainer.querySelectorAll("li");
      navigationItems.forEach((item, index) => {
        if (index === this.currentSectionIndex) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }
  }
}
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 1024 || window.innerHeight < 700) {
    return;
  } else {
    const scroller = new Scroller();

    document.addEventListener("wheel", (event) => {
      scroller.listenScroll(event)
    });


    document.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case 40:
          return scroller.scroll(1);
        case 38:
          return scroller.scroll(-1);
        default:
          return;
      }
    });
  }
});