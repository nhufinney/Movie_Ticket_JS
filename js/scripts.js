var BankAccount = {
  balance: 0,
  withdraw: function(amount) {
    this.balance = this.balance - amount;
  },
  deposit: function(amount) {
    this.balance = this.balance + amount;
  }
};
var newMember = Object.create(BankAccount);
$(document).ready(function() {


     $("form#signUp").submit(function(event) {
       event.preventDefault();

         var fullname = $("input#name").val();
         var input_balance = parseInt($("input#balance").val());


         newMember.fullname= fullname;
         newMember.balance = input_balance;

         $(".show-balance").text(newMember.balance);
    });


    $("form#money").submit(function(event) {
      event.preventDefault();

        var new_deposit = parseInt($("input#deposit").val());
        var new_withdraw = parseInt($("input#withdraw").val());
        newMember.deposit(new_deposit);
        newMember.withdraw(new_withdraw);

        $(".show-balance").text(newMember.balance);
    });

    
});
