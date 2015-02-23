//custom directive
customDirectives = angular.module('customDirectives', []);

customDirectives.directive('customCollapse', function(){
	return {
		require: '?ngModel',
		scope: {
			ngModel: '='
		},
		restrict: 'A',
		templateUrl: 'templates/panels.html',
		link: function(scope, el, attrs){
			scope.panelBaseId = attrs.collapsePanelBodyId;
			scope.panelId = attrs.collapsePanelId;

			$(document).ready(function(){
				angular.forEach(scope.ngModel, function(value, key) {
				if (value.collapsed) {
					$("#" + scope.panelBaseId + "-" + key).collapse("show");
					}	
				});
			});
		
			scope.toggleCollapsedStates = function(ind){
				angular.forEach(scope.ngModel, function(value, key){
					if (key == ind)
						{
							scope.ngModel[key].collapsed = !scope.ngModel[key].collapsed;
							$("#" + scope.panelBaseId + "-" + ind).collapse("toggle");
						}
					else
						scope.ngModel[key].collapsed=false;
				});
			};			

		}//end of link
	};
});

var customComponents = angular.module('customComponents', ['customDirectives']);

// pagination filter
customDirectives.filter('startFrom', function(){
  return function(input, start){
    start = +start;
    return input.slice(start);
  }
});


