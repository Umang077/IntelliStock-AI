const dbOperations = require("./dbOperations");
var Order = require("./order");
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
router.route("/sections").get((request, response) => {
  dbOperations.getOrders().then((result) => {
    response.json(result[0]);
    // authData;
  });
});

router.route("/sections/:id").get((request, response) => {
  // jwt.verify(request.token, "secretkey", (err, authData) => {
  //   if (err) {
  //     response.sendStatus(403);
  //   } else {
  dbOperations.getOrder(request.params.id).then((result) => {
    response.json(result[0]);
  });
  // }
  // });
});

router.route("/sections/add").post((request, response) => {
  // jwt.verify(request.token, "secretkey", (err, authData) => {
  //   if (err) {
  //     response.sendStatus(403);
  //   } else {
  let order = { ...request.body };
  dbOperations.addOrder(order).then((result) => {
    response.status(201).json(result);
  });
  //   }
  // });
});

router.route("/sections/delete/:id").delete((request, response) => {
  // jwt.verify(request.token, "secretkey", (err, authData) => {
  //   if (err) {
  //     response.sendStatus(403);
  //   } else {
  dbOperations.deleteOrder(request.params.id).then((result) => {
    response.json(result[0]);
  });
  //   }
  // });
});

router.route("/sections/update/:id").put(
  /*verifyToken,*/ (request, response) => {
    // jwt.verify(request.token, "secretkey", (err, authData) => {
    //   if (err) {
    //     response.sendStatus(403);
    //   } else {
    let order = request.body;
    console.log(order);
    dbOperations
      .updateOrder(request.params.id, order)
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
// app.put("/sections/update/:id", async function (req, response) {
//   const request = db.request();
//   request.input("section_id", sql.Int, req.params.id);
//   request.input("section_name", sql.VarChar, req.body.section_name);
//   request.input("wall_id", sql.Int, req.body.wall_id);
//   request.input("towel_id", sql.Int, req.body.towel_id);
//   await request.query(
//     "UPDATE dbo.TowelSection SET section_name=@section_name, wall_id=@wall_id, towel_id=@towel_id where section_id = @section_id"
//   );
//   response.json({ msg: "Recorded" });
// });

var port = process.env.PORT || 3004;
app.listen(port);
console.log("Order API is running at " + port);

dbOperations.getOrders().then((result) => {
  console.log(result);
});
