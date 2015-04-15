describe('MovieTicket', function(){
    describe("age", function(){
        it ("add a normal age and return no discount", function(){
            var testUser = Object.create(MovieTicket);
            testUser.age(22);
            expect(testUser.user_age).to.equal(1);
        });
    });

    describe("age", function(){
        it ("add a matinee age and return to a discount", function(){
            var testUser = Object.create(MovieTicket);
            testUser.age(10);
            expect(testUser.user_age).to.equal(0.5);
        });
    });

    describe("age", function(){
        it ("add an age>60 and return to a senior discount", function(){
            var testUser = Object.create(MovieTicket);
            testUser.age(80);
            expect(testUser.user_age).to.equal(0.5);
        });
    });

    describe("time", function(){
        it ("add a normal time and return to normal", function(){
            var testUser = Object.create(MovieTicket);
            testUser.time(14);
            expect(testUser.movie_time).to.equal(0);
        });
    });

    describe("time", function(){
        it ("add a golden time and return to an extra charge", function(){
            var testUser = Object.create(MovieTicket);
            testUser.time(20);
            expect(testUser.movie_time).to.equal(5);
        });
    });

    describe("movie_cost", function(){
        it ("add a movie chosen and return to the price", function(){
            var testUser = Object.create(MovieTicket);
            testUser.movie_cost(2);
            expect(testUser.ticket_price).to.equal(12);
        });
    });

    describe("price", function(){
        it ("add a normal user and return to a normal price", function(){
            var testUser = Object.create(MovieTicket);
            testUser.time(14);
            testUser.age(24);
            testUser.movie_cost(2);
            testUser.price();
            expect(testUser.price).to.equal(12);

        });
    });

    describe("price", function(){
        it ("add a baby age and return to a discount price", function(){
            var testUser = Object.create(MovieTicket);
            testUser.time(10);
            testUser.age(10);
            testUser.movie_cost(1);
            testUser.price();
            expect(testUser.price).to.equal(5);


        });
    });
});
