var tabsContainer = ".user-profile-tabs-container"
var selectTabHandler = function(event) {
	$tab = $(this);
	$(tabsContainer + " li").removeClass('active')
	$tab.parent().addClass('active');
	seletedTabName = $tab.attr('href');
	console.log(selectedTabName);
	$(".tab-pane").addClass('hidden');
	$(selectedTabName).removeClass('hidden');
	event.preventableDefault();
};

if (document.URL.match(/\/profile.html/)) {
	$(document).ready(function() {
		var $tabs = $(tabsContainer + " a");
		$tabs.click(selectTabHandler);
		$tabs[0].click();
	});
}