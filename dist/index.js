"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = void 0;

var _test = _interopRequireDefault(require("./test"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Code
 * 
 * createStore permet de créer un store
 * 
 * Un store est un objet avec une API publique de gestion du state
 * 
 * - getState() pour lire dans le state privé
 * - dispatch(action) pour écrire (demander à modifier) le state privé
 * 
 * Exemple d'utilisation :
 * 
 * - on a reducer pour une application de sondage qui gère l'action 'VOTE'
 * - on crée un store pour l'application : const myStore = createStore(reducer);
 *  - on exploite le store pour manipuler le state :
 * 
 *  mystore.getState() // => une copiue du state privé de ce store myStore
 *  myStore.dispatch({ type: 'VOTE', name: 'yes }); // l'idée ce que le state va évoluer
 * 
 */
var createStore = function createStore(reducer) {
  // On crée un state privé.
  var state = reducer(); // {}
  // return state;
  // return { ...state };
  // On crée et retourne un store (objet utilitaire).
  // Ce store protège l'accès au state.
  // L'objet correspond à l'API publique du store.

  return {
    // Méthode pour consulter (lire) le state courant (via une copie).
    getState: function getState() {
      return _objectSpread({}, state);
    },
    // Méthode pour agir (écrire) dans le state => modifier
    dispatch: function dispatch(action) {
      state = reducer(state, action);
    }
  };
};

exports.createStore = createStore;
