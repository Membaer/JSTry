

controller.getAssetStore().on("load", function () {
    for (a == 0; a++; a < controller.getAssetStore.length) {
        var title a = controller.getAssetStore().getAt(a).get("AssetName");
        document.getElementsByTagName("h2")[a].innerHTML = title a;
        var desc a = controller.getAssetStore().getAt(a).get("AssetDescription");
        document.getElementsByTagName("p")[a].innerHTML = desc a;
        var aid a = controller.getAssetStore().getAt(a).get("AssetId");
        var img a = "../../Webservice/AssetService.svc/DownloadFile/" + PP.CustomerId + "/" + aid a + "/1/de";
        document.getElementsByTagName("img")[a].src = img a;
    }

/* Funktionsfähig
controller.getAssetStore().on("load", function () {
    var title1 = controller.getAssetStore().getAt(0).get("AssetName");
    document.getElementsByTagName("h2")[0].innerHTML = title1;
    var desc1 = controller.getAssetStore().getAt(0).get("AssetDescription");
    document.getElementsByTagName("p")[0].innerHTML = desc1;
    var aid1 = controller.getAssetStore().getAt(0).get("AssetId");
    var img1 = "../../Webservice/AssetService.svc/DownloadFile/" + PP.CustomerId + "/" + aid1 + "/1/de";
    document.getElementsByTagName("img")[0].src = img1;

    var title2 = controller.getAssetStore().getAt(1).get("AssetName");
    document.getElementsByTagName("h3")[0].innerHTML = title2;
    var desc2 = controller.getAssetStore().getAt(1).get("AssetDescription");
    document.getElementsByTagName("p")[1].innerHTML = desc2;
    var aid2 = controller.getAssetStore().getAt(1).get("AssetId");
    var img2 = "../../Webservice/AssetService.svc/DownloadFile/" + PP.CustomerId + "/" + aid2 + "/1/de";
    document.getElementsByTagName("img")[1].src = img2;

    var title3 = controller.getAssetStore().getAt(2).get("AssetName");
    document.getElementsByTagName("h3")[1].innerHTML = title3;
    var desc3 = controller.getAssetStore().getAt(2).get("AssetDescription");
    document.getElementsByTagName("p")[2].innerHTML = desc3;
    var aid3 = controller.getAssetStore().getAt(2).get("AssetId");
    var img3 = "../../Webservice/AssetService.svc/DownloadFile/" + PP.CustomerId + "/" + aid3 + "/1/de";
    document.getElementsByTagName("img")[2].src = img3;

    var firstname1 = controller.configuration.getUserDetails().FirstName;
    var name1 = controller.configuration.getUserDetails().LastName;
    document.getElementsByTagName("h1")[0].innerHTML = firstname1 + " " + name1;
    var company1 = controller.configuration.getUserDetails().Company;
    var email1 = controller.configuration.getUserDetails().EmailAddress;
    var zip1 = controller.configuration.getUserDetails().Zip;
    var city1 = controller.configuration.getUserDetails().City;
    var country1 = controller.configuration.getUserDetails().CountryId;
    document.getElementsByTagName("p")[3].innerHTML = company1 + "<br />" + email1 + "<br />" + zip1 + " " + city1 + "<br />" + country1;
});
*/


/* Alternative
controller.getAssetStore().on("load", function () {
    var title1 = controller.getAssetStore().getAt(0).get("AC_course_name");
    document.getElementsByTagName("h2")[0].innerHTML = title1;
    var desc1 = controller.getAssetStore().getAt(0).get("AC_course_desc");
    document.getElementsByTagName("p")[0].innerHTML = desc1;
    var aid1 = controller.getAssetStore().getAt(0).get("AssetId");
    var img1 = "../../Webservice/AssetService.svc/DownloadFile/" + PP.CustomerId + "/" + aid1 + "/1/de";
    document.getElementsByTagName("img")[0].src = img1;

    var title2 = controller.getAssetStore().getAt(1).get("AC_course_name");
    document.getElementsByTagName("h3")[0].innerHTML = title2;
    var desc2 = controller.getAssetStore().getAt(1).get("AC_course_desc");
    document.getElementsByTagName("p")[1].innerHTML = desc2;
    var aid2 = controller.getAssetStore().getAt(1).get("AssetId");
    var img2 = "../../Webservice/AssetService.svc/DownloadFile/" + PP.CustomerId + "/" + aid2 + "/1/de";
    document.getElementsByTagName("img")[1].src = img2;

    var title3 = controller.getAssetStore().getAt(2).get("AC_course_name");
    document.getElementsByTagName("h3")[1].innerHTML = title3;
    var desc3 = controller.getAssetStore().getAt(2).get("AC_course_desc");
    document.getElementsByTagName("p")[2].innerHTML = desc3;
    var aid3 = controller.getAssetStore().getAt(2).get("AssetId");
    var img3 = "../../Webservice/AssetService.svc/DownloadFile/" + PP.CustomerId + "/" + aid3 + "/1/de";
    document.getElementsByTagName("img")[2].src = img3;

    var firstname1 = controller.configuration.getUserDetails().FirstName;
    var name1 = controller.configuration.getUserDetails().LastName;
    document.getElementsByTagName("h1")[0].innerHTML = firstname1 + " " + name1;
    var company1 = controller.configuration.getUserDetails().Company;
    var email1 = controller.configuration.getUserDetails().EmailAddress;
    var zip1 = controller.configuration.getUserDetails().Zip;
    var city1 = controller.configuration.getUserDetails().City;
    var country1 = controller.configuration.getUserDetails().CountryId;
    document.getElementsByTagName("p")[3].innerHTML = company1 + "<br />" + email1 + "<br />" + zip1 + " " + city1 + "<br />" + country1;
});
 Alternative */