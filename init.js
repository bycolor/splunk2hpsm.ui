 var appHomepage = new Vue({
    el: '#header',
    data: {
      title: 'Splunk 2 HPSM'
    }
 });

 var appSplunkForm = new Vue({
    el: '#splunk-form-holder',
    data: {

	},
	methods: {
		getSplunkSessionkey: function(el) {
			console.debug('getSplunkSessionkey - el: ', el);
			debugger;
			appSplunkForm.$refs.splunkForm.submit();
		}
	}
 });