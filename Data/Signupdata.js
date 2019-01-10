
module.exports = function(){
Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('');
};
function randInt() {
 for (var i = 0; i < 10; i++){
  var rndmNumb = Math.floor((Math.random()*100)+1);
 }
 return rndmNumb;
 };
function email () {
  var result = `TestUser${name}${randInt()}@mailinator.com`;
return result;
}

var date = new Date();
var name = date.yyyymmdd();
var emailRandom = email();
return emailRandom
};
