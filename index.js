var metal = new Gym ("Metal", 20);

var andrey = new Trainer ("Andrey", 30);
var sashaVip = new VipTrainer ("Sasha", 5, 2);


metal.addTrainer(andrey);
metal.addTrainer(sashaVip);

andrey.addCashAsync(10, function (err , data) {
    if (err) {
        console.error (err)
    } else {
        console.log ("Data", data);
        andrey.addCashAsync(5, function(err, data) {
            if (err) {
                console.error (err)
            } else {
                console.log ("Data", data);
                andrey.addCashAsync(-4, function(err, data) {
                    if (err) {
                        console.error (err)
                    } else {
                        console.log ("Data", data);
                    }
                })
            }
        })
    }
}) 
// console.log(metal)