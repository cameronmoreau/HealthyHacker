(function() {
    'use strict';
    var app = angular.module('service.hackathon', []);

    app.factory('Hackathon', function() {
        var hackathons = [
            {
                name: 'SuperHack',
                team: 4,
                date: new Date('2014-10-10T03:00:00')
            },
            {
                name: 'TAMU Hack',
                team: 4,
                date: new Date('2014-09-17T01:24:00')
            }, {
                name: 'HackDFW',
                team: 4,
                date: new Date('2014-03-01T03:24:00')
            }
        ];

        return {
            listProjects: function() {
                return hackathons;
            },
            addProject: function(data) {
                hackathons.push(data);
            },
            getLastStartTime: function() {
                var cDate = new Date().getTime();
                for(var i = 0; i < hackathons.length; i++) {
                    var hDate = hackathons[0].date.getTime();
                    if(cDate - hDate < 864000007) {
                        return hDate;
                    }
                }
            }
        }
    });

})();
