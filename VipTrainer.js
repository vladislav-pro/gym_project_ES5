function VipTrainer(name, cash, level) {
    Trainer.call(this, name, cash)
    this._level = level;
}

VipTrainer.prototype = Object.create(Trainer.prototype);
VipTrainer.prototype.constructor = VipTrainer;

VipTrainer.prototype.getLevel = function () {
    return this._level;
};

VipTrainer.prototype.setLevel = function (number) {
    this._level = number;
};