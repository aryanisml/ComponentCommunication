(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('myapp')
        .component('parentComponent', {
            templateUrl:'parentComponent.html',
            //templateUrl: 'templateUrl',
            controller: ParentController,
            controllerAs: '$ctrl'//,
            // bindings: {
            //     Binding: '=',
            // },
        });

    //ParentController.$inject = ['dependency1'];
    function ParentController() {
        var $ctrl = this;
        $ctrl.show=function(value){
            console.log(value);
            alert(value.description);
            alert(45);
        };
        $ctrl.diffClick=function(value){
            alert(value.EmployeeName);
        };
        ////////////////

        $ctrl.$onInit = function() { 
            $ctrl.hero=[{'name':'D'},{'name':'A'},{'name':'B'},{'name':'C'}];
            $ctrl.heroTwoWayBinding="Swapnil";
            $ctrl.primitiveValue='On Change Example()';
            $ctrl.enterInfo='2';
            $ctrl.enterArray=[];
           $ctrl.view='Communication';
           // $ctrl.enterMyData="Swapnil";

            
        };


        $ctrl.enterValueData=function(){
          
            switch ($ctrl.enterInfo) {
                case '2':
                    $ctrl.enterArray.push({name:'A'});
                    break;
                    case '3':
                    $ctrl.enterArray.push({name:'B'});
                    break;
                    case '4':
                    $ctrl.enterArray.push({name:'C'});
                    break;
                    case '5':
                    $ctrl.enterArray.push({name:'D'});
                    break;
                default:
                    $ctrl.enterArray.push({name:'E'});
                    break;
                    
            } 
        };

        $ctrl.$onChanges = function(changesObj) { };
        $ctrl.Add=function(){
             $ctrl.hero.push({'name':$ctrl.sites});
             console.log($ctrl.hero);
        };
        $ctrl.$onDestroy = function() { };
    }
})();
