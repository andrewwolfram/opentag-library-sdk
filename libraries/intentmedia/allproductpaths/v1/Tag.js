qubit.opentag.LibraryTag.define("intentmedia.sca.v1.Tag", {
    config: {
	/*DATA*/
        name: "Intent Media - Search Compare Ads",
        description: "Collects user travel search data in order to serve and measure comparison travel ads across Flight, Hotel, and Car booking paths",
        html: "",
        parameters: [{
            name: "Intent Media Site Name",
            description: "Unique site id provided by Intent Media",
            token: "site_name",
            uv: ""
        }, {
            name: "Intent Media Page ID",
            description: "Unique page id provided by Intent Media",
            token: "page_id",
            uv: ""
        }, {
            name: "Site country",
            description: "2 letter ISO country code of the website version that was loaded",
            token: "site_country",
            uv: ""
        }, {
            name: "Site language",
            description: "2 letter ISO code for the language the website page is rendered in",
            token: "site_language",
            uv: ""
        }, {
            name: "Site currency",
            description: "3 letter ISO currency code for the transaction",
            token: "site_currency",
            uv: ""
        }, {
            name: "Dispay format type",
            description: "Device-specific version of the website that was loaded - DESKTOP or MOBILE",
            token: "display_format_type",
            uv: ""
        }, {
            name: "User member id",
            description: "Unique registered user id to identify logged-in users", 
            token: "user_member_id",
            uv: ""
        }, {
            name: "Visitor id",
            description: "Unique user id persistent at least across the entire booking transaction session",
            token: "visitor_id",
            uv: ""
        }, {
            name: "Referrer source",
            description: "Specific site where the user came from - Google/Bing, etc.",
            token: "referrer_source",
            uv: ""
        }, {
            name: "Referrer channel",
            description: "Which marketing channel acquired the user - (SEM/SEO/Meta, etc.)",
            token: "referrer_channel",
            uv: ""
        }, {
            name: "Active member profile",
            description: "Member profile contains data beyond initial account creation default (i.e. loyalty points, preferred airline, written reviews, etc.)",
            token: "active_member_profile",
            uv: ""
        }, {
            name: "Tag path",
            description: "Mandatory value for the tag path - default value is '//a.cdn.intentmedia.net/javascripts/v1/intent_media_core.js",
            token: "tag_path",
            defaultValue: "//a.cdn.intentmedia.net/javascripts/v1/intent_media_core.js",
            uv: ""
        }, {
            name: "Show on-page ads",
            description: "Controls whether the existing on-page ads (intercard and rail) are shown or not - Y/N",
            token: "show_onpage_ads",
            uv: ""
        }, {
            name: "Show exit units",
            description: "Controls whether the existing exit units are shown or not - Y/N",
            token: "show_exit_units",
            uv: ""
        }, {
            name: "High value",
            description: "Intent Media system value",
            token: "is_hv",
            uv: ""
        }, {
            name: "Low value",
            description: "Intent Media system value",
            token: "is_lv",
            uv: ""
        }, {
            name: "Travel start date",
            description: "Required format YYYYMMDD",
            token: "travel_date_start",
            uv: ""
        }, {
            name: "Travel end date",
            description: "Required format YYYYMMDD", 
            token: "travel_date_end",
            uv: ""
        }, {
            name: "Travelers",
            description: "Total number of travelers (adults+children+seniors)",
            token: "travelers",
            uv: ""
        }, {
            name: "Adults",
            description: "Number of adult travelers", 
            token: "adults",
            uv: ""
        }, {
            name: "Children",
            description: "Number of children travelers",
            token: "children",
            uv: ""
        }, {
            name: "Seniors",
            description: "Number of senior travelers",
            token: "seniors",
            uv: ""
        }, {
            name: "Trip type",
            description: "Flights only - roundtrip/oneway (do not traffic tag on multicity searches)",
            token: "trip_type",
            uv: ""
        }, {
            name: "Flight class of service",
            description: "Class of airline ticket - FirstClass/BusinessClass/EconomyClass/PremiumClass",
            token: "flight_class_of_service",
            uv: ""
        }, {
            name: "Flight origin",
            description: "3 letter airport code - Origin",
            token: "flight_origin",
            uv: ""
        }, {
            name: "Flight destination",
            description: "3 letter airport code - Destination",
            token: "flight_destination",
            uv: ""
        }, {
            name: "Hotel city",
            description: "City of searched, selected or booked hotel property (in English language)", 
            token: "hotel_city",
            uv: ""
        }, {
            name: "Hotel country",
            description: "2 letter ISO country code of searched, selected or booked hotel property",
            token: "hotel_country",
            uv: ""
        }, {
            name: "Hotel state",
            description: "2 letter ISO state code of searched, selected or booked hotel property - US & Canada only",
            token: "hotel_state",
            uv: ""
        }, {
            name: "Hotel rooms",
            description: "Number of hotel rooms booked",
            token: "hotel_rooms",
            uv: ""
        }, {
            name: "Number of opaque listings",
            description: "Number of opaque listings in search results - list page only, set to 0 if all are retail",
            token: "number_of_opaque_listings",
            uv: ""
        }, {
            name: "Car trip type",
            description: "roundtrip/oneway",
            token: "car_trip_type",
            uv: ""
        }, {
            name: "Car pickup location type",
            description: "Valid values: AIRPORT, CITY",
            token: "car_pickup_location_type",
            uv: ""
        }, {
            name: "Car pickup airport",
            description: "3 letter airport code if pickup location is airport",
            token: "car_pickup_airport",
            uv: ""
        }, {
            name: "Car pickup city",
            description: "City name if pickup location is city",
            token: "car_pickup_city",
            uv: ""
        }, {
            name: "Car pickup state",
            description: "2 letter ISO state code for state if pickup location is city - US & Canada only",
            token: "car_pickup_state",
            uv: ""
        }, {
            name: "Car pickup country",
            description: "2 letter ISO country code if pickup location is city",
            token: "car_pickup_country",
            uv: ""
        }, {
            name: "Car pickup time",
            description: "Pickup time per pickup timezone - 0000-2359",
            token: "car_pickup_time",
            uv: ""
        }, {
            name: "Car dropoff location type",
            description: "Valid values: AIRPORT, CITY",
            token: "car_dropoff_location_type",
            uv: ""
        }, {
            name: "Car dropoff airport",
            description: "3 letter airport code if dropoff location is airport",
            token: "car_dropoff_airport",
            uv: ""
        }, {
            name: "Car dropoff city",
            description: "City name if dropoff location is city",
            token: "car_dropoff_city",
            uv: ""
        }, {
            name: "Car dropoff state",
            description: "2 letter ISO state code for state if dropoff location is city - US & Canada only",
            token: "car_dropoff_state",
            uv: ""
        }, {
            name: "Car dropoff country",
            description: "2 letter ISO country code if pickup location is city",
            token: "car_dropoff_country",
            uv: ""
        }, {
            name: "Car dropoff time",
            description: "Dropoff time per dropoff timezone - 0000-2359",
            token: "car_dropoff_time",
            uv: ""
        }, {
            name: "Package type",
            description: "Indicate the combination of products included in the package - e.g. FLIGHT+HOTEL/HOTEL+CAR/FLIGHT+CRUISE/etc.",
            token: "package_type",
            uv: ""
        }, {
            name: "Total conversion value",
            description: "Confirmation page only. Total conversion value of the hotel, car, flight or package booking - no currency symbol, 2 decimal places", 
            token: "total_conversion_value",
            uv: ""
        }, {
            name: "Order id",
            description: "Confirmation page only. Order ID of the booking",
            token: "order_id",
            uv: ""
        }, {
            name: "Flight carrier code",
            description: "Confirmation page only. Airline code of booked flight",
            token: "flight_carrier_code",
            uv: ""
        }, {
            name: "Hotel property id",
            description: "ID of selected or booked hotel property",
            token: "hotel_property_id",
            uv: ""
        }, {
            name: "Hotel market id",
            description: "Market ID of searched, selected or booked hotel property",
            token: "hotel_market_id",
            uv: ""
        }, {
            name: "Hotel brand code",
            description: "Chain code for hotel brand in user's search, or of selected/booked property", 
            token: "hotel_brand_code",
            uv: ""
        }, {
            name: "Hotel value in package",
            description: "Package Purchase amount of the hotel only - no currency symbol, 2 decimal places", 
            token: "hotel_value_in_package",
            uv: ""
        }, {
            name: "Conversion type",
            description: "Type of hotel product that was purchased (if applicable) - OPAQUE/RETAIL",
            token: "conversion_type",
            uv: ""
        }, {
            name: "Promotional code",
            description: "Was there a promotion code applied? Y/N",
            token: "promo_code",
            uv: ""
        }, {
            name: "Car class",
            description: "Car class - ECONOMY/COMPACT/INTERMEDIATE/STANDARD/FULL-SIZE/PREMIUM/LUXURY/SUV/MINI-VAN/CONVERTIBLE/PICKUP-TRUCK",
            token: "car_class",
            uv: ""
        }, {
            name: "Car rental agency",
            description: "The name of the car rental agency the user purchased with on the confirmation page - Enterprise/Avis/National/Budget/Hertz/Advantage/Dollar/Alamo/Fox/Ace/Thrifty/Alamo/Payless/E-Z",
            token: "car_rental_agency",
            uv: ""
        }, {
            name: "Site reporting value 1",
            description: "Intent Media System Value",
            token: "site_reporting_value_01",
            uv: ""
        }, {
            name: "Site reporting value 2",
            description: "Intent Media System Value",
            token: "site_reporting_value_02",
            uv: ""
        }, {
            name: "Site reporting value 3",
            description: "Intent Media System Value",
            token: "site_reporting_value_03",
            uv: ""
        }, {
            name: "Site reporting value 4",
            description: "Intent Media System Value",
            token: "site_reporting_value_04",
            uv: ""
        }, {
            name: "Site reporting value 5",
            description: "Intent Media System Value",
            token: "site_reporting_value_05",
            uv: ""
        }, {
            name: "Site reporting value 6",
            description: "Intent Media System Value",
            token: "site_reporting_value_06",
            uv: ""
        }, {
            name: "Site reporting value 7",
            description: "Intent Media System Value",
            token: "site_reporting_value_07",
            uv: ""
        }, {
            name: "Custom value 1",
            description: "Intent Media System Value",
            token: "custom_01",
            uv: ""
        }, {
            name: "Custom value 2",
            description: "Intent Media System Value",
            token: "custom_02",
            uv: ""
        }, {
            name: "Custom value 3",
            description: "Intent Media System Value",
            token: "custom_03",
            uv: ""
        }, {
            name: "Custom value 4",
            description: "Intent Media System Value",
            token: "custom_04",
            uv: ""
        }, {
            name: "Custom value 5",
            description: "Intent Media System Value",
            token: "custom_05",
            uv: ""
        }, {
            name: "Custom value 6",
            description: "Intent Media System Value",
            token: "custom_06",
            uv: ""
        }, {
            name: "Custom value 7",
            description: "Intent Media System Value",
            token: "custom_07",
            uv: ""
        }, {
            name: "Custom value 8",
            description: "Intent Media System Value",
            token: "custom_08",
            uv: ""
        }, {
            name: "Custom value 9",
            description: "Intent Media System Value",
            token: "custom_09",
            uv: ""
        }, {
            name: "Custom value 10",
            description: "Intent Media System Value",
            token: "custom_10",
            uv: ""
        }]
	/*~DATA*/
    },

    script: function () {
	/*SCRIPT*/
            var script = document.createElement("script");
            var url = window.IntentMediaProperties.tag_path; 
            script.src = url;
            script.async = true;
            document.getElementsByTagName("head")[0].appendChild(script);
    	/*~SCRIPT*/
    },

    pre: function () {
	/*PRE*/
        window.IntentMediaProperties = {
            site_name: '' + this.valueForToken("site_name"), 
            page_id: '' + this.valueForToken("page_id"), 
            site_country: '' + this.valueForToken("site_country"), 
            site_language: '' + this.valueForToken("site_language"), 
            site_currency: '' + this.valueForToken("site_currency"), 
            display_format_type: '' + this.valueForToken("display_format_type"), 

            user_member_id: '' + this.valueForToken("user_member_id"), 
            visitor_id: '' + this.valueForToken("visitor_id"), 
            referrer_source: '' + this.valueForToken("referrer_source"), 
            referrer_channel: '' + this.valueForToken("referrer_channel"), 
            active_member_profile: '' + this.valueForToken("active_member_profile"), 
            
            tag_path: '' + this.valueForToken("tag_path"),
            show_onpage_ads: '' + this.valueForToken("show_onpage_ads"),
            show_exit_units: '' + this.valueForToken("show_exit_units"),
            is_hv: '' + this.valueForToken("is_hv"),
            is_lv: '' + this.valueForToken("is_lv"),
            
            travel_date_start: '' + this.valueForToken("travel_date_start"), 
            travel_date_end: '' + this.valueForToken("travel_date_end"), 
            travelers: '' + this.valueForToken("travelers"), 
            adults: '' + this.valueForToken("adults"), 
            children: '' + this.valueForToken("children"), 
            seniors: '' + this.valueForToken("seniors"), 

            trip_type: '' + this.valueForToken("trip_type"),
            flight_class_of_service: '' + this.valueForToken("flight_class_of_service"),
            flight_origin: '' + this.valueForToken("flight_origin"),
            flight_destination: '' + this.valueForToken("flight_destination"),

            hotel_city: '' + this.valueForToken("hotel_city"), 
            hotel_country: '' + this.valueForToken("hotel_country"), 
            hotel_state: '' + this.valueForToken("hotel_state"), 
            hotel_rooms: '' + this.valueForToken("hotel_rooms"), 
            number_of_opaque_listings: '' + this.valueForToken("number_of_opaque_listings"), 

            car_trip_type: '' + this.valueForToken("car_trip_type"),
            car_pickup_location_type: '' + this.valueForToken("car_pickup_location_type"),
            car_pickup_airport: '' + this.valueForToken("car_pickup_airport"),
            car_pickup_city: '' + this.valueForToken("car_pickup_city"),
            car_pickup_state: '' + this.valueForToken("car_pickup_state"),
            car_pickup_country: '' + this.valueForToken("car_pickup_country"),
            car_pickup_time: '' + this.valueForToken("car_pickup_time"),
            car_dropoff_location_type: '' + this.valueForToken("car_dropoff_location_type"),
            car_dropoff_airport: '' + this.valueForToken("car_dropoff_airport"),
            car_dropoff_city: '' + this.valueForToken("car_dropoff_city"),
            car_dropoff_state: '' + this.valueForToken("car_dropoff_state"),
            car_dropoff_country: '' + this.valueForToken("car_dropoff_country"),
            car_dropoff_time: '' + this.valueForToken("car_dropoff_time"),

            package_type: '' + this.valueForToken("package_type"),

            total_conversion_value: '' + this.valueForToken("total_conversion_value"), 
            order_id: '' + this.valueForToken("order_id"), 
            conversion_type: '' + this.valueForToken("conversion_type"), 
            promo_code: '' + this.valueForToken("promo_code"), 
            flight_carrier_code: '' + this.valueForToken("flight_carrier_code"),
            hotel_property_id: '' + this.valueForToken("hotel_property_id"),
            hotel_market_id: '' + this.valueForToken("hotel_market_id"),
            hotel_brand_code: '' + this.valueForToken("hotel_brand_code"), 
            hotel_value_in_package: '' + this.valueForToken("hotel_value_in_package"),
            car_class: '' + this.valueForToken("car_class"), 
            car_rental_agency: '' + this.valueForToken("car_rental_agency"),

            site_reporting_value_01: '' + this.valueForToken("site_reporting_value_01"), 
            site_reporting_value_02: '' + this.valueForToken("site_reporting_value_02"), 
            site_reporting_value_03: '' + this.valueForToken("site_reporting_value_03"), 
            site_reporting_value_04: '' + this.valueForToken("site_reporting_value_04"), 
            site_reporting_value_05: '' + this.valueForToken("site_reporting_value_05"), 
            site_reporting_value_06: '' + this.valueForToken("site_reporting_value_06"), 
            site_reporting_value_07: '' + this.valueForToken("site_reporting_value_07"), 
            custom_01: '' + this.valueForToken("custom_01"),
            custom_02: '' + this.valueForToken("custom_02"),
            custom_03: '' + this.valueForToken("custom_03"),
            custom_04: '' + this.valueForToken("custom_04"),
            custom_05: '' + this.valueForToken("custom_05"),
            custom_06: '' + this.valueForToken("custom_06"),
            custom_07: '' + this.valueForToken("custom_07"),
            custom_08: '' + this.valueForToken("custom_08"),
            custom_09: '' + this.valueForToken("custom_09"),
            custom_10: '' + this.valueForToken("custom_10")
        };
    	/*~PRE*/
    },

    post: function() {
	/*POST*/
	/*~POST*/
    }
});
