/* 
 * Anagraph 
 * Anagraph is a JS module (based on Oracle JET) for management of user-generated metadata on graphic/multimedia client controls and content via RESTful interface to the back end.  * 
 */
define(['ojs/ojcore', 'knockout', 'setting_properties', 'jquery',
    'ojs/ojknockout'],
        function (oj, ko, sp, $) {
            function IsLoggedIn() {
                  $(".loader-hover").hide();
//                if (sp.noData()) {
//                    console.log(" user is logged in");
//                    oj.Router.rootInstance.go("cr_list_full");
////                    data = getStorageData();
//                }else{
//                       $('#userMenu').css({display: 'none'});
//                     console.log(" user is not logged in");
//                    oj.Router.rootInstance.go("login");
//                }
            }
            var isLoggedIn = new IsLoggedIn();
            return  isLoggedIn;
        });