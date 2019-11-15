jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 CustomerSet in the list
// * All 3 CustomerSet have at least one Contacts

sap.ui.require([
	"sap/ui/test/Opa5",
	"twm/net/ZFORMATION_09/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"twm/net/ZFORMATION_09/test/integration/pages/App",
	"twm/net/ZFORMATION_09/test/integration/pages/Browser",
	"twm/net/ZFORMATION_09/test/integration/pages/Master",
	"twm/net/ZFORMATION_09/test/integration/pages/Detail",
	"twm/net/ZFORMATION_09/test/integration/pages/Create",
	"twm/net/ZFORMATION_09/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "twm.net.ZFORMATION_09.view."
	});

	sap.ui.require([
		"twm/net/ZFORMATION_09/test/integration/MasterJourney",
		"twm/net/ZFORMATION_09/test/integration/NavigationJourney",
		"twm/net/ZFORMATION_09/test/integration/NotFoundJourney",
		"twm/net/ZFORMATION_09/test/integration/BusyJourney",
		"twm/net/ZFORMATION_09/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});