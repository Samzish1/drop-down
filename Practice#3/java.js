let cars = ["Honda","corolla" , "Volvo", "BMW"];
for(let price of cars)

 console.log(`the price is ${price}`);

 const fruits = ['apple', 'banana','cherry'];
for (let value of fruits){  
    console.log(`I like ${value}`);
    }

    // comparision operator ==, ===, !=,<,>,>=,<=
        
let x = 5;
console.log(x==5);

let w = 5;
console.log(w !=6);



    //logical operators && =AND ,||=OR ,! =NOT
let r = 6;
let q = 3;
console.log(r > 10 && q < 1 );

let t = 6;
let u = 3;
console.log(t == 5 || u == 5 );
console.log(t == 6 || u == 0 );

let i = 6;
let o = 3;
console.log(!(i == 5 ));


    //Ternary operator (Conditional)   variablename = (conditional) ? value1 : value2


    
    
    
    function vote(){
        let vote = document.getElementsByClassName('inBox')[0].value;
        
        let voteable = (range < 20) ? "Range is too high":"Range is too low";
        
        document.getElementById('para').innerHTML= `${voteable}  to vote`;
        
        document.getElementById('para').innerHTML= `${voteable}  to vote`;
    }
        function clear(){
            let clear = document.getElementsByClassName(`inbox`)[1].value;

            let clear = 
        
       
        
        
        
        document.getElementById('para').innerHTML= " ";

}