customDirectives.controller("CustomDirectivesController", function($scope){

$scope.collapseData = [{"url": "http://www.whistleblowers.gov/acts/air21.html", "statute": "Wendell H. Ford Aviation Investment and Reform Act for the 21st Century (AIR21)", "industry": "Air Carriers", "description": "Protects employees of air carriers and contractors and subcontractors of air carriers who, among other things, report violations of laws related to aviation safety."}, {"url": "http://www.whistleblowers.gov/acts/caa.html", "statute": "Clean Air Act (CAA)", "industry": "Air Pollution", "description": "Prohibits retaliation against any employee who reports violations regarding air emissions from area, stationary, and mobile sources."}, {"url": "http://www.whistleblowers.gov/acts/ahera.html", "statute": "Asbestos Hazard Emergency Response Act (AHERA)", "industry": "Asbestos In Schools", "description": "Protects employees who report violations of the law relating to asbestos in public or private non-profit elementary and secondary school systems."}, {"url": "http://www.whistleblowers.gov/acts/isca.html", "statute": "International Safe Container Act (ISCA)", "industry": "Cargo Containers ", "description": "Protects employees involved in international shipping who report to the Coast Guard the existence of an unsafe intermodal cargo container or another violation of the Act."}, {"url": "http://www.whistleblowers.gov/acts/dfa_1057.html", "statute": "Consumer Financial Protection Act of 2010 (CFPA), Section 1057 of the Dodd-Frank Wall Street Reform and Consumer Protection Act of 2010", "industry": "Consumer Finance", "description": "Employees are protected for blowing the whistle on reasonably perceived violations of any provision of the Title X of the Dodd-Frank Wall Street Reform and Consumer Protection Act or any other provision of law that is subject to the jurisdiction of the Bureau of Consumer Financial, Protection, or any rule, order, standard, or prohibition prescribed by the Bureau."}, {"url": "http://www.whistleblowers.gov/acts/cpsia.html", "statute": "Consumer Product Safety Improvement Act (CPSIA)", "industry": "Consumer Products", "description": "Protects employees who report to their employer, the federal government, or a state attorney general reasonably perceived violations of any statute or regulation within the jurisdiction of the Consumer Safety Product Safety Commission (CPSC). CPSIA covers employees of consumer product manufacturers, importers, distributors, retailers, and private labelers."}, {"url": "http://www.whistleblowers.gov/acts/sox_amended.html", "statute": "Sarbanes-Oxley Act (SOX)", "industry": "Corporate Fraud", "description": "Protects employees of certain companies who report alleged mail, wire, bank or securities fraud; violations of the SEC rules and regulations; or violation of federal laws related to fraud against shareholders. The Act covers employees of publicly traded companies and their subsidiaries, as well as employees of nationally-recognized statistical rating organizations."}, {"url": "http://www.whistleblowers.gov/acts/sdwa.html", "statute": "Safe Drinking Water Act (SDWA)", "industry": "Drinking Water", "description": "Prohibits retaliation against any employee who reports alleged violations relating to any waters actually or potentially designated for drinking."}, {"url": "http://www.whistleblowers.gov/acts/fda_402.html", "statute": "FDA Food Safety Modernization Act (FSMA), Section 402", "industry": "Food Production", "description": "Protects employees of food manufacturers, distributors, packers, and transporters from reporting a violation of the Food, Drug, and Cosmetic Act, or a regulation promulgated under the Act. Employees are also protected from retaliation for refusing to participate in a practice that violates the Act."}, {"url": "http://www.whistleblowers.gov/acts/swda.html", "statute": "Solid Waste Disposal Act (SWDA)", "industry": "Hazardous Waste", "description": "Prohibits retaliation against any employee who reports alleged violations relating to the disposal of solid and hazardous waste (including medical waste) at active and future facilities."}, {"url": "http://www.whistleblowers.gov/acts/aca.html", "statute": "Affordable Care Act (ACA), Section 1558", "industry": "Health Insurance", "description": "Protects employees who report violations of any provision of title I of the ACA, including but not limited to discrimination based on an individual's receipt of health insurance subsidies, the denial of coverage based on a preexisting condition, or an insurer's failure to rebate a portion of an excess premium."}, {"url": "http://www.whistleblowers.gov/acts/tsca.html", "statute": "Toxic Substances Control Act (TSCA)", "industry": "Industrial Chemicals", "description": "Prohibits retaliation against any employee who reports alleged violations relating to industrial chemicals produced or imported into the United States."}, {"url": "http://www.whistleblowers.gov/acts/spa.html", "statute": "Seaman's Protection Act (SPA), as amended by Section 611 of the Coast Guard Authorization Act of 2010, P.L. 111-281", "industry": "Maritime Law", "description": "Protects employees who report to the Coast Guard or another federal agency a violation of a maritime safety law or regulation. The Act also protects seamen who refuse to work when they reasonably believe an assigned task would result in serious injury or impairment of health to themselves, other seamen, or the public."}, {"url": "http://www.whistleblowers.gov/acts/map21.html", "statute": "Moving Ahead for Progress in the 21st Century Act (MAP-21)", "industry": "Motor Vehicles ", "description": "Prohibits retaliation by motor vehicle manufacturers, part suppliers, and dealerships against employees for providing information to the employer or the U.S. Department of Transportation about motor vehicle defects, noncompliance, or violations of the notification or reporting requirements enforced by the National Highway Traffic Safety Administration or for engaging in related protected activities as set forth in the provision."}, {"url": "http://www.whistleblowers.gov/acts/era_2005.html", "statute": "Energy Reorganization Act (ERA)", "industry": "Nuclear Standards", "description": "Prohibits retaliation against any employee who reports violations or refuses to engage in violations of the ERA or the Atomic Energy Act. Protected employees include employees of operators, contractors and subcontractors of nuclear power plants licensed by the Nuclear Regulatory Commission, and employees of contractors working with the Department of Energy under a contract pursuant to the Atomic Energy Act."}, {"url": "http://www.whistleblowers.gov/acts/psia.html", "statute": "Pipeline Safety Improvement Act (PSIA)", "industry": "Pipelines ", "description": "Protects employees who report violations of federal laws related to pipeline safety and security or who refuse to violate such laws. "}, {"url": "http://www.whistleblowers.gov/acts/ntssa.html", "statute": "National Transit Systems Security Act (NTSSA)", "industry": "Public Transit", "description": "Protects transit employees who report a hazardous safety or security condition, a violation of any federal law relating to public transportation agency safety, or the abuse of federal grants or other public funds appropriated for public transportation. The Act also protects public transit employees who refuse to work when confronted by a hazardous safety or security condition or refuse to violate a federal law related to public transportation safety."}, {"url": "http://www.whistleblowers.gov/acts/frsa.html", "statute": "Federal Railroad Safety Act (FRSA)", "industry": "Railroads", "description": "Protects employees of railroad carriers and their contractors and subcontractors who report a hazardous safety or security condition, a violation of any federal law or regulation relating to railroad safety or security, or the abuse of public funds appropriated for railroad safety. In addition, the statute protects employees who refuse to work when confronted by a hazardous safety or security condition."}, {"url": "http://www.whistleblowers.gov/acts/cercla.html", "statute": "Comprehensive Environmental Response, Compensation and Liability Act (CERCLA)", "industry": "Superfund Sites", "description": "Prohibits retaliation against any employee who reports alleged violations relating to cleanup of hazardous waste sites, as well as accidents, spills, and other emergency releases of pollutants and contaminants."}, {"url": "http://www.whistleblowers.gov/acts/staa.html", "statute": "Surface Transportation Assistance Act (STAA)", "industry": "Trucking", "description": "Protects truck drivers and other employees who refuse to violate regulations related to the safety of commercial motor vehicles or who report violations of those regulations."}, {"url": "http://www.whistleblowers.gov/acts/fwpca.html", "statute": "Federal Water Pollution Control Act (FWPCA)", "industry": "Water Pollution", "description": "Prohibits retaliation against any employee who reports alleged violations relating to discharge of pollutants into water."}, {"url": "http://www.osha.gov/pls/oshaweb/owadisp.show_document?p_table=OSHACT&p_id=3365", "statute": "Occupational Safety and Health Act (OSH Act), Section 11(c)", "industry": "Work Conditions", "description": "Provides protection for employees who exercise a variety of rights guaranteed under the Act, such as filing a safety and health complaint with OSHA"}];

$scope.collapseData.currentPage = 0;
$scope.collapseData.pageSize = 5;
$scope.collapseData.data = [];

for (var i=0; i<20; i++){
  $scope.collapseData.data.push("Item " + i);
}

}//end of function
);//end of module definition



