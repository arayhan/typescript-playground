enum Roles {
  ADMIN = "admin",
  AUTHOR = "author",
  EDITOR = "editor",
}

type Admin = {
  id: number;
  name: string;
  role: Roles;
};

const admin: Admin = {
  id: 123,
  name: "John Doe",
  role: Roles.ADMIN,
};
