(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('myapp')
        .component('childComponent1', {
            templateUrl:'childComponent1.html',
            //templateUrl: 'templateUrl',
            controller: ControllerChild1,
            controllerAs: '$ctrl',
            bindings: {
                //Binding: '=',
                enterValue:'=',
                enterValueData:'&',
                view:'<',
                onViewChange:'&'

            },
        });

   // ControllerChild1.$inject = ['dependency1'];
    function ControllerChild1() {
        var $ctrl = this;
        $ctrl.onViewChanges=function(){
            $ctrl.view="swa";
            $ctrl.onViewChange({$event: {view:$ctrl.view}});
        };

        ////////////////

        $ctrl.$onInit = function() { 

            $ctrl.enterMyData="Parent Component";
        };
        $ctrl.$onChanges = function(changesObj) { };
        $ctrl.$onDestroy = function() { };
    }
})();
