$("document").ready(function(){



  $(".resume_game_button").on("click", function(){
    var modal = new Custombox.modal({
      content: {
        effect: 'contentscale',
        target: '.game_modal'
      }
    });
    modal.open();
  })

  $(".message").on("click", function(){
    var modal = new Custombox.modal({
      content: {
        effect: 'blur',
        target: '.msg_container'
      }
    });
    modal.open();
  })

  $(".send_button").on("click", function(){
    alert("Hi")
    var modal = new Custombox.modal({
      content: {
        effect: 'fadein',
        target: '.msg_alert'
      }
    });
    modal.open();
  })





































})
