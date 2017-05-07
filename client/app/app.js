import 'normalize.css';
import './app.styl'; 
import angular from "angular";
import ngAnimate from 'angular-animate';      // return a string
import {home} from './components/home/home';
 
angular.module('app', [
  ngAnimate,
  home.name
]);
