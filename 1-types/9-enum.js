var Roles;
(function (Roles) {
    Roles["ADMIN"] = "admin";
    Roles["AUTHOR"] = "author";
    Roles["EDITOR"] = "editor";
})(Roles || (Roles = {}));
var admin = {
    id: 123,
    name: "John Doe",
    role: Roles.ADMIN,
};
