const { request } = require("express");
var config_value = require("./dbConfig");
const sql = require("mssql");

async function towelGetOrders() {
  try {
    let pool = await sql.connect(config_value);
    let towels = pool.request().query("SELECT * FROM dbo.TowelSample");
    return (await towels).recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function towelGetOrder(orderId) {
  try {
    let pool = await sql.connect(config_value);
    let towel = pool
      .request()
      .input("input_parameter", sql.Int, orderId)
      .query("SELECT * FROM dbo.TowelSample where towel_id = @input_parameter");
    return (await towel).recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function towelAddOrder(order) {
  try {
    let pool = await sql.connect(config_value);
    let insertTowel = pool
      .request()
      .input("towel_name", sql.VarChar, order.towel_name)
      .input("towel_type", sql.VarChar, order.towel_type)
      .input("towel_color", sql.VarChar, order.towel_color)
      .input("section_id", sql.Int, order.section_id)
      .input("section_name", sql.VarChar, order.section_name)
      .input("image_url", sql.VarChar, order.image_url)
      .input("retailer", sql.VarChar, order.retailer)
      .input("brand", sql.VarChar, order.brand)
      .input("country_of_origin", sql.VarChar, order.country_of_origin)
      .input("competitor", sql.VarChar, order.competitor)
      .input("size", sql.VarChar, order.size)
      .input("gsm", sql.Int, order.gsm)
      .input("price", sql.Int, order.price)
      .input("color_number", sql.Int, order.color_number)
      .input("speciality", sql.VarChar, order.speciality)
      .input("pile_count", sql.Int, order.pile_count)
      .input("pile_length", sql.Int, order.pile_length)
      .input("pick", sql.VarChar, order.pick)
      .input("reed", sql.VarChar, order.reed)
      .input("attributes", sql.VarChar, order.attributes)
      .input("popular_product", sql.VarChar, order.popular_product)
      .input("new_addition", sql.VarChar, order.new_addition)
      .input("our_patent", sql.VarChar, order.our_patent)
      .input("fashion_line", sql.VarChar, order.fashion_line)
      .input(
        "homepage_popular_product",
        sql.VarChar,
        order.homepage_popular_product
      )
      .input("homepage_new_addition", sql.VarChar, order.homepage_new_addition)
      .input("homepage_our_patent", sql.VarChar, order.homepage_our_patent)
      .input("homepage_fashion_line", sql.VarChar, order.homepage_fashion_line)
      .input("created_by", sql.VarChar, order.created_by)
      .input("is_deleted", sql.Int, order.is_deleted)
      .query(
        "INSERT INTO dbo.TowelSample (towel_name,towel_type,towel_color,section_id,section_name,image_url,retailer,brand,country_of_origin,competitor,size,gsm,price,color_number,speciality,pile_count,pile_length,pick,reed,attributes,popular_product,new_addition,our_patent,fashion_line,homepage_popular_product,homepage_new_addition,homepage_our_patent,homepage_fashion_line,created_by,is_deleted) VALUES (@towel_name,@towel_type,@towel_color,@section_id,@section_name,@image_url,@retailer,@brand,@country_of_origin,@competitor,@size,@gsm,@price,@color_number,@speciality,@pile_count,@pile_length,@pick,@reed,@attributes,@popular_product,@new_addition,@our_patent,@fashion_line,@homepage_popular_product,@homepage_new_addition,@homepage_our_patent,@homepage_fashion_line,'Umang',0)"
      );
    return (await insertTowel).recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function towelDeleteOrder(orderValue, order) {
  try {
    let pool = await sql.connect(config_value);
    let deleteTowel = pool
      .request()
      .input("input_parameter", sql.Int, orderValue)
      .input("is_deleted", sql.Int, order.is_deleted)
      //   .query("DELETE FROM dbo.TowelSample where towel_id = @input_parameter");
      .query(
        "Update dbo.TowelSample SET is_deleted=1 where towel_id = @input_parameter"
      );
    return (await deleteTowel).recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function towelUpdateOrder(newOrder, order) {
  try {
    let pool = await sql.connect(config_value);
    let updateTowel = pool
      .request()
      .input("towel_id", sql.Int, newOrder)
      .input("towel_name", sql.VarChar, order.towel_name)
      .input("towel_type", sql.VarChar, order.towel_type)
      .input("towel_color", sql.VarChar, order.towel_color)
      .input("section_id", sql.Int, order.section_id)
      .input("section_name", sql.VarChar, order.section_name)
      .input("image_url", sql.VarChar, order.image_url)
      .input("retailer", sql.VarChar, order.retailer)
      .input("brand", sql.VarChar, order.brand)
      .input("country_of_origin", sql.VarChar, order.country_of_origin)
      .input("competitor", sql.VarChar, order.competitor)
      .input("size", sql.VarChar, order.size)
      .input("gsm", sql.Int, order.gsm)
      .input("price", sql.Int, order.price)
      .input("color_number", sql.Int, order.color_number)
      .input("speciality", sql.VarChar, order.speciality)
      .input("pile_count", sql.Int, order.pile_count)
      .input("pile_length", sql.Int, order.pile_length)
      .input("pick", sql.VarChar, order.pick)
      .input("reed", sql.VarChar, order.reed)
      .input("attributes", sql.VarChar, order.attributes)
      .input("popular_product", sql.VarChar, order.popular_product)
      .input("new_addition", sql.VarChar, order.new_addition)
      .input("our_patent", sql.VarChar, order.our_patent)
      .input("fashion_line", sql.VarChar, order.fashion_line)
      .input(
        "homepage_popular_product",
        sql.VarChar,
        order.homepage_popular_product
      )
      .input("homepage_new_addition", sql.VarChar, order.homepage_new_addition)
      .input("homepage_our_patent", sql.VarChar, order.homepage_our_patent)
      .input("homepage_fashion_line", sql.VarChar, order.homepage_fashion_line)
      .input("last_updated", sql.DateTime, order.last_updated)
      .input("update_by", sql.VarChar, order.update_by)
      .input("is_deleted", sql.Int, order.is_deleted)

      .query(
        "UPDATE dbo.TowelSample SET towel_name=@towel_name, towel_type=@towel_type, towel_color=@towel_color, section_id=@section_id,section_name=@section_name, image_url=@image_url,retailer=@retailer, brand=@brand, country_of_origin=@country_of_origin,competitor=@competitor,size=@size,gsm=@gsm,price=@price,color_number=@color_number,speciality=@speciality,pile_count=@pile_count,pile_length=@pile_length,pick=@pick,reed=@reed,attributes=@attributes,popular_product=@popular_product,new_addition=@new_addition,our_patent=@our_patent,fashion_line=@fashion_line,homepage_popular_product=@homepage_popular_product,homepage_new_addition=@homepage_new_addition,homepage_our_patent=@homepage_our_patent,homepage_fashion_line=@homepage_fashion_line,last_updated=getDate(),update_by='Vinay Sir',is_deleted=0 where towel_id=@towel_id"
      );
    return (await updateTowel).recordsets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  towelGetOrders: towelGetOrders,
  towelGetOrder: towelGetOrder,
  towelAddOrder: towelAddOrder,
  towelUpdateOrder: towelUpdateOrder,
  towelDeleteOrder: towelDeleteOrder,
};
