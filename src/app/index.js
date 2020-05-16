import angular from "angular";
import ngRouter from "angular-route";
import uiRoute from "@uirouter/angularjs";

import navBar from "./component/navBar/navBar";

import mainBoard from "./component/board/mainBoard";
import podList from "./component/board/podList/podList";
import topicList from "./component/board/topicList/topicList";
import topicDetail from "./component/board/topicDetail/topicDetail";

angular.module("ngApp",[uiRoute])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('main', mainBoard);

        $stateProvider.state('list', topicList);
        $stateProvider.state('detail', topicDetail);
    })
    .component("cNavBar", navBar)
    .component("cPodList", podList);

