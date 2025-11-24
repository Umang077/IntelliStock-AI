const towelDbOperations = require("./towelDbOperations");
var towelOrder = require("./towelOrder");
var jwt = require("jsonwebtoken");

var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

router.use((request, response, next) => {
  console.log("middleware");
  next();
});
router.route("/towels").get((request, response) => {
  towelDbOperations.towelGetOrders().then((result) => {
    response.json(result[0]);
    // authData;
  });
});

router.route("/towels/:id").get((request, response) => {
  // jwt.verify(request.token, "secretkey", (err, authData) => {
  //   if (err) {
  //     response.sendStatus(403);
  //   } else {
  towelDbOperations.towelGetOrder(request.params.id).then((result) => {
    response.json(result[0]);
  });
  // }
  // });
});

router.route("/towels/add").post((request, response) => {
  // jwt.verify(request.token, "secretkey", (err, authData) => {
  //   if (err) {
  //     response.sendStatus(403);
  //   } else {
  let order = { ...request.body };
  towelDbOperations.towelAddOrder(order).then((result) => {
    response.status(201).json(result);
  });
  //   }
  // });
});

router.route("/towels/delete/:id").delete((request, response) => {
  // jwt.verify(request.token, "secretkey", (err, authData) => {
  //   if (err) {
  //     response.sendStatus(403);
  //   } else {
  let order = request.body;
  towelDbOperations
    .towelDeleteOrder(request.params.id, order)
    .then((result) => {
      response.json(result);
    });
  //   }
  // });
});

router.route("/towels/update/:id").put(
  /*verifyToken,*/ (request, response) => {
    // jwt.verify(request.token, "secretkey", (err, authData) => {
    //   if (err) {
    //     response.sendStatus(403);
    //   } else {
    let order = request.body;
    console.log(order);
    towelDbOperations
      .towelUpdateOrder(request.params.id, order)
      .then((result) => {
        console.log(result);
        response.json(result);
      })
      .catch((error) => {
        response.status(500).json({ error: error.message });
      });
    //   }
    // });
  }
);
app.post("/api/login", (request, response) => {
  const user = {
    id: 41014935,
    username: "Umang",
    emoplyee: "umanggaur0210@gmail.com",
  };
  jwt.sign({ user }, "secretkey", (err, token) => {
    response.json({
      token,
    });
  });
});
function verifyToken(request, response, next) {
  const bearerHeader = request.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    request.token = bearerToken;
    next();
  } else {
    response.sendStatus(403);
  }
}

var port = process.env.PORT || 3006;
app.listen(port);
console.log("Order API is running at " + port);

towelDbOperations.towelGetOrders().then((result) => {
  console.log(result);
});
