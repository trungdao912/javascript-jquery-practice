$(document).ready(() => {
  $("ul").on("click","li", e => {
    if ($(e.target).css("color") === "rgb(128, 128, 128)") {
      $(e.target).css({
        color: "rgb(0, 0, 0)",
        "text-decoration": "none"
      });
    } else {
      $(e.target).css({
        "text-decoration": "line-through",
        color: "grey"
      });
    }
  });

  $("ul").on("click","span", e => {
    e.stopPropagation();
    //   $(e.target.parentNode).css({"display": "none"});
    $(e.target)
      .parent()
      .fadeOut(500, () => {
        $(e.target).remove();
      });
  });
  // IF CLICK
  $("h1 span").click(e => {
    e.stopPropagation();
    let $newVal = $("input[type='text']").val();
    $("ul").append(`<li><span>X</span>${$newVal}</li>`);
    $("input[type='text']").val("");
  });
  //   IF HIT ENTER
  $("input[type='text']").keypress(e => {
    if (e.which === 13) {
      let $newVal = $("input[type='text']").val();
      $("ul").append(`<li><span>X</span>${$newVal}</li>`);
      $("input[type='text']").val("");
    }
  });
});
