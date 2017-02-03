(function(){
  function HomeCtrl($firebaseArray){
    // TODO: set up firebase
    var ref = firebase.database().ref().child("active");

    this.data = $firebaseArray(ref);
    this.name = "Enter task name here";
    var self = this;

    this.data.$loaded().then(function(){
      var currentTime = new Date();

      self.data.forEach(function(todo){
        console.log(todo.createdAt);
        // 30 seconds in milliseconds: 30000
        if( !todo.expired && (currentTime.getTime() - todo.createdAt >= 30000)){
          todo.expired = true;
          self.data.$save(todo);
        }
      })
    });
    
    this.taskCompleted = function(task){
      this.data.$save(task);
    }
    this.addTask = function(name) {
      this.data.$add({
       name: name,
       createdAt: firebase.database.ServerValue.TIMESTAMP,
       completed: false,
       expired: false
     });
    }

    this.removeTask = function(task){
      // https://www.firebase.com/docs/web/libraries/angular/api.html#angularfire-firebasearray-removerecordorindex
    }
  }

  angular
    .module('todoList')
    .controller('HomeCtrl',  ['$firebaseArray', HomeCtrl]);
})()
