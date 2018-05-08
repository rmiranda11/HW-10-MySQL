var mysql = require("mysql");
var inquirer = require("inquirer")
require("console.table");
var chalk = require('chalk');



//create mysql connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_db"
  });
 
  function begin(){
  connection.connect(function(err) {
      if (err) throw err;
      console.log("connected as id " + connection.threadId);
        showProducts();
    });
};

    //shows products in table 
    function showProducts() {
        connection.query("SELECT * FROM products", function(err, res) {
          if (err) throw err;
           console.table(res);
           start();
        });
    };

    //runs logic 
    function start() {
        inquirer
          .prompt([{
            name: "item_id",
            type: "input",
            message: "Type in the ID of the product you wish to buy"
          },
           {
            name:"quantity",
            type: "input",
            message: "How many would you like to buy?"
           }
        ])
        .then(function(answer){

            var item = answer.item_id;
            var quantity = answer.quantity;

            var query = 'SELECT * FROM products WHERE ?';

            connection.query(query, {item_id:item}, function(err,data){
                if (err) throw err;

                var productData = data[0];

                if(quantity <= productData.stock_quantity){
                    console.log(chalk.green("The item you are trying to purchase is in stock!"));
                

                var updateStock = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;

                connection.query(updateStock, function(err, data) {
                    if (err) throw err;

                    console.log(chalk.blue('Your order has been placed! Your total is $' + productData.price * quantity));
                    console.log(chalk.green('Thank you! Please shop again soon.'));
                    console.log("\n---------------------------------------------------------------------\n");
                    // connection.end();
                    

                })
                showProducts();


            }else {
                console.log(chalk.red('Sorry, there is not enough product in stock, your order cannot be placed.'));
                console.log(chalk.red('Please modify your order.'));
                console.log("\n---------------------------------------------------------------------\n");
                            showProducts();

            }
            })

        })

    }
    begin();
