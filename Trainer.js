function Trainer(name, cash) {
    this._name = name;
    this._cash = cash;
}

Trainer.prototype.getName = function () {
    return this._name;
};

Trainer.prototype.setName = function (name) {
    this._name = name;
};

Trainer.prototype.getCash = function () {
    return this._cash;
};

Trainer.prototype.addCash = function (cash) {
    this._cash += cash;
};

Trainer.prototype.addCashAsync = function (cash, callback) {
    setTimeout(
        function () {
            var err;
            var data;
            if (cash > 0) {
                this._cash += cash;
                data = this._cash;
            } else {
                err = new Error ("You don't have enough cash");
            }
            callback(err, data);
        }.bind(this), 3000
    );
}