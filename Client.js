function Client (name, age, cash) {
    this._name = name;
    this._age = age;
    this._cash = cash;
    this._gym = null;
}

Client.prototype.getName = function () {
    return this._name;
};

Client.prototype.setName = function (name) {
    this._name = name;
};

Client.prototype.getAge = function () {
    return this._age;
};

Client.prototype.setAge = function (age) {
    this._age = age;
};

Client.prototype.getCash = function () {
    return this._cash;
};

Client.prototype.addCash = function (newCash) {
    this._cash += newCash;
};

Client.prototype.payCash = function (nameTrainer, paid) {
    if (this._cash >= paid ) {
        this._gym.payTraining(nameTrainer, paid);
        this._cash -= paid;
    }
};

Client.prototype.getGym = function () {
    return this._gym;
};

Client.prototype.setGym = function (gym) {
    this._gym = gym;
}