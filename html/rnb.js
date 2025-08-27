
  // document.addEventListener("DOMContentLoaded", function () {
  //   let tabs = document.querySelectorAll(".tab-link");
  //   let panels = document.querySelectorAll(".tab-panel");

  //   tabs.forEach(tab => {
  //     tab.addEventListener("click", e => {
  //       e.preventDefault();
  //       // deactivate all
  //       tabs.forEach(t => t.classList.remove("active"));
  //       panels.forEach(p => p.classList.remove("active"));
  //       // activate selected tab + panel
  //       tab.classList.add("active");
  //       let panel = document.getElementById(tab.dataset.tab);
  //       if (panel) panel.classList.add("active");
  //     })
  //   })
    
// DROPDOWN MENU
// buttondropdown for landing page
    function displayMenu() {
        let div = document.getElementsByClassName("dropdown")[0];
        if (div) {
            // Toggle display between 'block' and 'none'
            if (div.style.display === "block") {
                div.style.display = "none";
                div.style.boxShadow = "";
            } else {
                div.style.display = "block";
                div.style.boxShadow = "0px 0px 8px 0px rgb(224, 224, 224)";
            }
        }
    }
// Attach the event to a button that should trigger the menu
    let button = document.querySelector(".menu-button");
    if (button) {
        button.onclick = displayMenu;
    }
