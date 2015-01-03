$(document).ready(function() {
  if(page == "myProfile") {
    updateProfilePreview();
    updateVisiblePreview();

    function updateProfilePreview() {
      setTimeout(function () {
        $('#name').text($("input[name='name']").val());
        $('#seeking p').text($("input[name='seeking']").val());
        $('#age').html("<b>Age:</b> " + $("input[name='age']").val());
        $('#location p').text($("input[name='location']").val());
        $('#profession p').text($("input[name='profession']").val());
        $('#religiousBeliefs p').text($("input[name='religiousBeliefs']").val());
      }, 1);
    }

    function updateVisiblePreview() {
      if ($("input.showOnCardBox[name='showName']:checked").val()) {
        $('#name').slideDown();
      } else {
        $('#name').slideUp();
      }
      if ($("input.showOnCardBox[name='showSeeking']:checked").val()) {
        $('#seeking').slideDown();
      } else {
        $('#seeking').slideUp();
      }
      if ($("input.showOnCardBox[name='showAge']:checked").val()) {
        $('#age').slideDown();
        $("#ageGenderHr").slideDown();
      } else {
        $('#age').slideUp();
        if (!$("input.showOnCardBox[name='showGender']:checked").val()) {
          $("#ageGenderHr").slideUp();
        }
      }
      if ($("input.showOnCardBox[name='showGender']:checked").val()) {
        $('#gender').slideDown();
        $("#ageGenderHr").slideDown();
      } else {
        $('#gender').slideUp();
        if (!$("input.showOnCardBox[name='showAge']:checked").val()) {
          $("#ageGenderHr").slideUp();
        }
      }
      if ($("input.showOnCardBox[name='showLocation']:checked").val()) {
        $('#location').slideDown();
      } else {
        $('#location').slideUp();
      }
      if ($("input.showOnCardBox[name='showProfession']:checked").val()) {
        $('#profession').slideDown();
      } else {
        $('#profession').slideUp();
      }
      if ($("input.showOnCardBox[name='showReligiousBeliefs']:checked").val()) {
        $('#religiousBeliefs').slideDown();
      } else {
        $('#religiousBeliefs').slideUp();
      }
      if ($("input.showOnCardBox[name='showPicture']:checked").val()) {
        $('#picture').slideDown();
      } else {
        $('#picture').slideUp();
      }
    }


    $('input.form-control').keydown(updateProfilePreview);
    $('input[name="gender"]').click(function () {
      $('#gender b').text($(this).val());
    });

    $('input.showOnCardBox').click(updateVisiblePreview);
  }
});

