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
