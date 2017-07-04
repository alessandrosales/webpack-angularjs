import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'

import angular from "angular";
import { mainCtrl } from "./mainCtrl";

angular.module("app", []);
angular.module("app").controller("mainCtrl", mainCtrl);