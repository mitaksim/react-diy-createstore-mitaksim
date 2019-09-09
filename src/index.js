/*
 * Import
 */
import test from './test';


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
export const createStore = (reducer) => {
    // On crée un state privé.
    let state = reducer(); // {}
  
  
    // return state;
    // return { ...state };
  
    // On crée et retourne un store (objet utilitaire).
    // Ce store protège l'accès au state.
    // L'objet correspond à l'API publique du store.
    return {
      // Méthode pour consulter (lire) le state courant (via une copie).
      getState: function() {
        return { ...state };
      },
  
       // Méthode pour agir (écrire) dans le state => modifier
      dispatch: function(action) {
        state = reducer(state, action);
      }
    };
  };	
  
  
  	
