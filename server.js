const express = require("express");
const session = require("express-session");
const multer = require("multer");
const fs = require("fs").promises;

const { db, Products, Users } = require("./db/db");

port = process.env.PORT || 5555;

const app = express();

// images upload
const upload = multer({ dest: "uploads/" });

// front end and post handeling
app.set("view engine", "hbs");
app.use("/", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cookies for the session
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "24knb6k247b2k7b2k7bk247hb2kh7b2",
  })
);

app.get("/", async (req, res) => {
  const product = await Products.findByPk(req.session.userId);
  res.render("index", { product });
});

app.use("/images", express.static(__dirname + "/images"));

app.get("/addproduct", (req, res) => {
  res.render("addproduct");
});

app.post("/addproduct", upload.single("itemimg"), async (req, res) => {
  console.log("req.body", req.body);
  console.log("req.file", req.file);

  const oldPath = "uploads/" + req.file.filename;
  const newPath =
    "images/" +
    "itemimg_" +
    req.body.itemname +
    "." +
    req.file.mimetype.split("/").pop();

  await fs.rename(oldPath, newPath);

  const product = await Products.create({
    itemimg:
      "images/" +
      "itemimg_" +
      req.body.itemname +
      "." +
      req.file.mimetype.split("/").pop(),
    // itemimg: req.body.itemimg,
    itemname: req.body.itemname,
    price: req.body.price,
    contact: req.body.contact,
  });

  res.redirect("/");
});

app.get("/content", async (req, res) => {
  const product = await Products.findAll();
  res.status(200).send(product);
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  const user = await Users.create({
    username: req.body.username,
    password: req.body.password, // NOTE: in production we save hash of password
    email: req.body.email,
  });

  res.status(201).send(`User ${user.id} created`);
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const user = await Users.findOne({ where: { username: req.body.username } });
  if (!user) {
    return res
      .status(404)
      .render("login", { error: " !!! No such username found !!! " });
  }

  if (user.password !== req.body.password) {
    return res
      .status(401)
      .render("login", { error: " !!! Incorrect password !!! " });
  }
  req.session.userId = user.id;
  res.redirect("/");
});

// server client for connections

db.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
