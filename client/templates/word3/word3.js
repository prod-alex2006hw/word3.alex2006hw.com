Words = new Mongo.Collection('words');

if (Meteor.isClient) {
  Meteor.subscribe('words');

  Template.word3.helpers({
    wordlist: function () {
      return Words.find();
    },
  });

  Template.word3.events({
    "submit .new-word3": function(event){
      var text = event.target.text.value;
      Meteor.call('addword3', text);

      // clear form
      event.target.text.value = '';
      // prevent default
      return false;
    },
    "click .toggle-checked": function(){
      Meteor.call('setChecked', this._id, !this.checked);
    },
    "click .delete-word3": function(){
      if(confirm('Are you sure?')){
        Meteor.call('deleteword3', this._id);
      }
    }
  });

  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
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
  deleteword3: function(word3Id){
    var word3 = Words.findOne(word3Id);
    if(word3.userId !== Meteor.userId()){
      throw new Meteor.Error('Not Authorized');
    }
    Words.remove(word3Id);
  },
  setChecked: function(word3Id, setChecked){
    var word3 = Words.findOne(word3Id);
    if(word3.userId !== Meteor.userId()){
        throw new Meteor.Error('Not Authorized');
      }
    Words.update(word3Id, {$set: {checked: setChecked}});
    }

});


