/* Scripts for css grid dashboard */

document.addEventListener("DOMContentLoaded", function () {
  addResizeListeners();
  setSidenavListeners();
  setUserDropdownListener();
  renderChart();
  setMenuClickListener();
  setSidenavCloseListener();
});

// Set constants and grab needed elements
const sidenavEl = document.querySelector(".sidenav");
const gridEl = document.querySelector(".grid");
const SIDENAV_ACTIVE_CLASS = "sidenav--active";
const GRID_NO_SCROLL_CLASS = "grid--noscroll";

function toggleClass(el, className) {
  if (el.classList.contains(className)) {
    el.classList.remove(className);
  } else {
    el.classList.add(className);
  }
}

// User avatar dropdown functionality
function setUserDropdownListener() {
  const userAvatar = document.querySelector(".header__avatar");

  userAvatar.addEventListener("click", function (e) {
    const dropdown = this.querySelector(".dropdown");
    toggleClass(dropdown, "dropdown--active");
  });
}

// Sidenav list sliding functionality
function setSidenavListeners() {
  const subHeadings = document.querySelectorAll(".navList__subheading");
  const SUBHEADING_OPEN_CLASS = "navList__subheading--open";
  const SUBLIST_HIDDEN_CLASS = "subList--hidden";

  subHeadings.forEach((subHeadingEl) => {
    subHeadingEl.addEventListener("click", (e) => {
      const subListEl = subHeadingEl.nextElementSibling;

      // Add/remove selected styles to list category heading
      if (subHeadingEl) {
        toggleClass(subHeadingEl, SUBHEADING_OPEN_CLASS);
      }

      // Reveal/hide the sublist
      if (subListEl) {
        toggleClass(subListEl, SUBLIST_HIDDEN_CLASS);
      }
    });
  });
}

// Draw the chart
function renderChart() {
  const chart = AmCharts.makeChart("chartdiv", {
    type: "serial",
    theme: "light",
    dataProvider: [
      {
        month: "Jan",
        visits: 2025,
      },
      {
        month: "Feb",
        visits: 1882,
      },
      {
        month: "Mar",
        visits: 1809,
      },
      {
        month: "Apr",
        visits: 1322,
      },
      {
        month: "May",
        visits: 1122,
      },
      {
        month: "Jun",
        visits: 1114,
      },
      {
        month: "Jul",
        visits: 984,
      },
      {
        month: "Aug",
        visits: 711,
      },
      {
        month: "Sept",
        visits: 665,
      },
      {
        month: "Oct",
        visits: 580,
      },
    ],
    valueAxes: [
      {
        gridColor: "#FFFFFF",
        gridAlpha: 0.2,
        dashLength: 0,
      },
    ],
    gridAboveGraphs: true,
    startDuration: 1,
    graphs: [
      {
        balloonText: "[[category]]: <b>[[value]]</b>",
        fillAlphas: 0.8,
        lineAlpha: 0.2,
        type: "column",
        valueField: "visits",
      },
    ],
    chartCursor: {
      categoryBalloonEnabled: false,
      cursorAlpha: 0,
      zoomable: false,
    },
    categoryField: "month",
    categoryAxis: {
      gridPosition: "start",
      gridAlpha: 0,
      tickPosition: "start",
      tickLength: 20,
    },
    export: {
      enabled: false,
    },
  });
}

// If user opens the menu and then expands the viewport from mobile size without closing the menu,
// make sure scrolling is enabled again and that sidenav active class is removed
function addResizeListeners() {
  window.addEventListener("resize", function (e) {
    const width = window.innerWidth;

    if (width > 750) {
      sidenavEl.classList.remove(SIDENAV_ACTIVE_CLASS);
      gridEl.classList.remove(GRID_NO_SCROLL_CLASS);
    }
  });
}

// Menu open sidenav icon, shown only on mobile
function setMenuClickListener() {
  document
    .querySelector(".header__menu")
    .addEventListener("click", function (e) {
      toggleClass(sidenavEl, SIDENAV_ACTIVE_CLASS);
      toggleClass(gridEl, GRID_NO_SCROLL_CLASS);
    });
}

// Sidenav close icon
function setSidenavCloseListener() {
  document
    .querySelector(".sidenav__brand-close")
    .addEventListener("click", function (e) {
      toggleClass(sidenavEl, SIDENAV_ACTIVE_CLASS);
      toggleClass(gridEl, GRID_NO_SCROLL_CLASS);
    });
}
