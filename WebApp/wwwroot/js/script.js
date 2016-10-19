angular.module('colorApp', [])
    .controller('ColorController', ['$http', function($http){
        var vm = this;
        vm.blocks = [];

        for(var i  = 0; i < 200; i++){
            var block = {
                updateColor  : updateColor
            };

            block.updateColor(block);
            vm.blocks.push(block);
        }            

        vm.blocks.forEach(function(block){
            var interval = 4000;
            setInterval(function() {
                block.updateColor(block);
            }, interval);               
        });

        function updateColor(item){
            $http({
                method: 'GET',
                url:'http://pedro.westeurope.cloudapp.azure.com:8080/api/values'                
            }).then(function(response){
                item.color = response.data;
            });                
        }
    }]);