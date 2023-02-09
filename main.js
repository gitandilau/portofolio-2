function toggleDetail(e) {
  const target = $(e.target);
  if ($(target).hasClass('active')) {
    $(target).html('More Info').removeClass('active');
  } else {
    $(target).html('Less Info').addClass('active');
  }
  const item = $(target).parents('.about-exp-item');
  const detail = $(item).children('.about-exp-item-detail');
  $(detail).slideToggle();
}

function onFormSubmit(e) {
  e.preventDefault(); // unutk menghindari terjadinya loading
  const email = $('#inp_email');
  const subject = $('#inp_subject');
  const message = $('#inp_message');

  if (!$(email).val()) {
    alert('email is required');
  } else if (!$(subject).val()) {
    alert('subject is required');
  } else if (!$(message).val()) {
    alert('message is required');
  } else {
    $(message).val('');
    $(message).val('');
    $(message).val('');
    alert('Form Submitted');
  }
}

// {
//   const target = $(event.target);
//   if ($(target).hasClass('active')) {
//     $(target).html('More Info').removeClass('active');
//   } else {
//     $(target).html('Less Info').addClass('active');
//   }
//   const item = $(target).parent('about-exp-item');
//   const detail = $(item).children('about-exp-item-detail');
//   console.log($(target).parent('about-exp-item'));
//   $(detail).slideToggle();
// }
