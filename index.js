var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/harryKart', {useNewUrlParser: true,
useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
    // we're connected!
    console.log('we are connected...')
})


// schema means telling mongodb what should be the structure
var kittySchema = new mongoose.Schema({
    name:String,
});

kittySchema.methods.speak = function(){
    var greeting = "my name is " + this.name
    console.log(greeting);
}

// model is the compiled schema
// mongoose automatically makes a collection with plural name of the model
// in this case it made Kittens from Kitten
var kitten = mongoose.model('Kitten', kittySchema);

var harryKitty = new kitten({name: 'harryKitty name'})
console.log(harryKitty.name)
harryKitty.speak()


harryKitty.save(function(err, harryKity){
    if(err) throw err;
    harryKitty.speak()
})

var jatinKitty = new kitten({name: 'jatin kitty name'})
console.log(jatinKitty.speak())
jatinKitty.save(function(err, jatinKitty){
    if(err) throw err
    jatinKitty.speak()
})

kitten.find({name: 'jatin kitty name'}, function(err, kittens){
    if(err) throw err
    console.log(kittens)
})


