export const init = {

  launchLoader : () => {
    localStorage.setItem('monChat', 'Tom');

  },

  onLeave : () => {
    window.onbeforeunload = function() {
      return "All unsaved data will be lost. Are you sure?";
    };
  },

  preventBarbaEventOnAdminLink: () => {
    document.addEventListener("DOMContentLoaded", function (event) {
      let links = document.querySelectorAll("#wpadminbar a");
      let admin = document.getElementById("wpadminbar");
      if(admin !== null){
        admin.setAttribute("data-barba-prevent", "all");
        for (const link of links) {
          link.classList.add('no-barba')
        }
      }
    });
  },
}
