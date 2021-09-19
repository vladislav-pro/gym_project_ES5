function Gym (name, address) {
    this._name = name;
    this._address = address;
    this._trainers = [];
}

Gym.prototype.getName = function () {
    return this._name;
};

Gym.prototype.getAddress = function () {
    return this._address;
};

Gym.prototype.getTrainerByName = function (name) {
    var oneTrainer;
    this._trainers.forEach(function (trainer) {
        if (trainer.getName() === name){
            oneTrainer = trainer.name;
        }
    })
    return oneTrainer;
};

Gym.prototype.getTrainers = function () {
    return this._trainers
};

Gym.prototype.addTrainer = function (trainer) {
    this._trainers.push(trainer)
};

Gym.prototype.deleteTrainer = function (trainerName) {
    var deleteTraiiner;
    this._trainers.forEach(function(trainer) {
        if(trainer.getName() === trainerName){
            deleteTraiiner = trainer;
        }
    });
    var cansel = this._trainers.indexOf(deleteTraiiner);
    this._trainers.slice(cansel, 1)
};

Gym.prototype.payTraining = function (nameTrainer, payCash) {
    this._trainers.forEach( function (trainer) {
        if (trainer.getName() === nameTrainer) {
            trainer.addCash(payCash)
        }
    });
};