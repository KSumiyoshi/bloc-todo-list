(function(){
  function HomeCtrl($firebaseArray){
    // TODO: set up firebase
    // var ref = firebase.database().ref().child("current-todos");

    // this.data = $firebaseArray(ref);
    this.data = [{
      name: "Task #1",
      completed: true
    },
    {
      name: "Task #2",
      completed: false
    },
    {
      name: "Task #3",
      completed: false
    }]
    this.myHomeCtrlArray = [1, 2, 3, 4, 5];
  }

  angular
    .module('todoList')
    .controller('HomeCtrl',  ['$firebaseArray', HomeCtrl]);
})()
