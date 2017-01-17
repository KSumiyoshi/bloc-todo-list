(function(){
  function HomeCtrl($firebaseArray){
    // TODO: set up firebase
    var ref = firebase.database().ref().child("active");

    this.data = $firebaseArray(ref);
    this.name = "Enter task name here";
    // this.data = [{
    //   name: "Task #1",
    //   createdAt: new Date(),
    //   completed: false,
    //   expired: false
    // },
    // {
    //   name: "Task #2",
    //   createdAt: new Date(),
    //   completed: false,
    //   expired: true
    // },
    // {
    //   name: "Task #3",
    //   completed: false
    //   createdAt: new Date(),
    //   completed: false,
    //   expired: false
    // }]
    this.myHomeCtrlArray = [1, 2, 3, 4, 5];
    this.addTask = function(name) {
        this.data.$add({
       name: name,
       createdAt: new Date(),
       completed: false,
       expired: false
     })    
    }  
  }

  angular
    .module('todoList')
    .controller('HomeCtrl',  ['$firebaseArray', HomeCtrl]);
})()
