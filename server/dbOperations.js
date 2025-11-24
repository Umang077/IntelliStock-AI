const { request } = require("express");
var config_value = require("./dbConfig");
const sql = require("mssql");

async function getOrders() {
  try {
    let pool = await sql.connect(config_value);
    let towels = pool.request().query("SELECT * FROM dbo.TowelSection");
    return (await towels).recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getOrder(orderId) {
  try {
    let pool = await sql.connect(config_value);
    let towel = pool
      .request()
      .input("input_parameter", sql.Int, orderId)
      .query(
        "SELECT * FROM dbo.TowelSection where section_id = @input_parameter"
      );
    return (await towel).recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function addOrder(order) {
  try {
    let pool = await sql.connect(config_value);
    let insertSection = pool
      .request()
      .input("section_name", sql.VarChar, order.section_name)
      .input("wall_id", sql.Int, order.wall_id)
      .query(
        "INSERT INTO dbo.TowelSection (section_name,wall_id) VALUES   (@section_name,@wall_id)"
      );
    return (await insertSection).recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function deleteOrder(orderValue) {
  try {
    let pool = await sql.connect(config_value);
    let deleteRow = pool
      .request()
      .input("input_parameter", sql.Int, orderValue)
      .query(
        "DELETE FROM dbo.TowelSection where section_id = @input_parameter"
      );
    return (await deleteRow).recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function updateOrder(newOrder, order) {
  try {
    let pool = await sql.connect(config_value);
    let updateRow = pool
      .request()
      .input("section_id", sql.Int, newOrder)
      .input("section_name", sql.VarChar, order.section_name)
      .query(
        "UPDATE dbo.TowelSection SET section_name=@section_name where section_id = @section_id "
      );
    return (await updateRow).recordsets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getOrders: getOrders,
  getOrder: getOrder,
  addOrder: addOrder,
  deleteOrder: deleteOrder,
  updateOrder: updateOrder,
};
