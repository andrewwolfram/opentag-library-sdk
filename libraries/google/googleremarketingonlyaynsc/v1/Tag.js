//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("google.googleremarketingonlyaynsc.v1.Tag", {
	config: {
		/*DATA*/
		name: "Google Remarketing Only Aynsc",
		async: true,
		description: "Remarkting Only Conversion tracking is a tool to help you measure conversions, and ultimately help you identify how effective your Ad Exchange ads are for you.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Google Conversion ID",
			description: "",
			token: "conversionid",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		var _this = this;
		var poll = function() {
			if (window.google_trackConversion) {
				window.google_trackConversion({
					google_conversion_id: "" + _this.valueForToken("conversionid"),
					google_remarketing_only: true,
					google_custom_params: window.google_tag_params || {}
				});
			} else {
				setTimeout(poll, 250);
			}
		};
		poll();
		/*~POST*/
	}
});