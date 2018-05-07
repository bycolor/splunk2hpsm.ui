//
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
			//appSplunkForm.$refs.splunkForm.submit();
			var data = {
				params: {
					user: appSplunkForm.$refs.splunkUser.value,
					pass: appSplunkForm.$refs.splunkPass.value,
				},
				emulateJSON : true,
				method: "GET"
			};

			this.$http.get('http://localhost:8000/api/splunk/sessionkey', data)
			.then(function(response) {
				debugger; // 2
            	this.quote = response;
			})
			.catch(function(err) {
				// 
			});
		}
	}
});