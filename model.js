/**
 * Created by Administrator on 2017/4/16.
 */
let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/201615crawl');
let MovieSchema = new mongoose.Schema({
    name:String,
    url:String
});
exports.Movie = mongoose.model('Movie',MovieSchema);