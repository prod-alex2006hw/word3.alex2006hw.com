var wordsURL='mongodb://ro:ro@ds037283.mongolab.com:37283/word3';
var wordsDriver = new MongoInternals.RemoteCollectionDriver(wordsURL);
Words = new Mongo.Collection("words", { _driver: wordsDriver });

if(Meteor.isServer) {

  Meteor.publish('words', function(){
    return Words.find();
  });
}

Meteor.methods({
  addword3: function(text){
    if(!Meteor.userId()) {
      throw new Meteor.Error('Not Authorized');
    }
    Words.insert({
      text: text,
      createdAt: new Date(),
      userId: Meteor.userId(),
      username: Meteor.user().username
    });
  },
  deleteword3: function(wordId){
    var word = Words.findOne(wordId);
    if(word.userId !== Meteor.userId()){
      throw new Meteor.Error('Not Authorized');
    }
    Words.remove(wordId);
  },
  setChecked: function(wordId, setChecked){
    var word = Words.findOne(wordId);
    if(word.userId !== Meteor.userId()){
        throw new Meteor.Error('Not Authorized');
      }
    Words.update(wordId, {$set: {checked: setChecked}});
    }

});

