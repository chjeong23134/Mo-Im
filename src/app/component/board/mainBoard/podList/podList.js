class PodListController {
    constructor() {
        this.podList = [
            {
                name: "Pod 1"
            },
            {
                name: "Pod 2"
            },
            {
                name: "Pod 3"
            }
        ]
    }
}

export default {
    controller: PodListController,
    template: require('./podList.html'),
    controllerAs: '$ctrl',
    bindings: {}
}