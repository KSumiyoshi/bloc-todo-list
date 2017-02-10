(function(){
    
    function completedTask($firebaseArray){
     return {
         template: '<input ng-model="task.completed" type="checkbox" class="one-line" ng-change="taskCompleted(task)"/>', 
         replace: true,
         restrict: 'E',
         scope: { task:"="},
         link: function(scope, element, attributes) {
             var ref = firebase.database().ref().child("active");
                var data = $firebaseArray(ref);

             scope.taskCompleted = function(task){
                 data.$save(task);
             }
         }
     }   
    }
     angular
        .module('todoList')
        .directive('completedTask',  ['$firebaseArray', completedTask]);
})()
