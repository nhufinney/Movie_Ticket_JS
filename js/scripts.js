var MovieTicket ={
    user_age: 0,
    movie_time: 0,
    ticket_price:0,

    age: function(input_age){
        if (input_age <=18 || input_age>=60){
            this.user_age = 0.5;
        } else{
            this.user_age = 1;
        }
    },

    time: function(chose_time){
        if (chose_time ===2 ){
            this.movie_time = 5;
        } else{
            this.movie_time = 0;
        }
    },

    movie_cost: function(movie_title){
        if (movie_title === 1){
            this.ticket_price= 10;
        }

        if (movie_title === 2){
            this.ticket_price =12;
        }

        if (movie_title === 3){
            this.ticket_price= 14;
        }

        if (movie_title === 4){
            this.ticket_price= 15;
        }
    },

    price: function(){
        this.ticket_price = this.ticket_price * this.user_age + this.movie_time;
    }
};

var myMovie = Object.create(MovieTicket);

$(document).ready(function() {
 $("form#price").submit(function(event) {
     event.preventDefault();

     var input_movie = parseInt($("select").val());
     var input_time = parseInt($("input#time").val());
     var input_age = parseInt($("input#age").val());
     myMovie.age(input_age);
     myMovie.time(input_time);
     myMovie.movie_cost(input_movie);
     myMovie.price();

     debugger;

     $(".show_cost").text(myMovie.ticket_price);
 });
});
