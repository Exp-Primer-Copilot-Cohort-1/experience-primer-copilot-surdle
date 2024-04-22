function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skilss/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    }
}