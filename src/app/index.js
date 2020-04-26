import angular from "angular";
import ngRouter from "angular-route";
import uiRoute from "@uirouter/angularjs";

import navBar from "./component/navBar/navBar";

import loginBoard from "./component/board/loginBoard/loginBoard";

import mainBoard from "./component/board/mainBoard/mainBoard";
import podList from "./component/board/mainBoard/podList/podList";
import topicList from "./component/board/mainBoard/topicList/topicList";
import topicDetail from "./component/board/mainBoard/topicDetail/topicDetail";

angular.module("ngApp",[uiRoute])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('login', loginBoard);
        $stateProvider.state('main', mainBoard);

        $stateProvider.state('list', topicList);
        $stateProvider.state('detail', topicDetail);
    })
    .component("cNavBar", navBar)
    .component("cPodList", podList);

