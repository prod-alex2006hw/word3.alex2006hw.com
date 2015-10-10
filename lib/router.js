Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
//home route
    this.route('/', {
    path: '/',
    template: 'home'
  });

//faq route
this.route('questions', {
    path: '/faq',
    template: 'questions'
  });

//word3 route
  this.route('word3', {
    path: '/word3',
    template: 'word3'
  });
});

