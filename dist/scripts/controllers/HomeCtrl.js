(function(){
  function HomeCtrl($firebaseArray){
    // TODO: set up firebase
    // var ref = firebase.database().ref().child("current-todos");

    // this.data = $firebaseArray(ref);
    this.data = [{
      task: "Task #1"
    },
    {
      task: "Task #2"
    },
    {
      task: "Task #3"
    }]
    this.myHomeCtrlArray = [1, 2, 3, 4, 5];
  }

  angular
    .module('todoList')
    .controller('HomeCtrl',  ['$firebaseArray', HomeCtrl]);
})()
