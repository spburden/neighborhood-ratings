import Ember from 'ember';
export default Ember.Route.extend({
  model: function(params) {
   var url = 'http://api.census.gov/data/2016/pdb/tract?get=County_name,State_name,Tot_Population_CEN_2010,College_ACS_10_14,Med_HHD_Inc_ACS_10_14&for=tract:' + params.tract + '&in=state:41+county:051&key=d90ad8655f9cb4d3ee0909e5831a4989a51a22ab';
   return Ember.$.getJSON(url).then(function(responseJSON) {
    //  console.log(responseJSON[1][0]);
    //  $("#hello").text(responseJSON[1][0]);
     return Ember.String.htmlSafe([ '<li>' + 'County: ' + responseJSON[1][0] +'</li>' + '<li>' + 'State: ' + responseJSON[1][1] + '</li>' + '<li>' + 'Total Population: ' + responseJSON[1][2] + '</li>' + '<li>' + 'People with College Degrees over the age of 25: ' + responseJSON[1][3] + '</li>' + '<li>'+ 'Median Household Income: ' + responseJSON[1][4]]);
    });
  }
});

// http://api.census.gov/data/2016/pdb/tract?get=County_name,State_name,Tot_Population_CEN_2010&for=tract:20100&in=state:01+county:001&key=YOUR_KEY_GOES_HERE

// http://api.census.gov/data/2016/pdb/tract?get=County_name,State_name,Tot_Population_CEN_2010,B02003_004E&for=tract:006402&in=state:41+county:051&key=d90ad8655f9cb4d3ee0909e5831a4989a51a22ab

//variable list at http://api.census.gov/data/2016/pdb/tract/variables.html

//possible variables to use:
//Aggr_House_Value_ACS_10_14 : Aggregate housing unit value (dollars) in the ACS
//LAND_AREA : Land area (sq.mi.)
//pct_Civ_emp_16p_ACS_10_14: percentage of Individuals over 16 Employed
//pct_College_ACS_10_14 : percentage of individuals over 25 with college degrees
//pct_Females_ACS_10_14 : percentage of females of total population
//pct_Males_ACS_10_14 : percentage of females of total population
//pct_No_Health_Ins_ACS_10_14 : percentage of people with no health insurance
//pct_Pop_65plus_ACS_10_14 : percentage of population over retirement age
//pct_Renter_Occp_HU_ACS_10_14 : percentage of population who rent housing
//Prs_Blw_Pov_Lev_ACS_10_14 : number of people below poverty level
//


//last test query used http://api.census.gov/data/2016/pdb/tract?get=County_name,State_name,Tot_Population_CEN_2010,College_ACS_10_14,Med_HHD_Inc_ACS_10_14,NON_US_Cit_ACS_10_14&for=tract:006402&in=state:41+county:051&key=d90ad8655f9cb4d3ee0909e5831a4989a51a22ab

//back up demographic neighborhoods maps located at https://www.portlandmaps.com/detail/neighborhood/NORTHWEST-DISTRICT-NORTHWEST-INDUSTRIAL/45_did/

//names of all portland neighborhoods located at https://www.portlandoregon.gov/oni/article/214828

//map of all census tract numbers for portland located at http://www2.census.gov/geo/maps/dc10map/tract/st41_or/c41051_multnomah/DC10CT_C41051_001.pdf

//geocoding info for one location in portland located at https://geocoding.geo.census.gov/geocoder/geographies/address?street=912+SW+Coronado+St&city=Portland&state=OR&zip=97219&benchmark=8&vintage=8
