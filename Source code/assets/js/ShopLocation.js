$(document).ready(function () {

    $('.navbar .dropdown-item').on('click', function (e) {
        var $el = $(this).children('.dropdown-toggle');
        var $parent = $el.offsetParent(".dropdown-menu");
        $(this).parent("li").toggleClass('open');
        

        if (!$parent.parent().hasClass('navbar-nav')) {
            if ($parent.hasClass('show')) {
                $parent.removeClass('show');
                $el.next().removeClass('show');
                $el.next().css({"top": -999, "left": -999});
            } else {
                $parent.parent().find('.show').removeClass('show');
                $parent.addClass('show');
                $el.next().addClass('show');
                $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
            }
            e.preventDefault();
            e.stopPropagation();
        }
    });

    $('.navbar .dropdown').on('hidden.bs.dropdown', function () {
        $(this).find('li.dropdown').removeClass('show open');
        $(this).find('ul.dropdown-menu').removeClass('show open');
    });

    

});
$(window).scroll(function(){
    if($(window).scrollTop() >= 10) {
      $('.scroll-up-btn').show();
    } else {
      $('.scroll-up-btn').hide();
    }
  });
  
  function page_scroll(){
    $('html,body').animate({
      scrollTop: 0
      }, 'fast');
  }


  var subjectObject = {
    "Gracious Garments": {
      "White": ["Small", "Medium", "Large", "Extra Large"],
      "Black": ["Small", "Medium", "Large", "Extra Large"],
      "Red": ["Small", "Medium", "Large", "Extra Large"],
      "Green": ["Small", "Medium", "Large", "Extra Large"],
    },
    "Chanel": {
      "White": ["Small", "Medium", "Large", "Extra Large"],
      "Black": ["Small", "Medium", "Large", "Extra Large"],
      "Red": ["Small", "Medium", "Large", "Extra Large"],
      "Green": ["Small", "Medium", "Large", "Extra Large"],
    },
    "Gucci": {
      "White": ["Small", "Medium", "Large", "Extra Large"],
      "Black": ["Small", "Medium", "Large", "Extra Large"],
      "Red": ["Small", "Medium", "Large", "Extra Large"],
      "Green": ["Small", "Medium", "Large", "Extra Large"],
    },
    "D&G": {
      "White": ["Small", "Medium", "Large", "Extra Large"],
      "Black": ["Small", "Medium", "Large", "Extra Large"],
      "Red": ["Small", "Medium", "Large", "Extra Large"],
      "Green": ["Small", "Medium", "Large", "Extra Large"],
    },
  }
  window.onload = function() {
    var subjectSel = document.getElementById("brand");
    var topicSel = document.getElementById("color");
    var chapterSel = document.getElementById("type");
    for (var x in subjectObject) {
      subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function() {
      //display correct values
      for (var y in subjectObject[this.value]) {
        topicSel.options[topicSel.options.length] = new Option(y, y);
      }
    }
    topicSel.onchange = function() {
      //display correct values
      var z = subjectObject[subjectSel.value][this.value];
      for (var i = 0; i < z.length; i++) {
        chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
      }
    }
  }
//TONG CODE JS//
  function validate(){
    sFirtname=reg.Firtname.value;
    rFirtname=/^\w+$/;
        if(!rFirtname.test(sFirtname)){
            alert("Firt Name cannot left blank!")
            reg.Firtname.focus();
            return false;}
    
    sLastname=reg.Lastname.value;
    rLastname=/^\w+$/;
        if(!rLastname.test(sLastname)){
            alert("Last Name cannot left blank!");
            reg.Lastname.focus();
            return false;}
    
    sEmail=reg.Email.value;
    rEmail=/^\w+[@]\w+[.]\w+$/;
        if(!rEmail.test(sEmail)){
            alert("Pleaser Enter Email: 123@abc.xyz");
            reg.Email.focus();
            return false;}

    sPhone = reg.Phone.value;
    rePhone = /^\d{8,12}$/;               // /^[0-9]{8,12}/;
    if(!rePhone.test(sPhone)){
        alert("Pleaser Enter your Phone is: digit only!");
        reg.Phone.focus();
        return false;
    }

    alert("Submitted Sussessfully!!!!");
}