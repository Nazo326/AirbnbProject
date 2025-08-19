
  document.addEventListener("DOMContentLoaded", function () {
    let tabs = document.querySelectorAll(".tab-link");
    let panels = document.querySelectorAll(".tab-panel");

    tabs.forEach(tab => {
      tab.addEventListener("click", e => {
        e.preventDefault();
        // deactivate all
        tabs.forEach(t => t.classList.remove("active"));
        panels.forEach(p => p.classList.remove("active"));
        // activate selected tab + panel
        tab.classList.add("active");
        let panel = document.getElementById(tab.dataset.tab);
        if (panel) panel.classList.add("active");
      })
    })
    

