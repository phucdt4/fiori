jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"twm/net/ZFORMATION_09/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"twm/net/ZFORMATION_09/test/integration/pages/App",
	"twm/net/ZFORMATION_09/test/integration/pages/Browser",
	"twm/net/ZFORMATION_09/test/integration/pages/Master",
	"twm/net/ZFORMATION_09/test/integration/pages/Detail",
	"twm/net/ZFORMATION_09/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "twm.net.ZFORMATION_09.view."
	});

	sap.ui.require([
		"twm/net/ZFORMATION_09/test/integration/NavigationJourneyPhone",
		"twm/net/ZFORMATION_09/test/integration/NotFoundJourneyPhone",
		"twm/net/ZFORMATION_09/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});