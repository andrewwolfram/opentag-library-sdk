//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("marinsoftware.productlevelconversion.v1.Tag", {
	config: {
		/*DATA*/
		name: "Product Level Conversion",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Array of Product SKU codes",
			description: "Array of Product SKU codes",
			token: "skus",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Array of Product Unit Sale Prices",
			description: "Array of Product Unit Sale Prices",
			token: "prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Array of Product Categories",
			description: "Array of Product Categories",
			token: "cats",
			uv: "universal_variable.transaction.line_items[#].product.category"
		}, {
			name: "Array or Product Quantities",
			description: "Array or Product Quantities",
			token: "quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Order ID",
			description: "Order ID",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Marin Conversion Type",
			description: "Marin Conversion Type",
			token: "conversion",
			uv: ""
		}, {
			name: "Order Currency",
			description: "Order Currency",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Marin Tracking ID",
			description: "Marin Tracking ID",
			token: "tracking_id",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		window._mTrack = window._mTrack || [];

		var items = [];

		for (var i = 0; i < this.valueForToken("skus").length; i++) {
			items.push({
				orderId: "" + this.valueForToken("order_id"),
				convType: "" + this.valueForToken("conversion"),
				product: this.valueForToken("skus")[i],
				price: this.valueForToken("prices")[i],
				category: this.valueForToken("cats")[i],
				quantity: this.valueForToken("quantities")[i]
			});
		}

		_mTrack.push(['addTrans', {
			currency: "" + this.valueForToken("currency"),
			items: items
		}]);

		_mTrack.push(['processOrders']);

		var mClientId = "" + this.valueForToken("tracking_id");
		var mProto = ('https:' == document.location.protocol ? 'https://' :
			'http://');
		var mHost = 'tracker.marinsm.com';
		var mt = document.createElement('script');
		mt.type = 'text/javascript';
		mt.async = true;
		mt.src = mProto + mHost + '/tracker/async/' + mClientId + '.js';
		var fscr = document.getElementsByTagName('script')[0];
		fscr.parentNode.insertBefore(mt, fscr);
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});