var User = /** @class */ (function () {
    function User(email) {
        this.name = "jaya";
        email: this.email;
    }
    Object.defineProperty(User.prototype, "getEmailId", {
        // getters and setters for public 
        get: function () {
            return this.email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getName", {
        // getters and setters for private
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var mine = new User("j@gmail.com");
// User.name = "kumar" because of private keyword
