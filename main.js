(function () {
  var monthMs = 2629800000;

  function elapsedMonths(date) {
    return Math.max(0, Math.floor((Date.now() - new Date(date).getTime()) / monthMs));
  }

  function formatExperience(date) {
    var months = elapsedMonths(date);
    var years = Math.floor(months / 12);
    var rest = months % 12;

    if (rest === 0) {
      return years + "+ years";
    }

    return years + " years " + rest + " months";
  }

  document.querySelectorAll("[data-experience]").forEach(function (node) {
    node.textContent = formatExperience(node.getAttribute("data-experience"));
  });

  document.querySelectorAll("[data-since]").forEach(function (node) {
    node.textContent = new Date(node.getAttribute("data-since")).getFullYear();
  });
})();
