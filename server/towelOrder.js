class towelOrder {
  constructor(
    towel_id,
    towel_name,
    towel_type,
    towel_color,
    section_id,
    section_name,
    image_url,
    retailer,
    brand,
    country_of_origin,
    competitor,
    size,
    gsm,
    price,
    colour_number,
    speciality,
    pile_count,
    pile_length,
    pick,
    reed,
    patent,
    attributes,
    popular_product,
    new_addition,
    fashion_line,
    homepage_popular_product,
    homepage_new_addition,
    homepage_our_patent,
    homepage_fashion_line,
    create_datetime,
    last_updated,
    created_by,
    updated_by,
    is_deleted
  ) {
    this.towel_id = towel_id;
    this.towel_name = towel_name;
    this.towel_type = towel_type;
    this.towel_color = towel_color;
    this.section_id = section_id;
    this.section_name = section_name;
    this.image_url = image_url;
    this.retailer = retailer;
    this.brand = brand;
    this.country_of_origin = country_of_origin;
    this.competitor = competitor;
    this.size = size;
    this.gsm = gsm;
    this.price = price;
    this.colour_number = colour_number;
    this.speciality = speciality;
    this.pile_count = pile_count;
    this.pile_length = pile_length;
    this.pick = pick;
    this.reed = reed;
    this.patent = patent;
    this.attributes = attributes;
    this.popular_product = popular_product;
    this.new_addition = new_addition;
    this.fashion_line = fashion_line;
    this.homepage_popular_product = homepage_popular_product;
    this.homepage_new_addition = homepage_new_addition;
    this.homepage_our_patent = homepage_our_patent;
    this.homepage_fashion_line = homepage_fashion_line;
    this.create_datetime = create_datetime;
    this.last_updated = last_updated;
    this.created_by = created_by;
    this.updated_by = updated_by;
    this.is_deleted = is_deleted;
  }
}
module.exports = towelOrder;

// update dbo.towelsample set xcolumn=@xcolumn, ycolumn=@ycolumn, last_updated=getDate() where section_name=@section_name and towel_id=@towel_id
// insert into dbo.TowelSample (xcolumn, ycolumn,crby)
// value(@xcolumn,@ycolumn,login_details)
