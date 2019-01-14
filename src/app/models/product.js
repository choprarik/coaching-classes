var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProductSchema   = new Schema({
    productId: number,
    productName: string,
    productCode: string,
    releaseDate: string,
    price: number,
    description: string,
    starRating: number,
    imageUrl: string
});

module.exports = mongoose.model('Product', ProductSchema);