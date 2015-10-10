var app = angular.module('service.task', []);

app.factory('Task', function() {
    var tasks = [
        {
            icon: '',
            message: 'Stand up',
            time: 1,
            productivity: 'ok'
        },
        {
            icon: '',
            message: 'Torso stretch',
            time: 1,
            productivity: 'good'
        },
        {
            icon: '',
            message: 'Arm over stretch',
            time: 1,
            productivity: 'ok'
        },
        {
            icon: '',
            message: 'Back stretch',
            time: 1,
            productivity: 'good'
        },
        {
            icon: '',
            message: 'Neck rolls',
            time: 1,
            productivity: 'good'
        },
        {
            icon: '',
            message: 'Wrist stretch',
            time: 1,
            productivity: 'good'
        },
        {
            icon: '',
            message: 'Socialize',
            time: 1,
            productivity: 'ok'
        },
        {
            icon: '',
            message: 'Make some new friends',
            time: 1,
            productivity: 'ok'
        },
        {
            icon: '',
            message: 'Checkout other projects',
            time: 1,
            productivity: 'bad'
        },
        {
            icon: '',
            message: 'Grab quick coffee and get back to work',
            time: 1,
            productivity: 'bad'
        },
        {
            icon: '',
            message: 'Grab a snack and get back to work',
            time: 1,
            productivity: 'bad'
        },
        {
            icon: '',
            message: 'Grab some lunch',
            time: 1,
            productivity: 'ok'
        },
        {
            icon: '',
            message: 'Grab some breakfast',
            time: 1,
            productivity: 'ok'
        },
        {
            icon: '',
            message: 'Grab some dinner',
            time: 1,
            productivity: 'ok'
        },
        {
            icon: '',
            message: 'Go for a walk',
            time: 1,
            productivity: 'good'
        },
        {
            icon: '',
            message: 'Lay down',
            time: 1,
            productivity: 'realgood'
        },
        {
            icon: '',
            message: 'Take a nap',
            time: 1,
            productivity: 'realgood'
        },
        {
            icon: '',
            message: 'Get some fresh air',
            time: 1,
            productivity: 'ok'
        },
        {
            icon: '',
            message: 'Go exploring',
            time: 1,
            productivity: 'ok'
        },
        {
            icon: '',
            message: 'Talk to sponsors',
            time: 1,
            productivity: 'ok'
        },
        {
            icon: '',
            message: 'Take a snapchat of your project to show your progress to the entire world',
            time: 1,
            productivity: 'good'
        },
    ];

    return {
        getTask: function(p){ 
            var list = [];
            angular.forEach(tasks, function(item){
                if (item.productivity == p )
                    list.push(item.message);
                    
            });
            return list;


           
        }
    

}
});
