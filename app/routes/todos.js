import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return [
		  { text: 'Create Ember app'},
		  { text: 'Master Ember'}
		]
	}
});
