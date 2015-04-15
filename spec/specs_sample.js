describe('BankAccount', function(){
    describe("deposit", function(){
        it ("add the amount into the deposit", function(){
            var testBankAccount = Object.create(BankAccount);
            testBankAccount.deposit(200);
            expect(testBankAccount.balance).to.equal(200);
        });

    describe("withdraw", function(){
        it ("subtract the amount from the balance", function(){
            var testBankAccount = Object.create(BankAccount);
            testBankAccount.deposit(200);
            testBankAccount.withdraw(150);
            expect(testBankAccount.balance).to.equal(50);
        });
    })

    });
});
