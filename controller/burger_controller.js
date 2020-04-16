module.exports = function(app) {


    app.get("/", function(req, res) {
      res.redirect("/burgers");
    });
  
    app.get("/burgers", function(req, res) {
    
      db.burger.findAll().then(function(burgerData) {
        console.log(burgerData.burger)
        
        res.render("index", { burger_data: burgerData });
      });
    });
  
    app.put("/burgers/:id", function(req, res) {
      db.burger.update(
        {
          devoured: true
        },
        {
          where: {
            id: req.params.id
          }
        }).then(function(result) {
    
        console.log(result);

        res.sendstatus(200);
        });
  
    });''
  
  app.post("/burgers/create", function(req, res) {
  
    console.log(req.body.burger_name)
    
    db.burger.create({
      burger_name: req.body.burger_name
     }).then(function(result) {
      res.redirect("/");
    });
  });

    app.get("/api/customer", function(req, res) {
      
      db.customer.findAll({}).then(function(customer) {
        res.json(customer);
      });
    });
  }