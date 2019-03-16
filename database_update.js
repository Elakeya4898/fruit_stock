 use anychart_db   
var N = 100000000000;
		

for ( var i=0; i<N; i++ ) {
db.fruits.find().forEach(function(fruit) {
  db.fruits.update({_id: fruit._id}, {$set: {"value": Math.floor(Math.random() * 30)}})
})
sleep(1000)
}



