
let request = require('request');
let iconv = require('iconv-lite');
let cheerio = require('cheerio');
let debug=require('debug')('crawl:read');
module.exports = function (url,callback) {
    request({url,encoding:null},function (err,response,body) {
        body = iconv.decode(body,'gbk');
        let $ = cheerio.load(body);
        let movies = [];
        $('.keyword a.list-title').each(function(index,item){
            let $this = $(this);
            let movie = {
                name:$this.text(),
                url:$this.attr('href')
            };
            debug(`读入电影:${movie.name}`);
            movies.push(movie);
        });
        callback(err,movies);
    })
};

