$(document).ready(function () {
    var categories = [
        {id: 1, name: "Men & Women Sport/Running Shoes", imgName: "1_AQ-182.webp"},
        {id: 2, name: "Kids Sport/Running Shoes", imgName: "2_AQ-151.webp"},
        {id: 3, name: "Casual Shoes", imgName: "3_AQ-256.webp"},
        {id: 4, name: "Men & Women Sandal", imgName: "4_AQ-196.webp"},
        {id: 5, name: "Kids Sandal", imgName: "5_AQ-309.webp"},
        {id: 6, name: "Hiking Shoes", imgName: "6_AQ-280.webp"},
        {id: 7, name: "FlyKnit Shoes", imgName: "7_AQ-290.webp"},
        {id: 8, name: "Waterproof Winter Boots", imgName: "8_AQ-409.webp"}
    ];
    var productDetails = {
        "AQ-182": {
            categoryId: 1,
            model: "AQ-182",
            imgName: "1_AQ-182.webp",
            attributes:{
                upper_material: "TaiWan Special Mesh",
                lining: "Silky-Smooth Moisture-Wicking Mesh",
                outsole : "Durable rubber",
                available_size: "US5# - US14#"
            }
        },
        "AQ-188": {
            categoryId: 1,
            model: "AQ-188",
            imgName: "1_AQ-188.webp",
            attributes: {
                upper_material: "Stretch Flannel & TPU & Sheep Leather",
                lining: "Silky-Smooth Moisture-Wicking Mesh",
                outsole : "Stretch Fabric",
                available_size: "US5# - US11#"
            }
        },
        "AQ-253": {
            categoryId: 1,
            model: "AQ-253",
            imgName: "1_AQ-253.webp",
            attributes: {
                upper_material: "High quality cow suede & Canvas",
                lining: "Canvas",
                outsole : "Durable rubber",
                available_size: "US5.5# - US14#"
            }
        },
        "AQ-252": {
            categoryId: 1,
            model: "AQ-252",
            imgName: "1_AQ-252.webp",
            attributes: {
                upper_material: "High Quality Cow Suede & Normad Leather",
                lining: "Canvas",
                outsole : "Durable Rubber",
                available_size: "US5.5# - US14#"
            }
        },
        "AQ-258": {
            categoryId: 1,
            model: "AQ-258",
            imgName: "1_AQ-258.webp",
            attributes: {
                upper_material :"Nubuck",
                lining:"Nappa Leather",
                outsole : "MD + RB",
                available_size:"US6.5# - US14#"
            }
        },
        "AQ-259": {
            categoryId: 1,
            model: "AQ-259",
            imgName: "1_AQ-259.webp",
            attributes: {
                upper_material: "Normad leather",
                lining:"Nappa Leather",
                outsole : "MD + RB",
                available_size: "US6.5# - US14#"
            }
        },
        "AQ-168": {
            categoryId: 2,
            model: "AQ-168",
            imgName: "2_AQ-168.webp",
            attributes: {
                upper_material: "Printing Fabric",
                lining: "Bk mesh",
                outsole: "MD + TPR",
                available_size: "24# - 31#"
            }
        },
        "AQ-169": {
            categoryId: 2,
            model: "AQ-169",
            imgName: "2_AQ-169.webp",
            attributes: {
                upper_material: "Action leather",
                lining: "Pig Skin",
                outsole: "TPR",
                available_size: "24# - 35#"
            }
        },
        "AQ-151": {
            categoryId: 2,
            model: "AQ-151",
            imgName: "2_AQ-151.webp",
            attributes: {
                upper_material: "High quality cow suede&sandwich mesh",
                lining: "Pig Skin",
                outsole : "TPR",
                available_size : "25# - 32#"
            }
        },
        "AQ-148": {
            categoryId: 2,
            model: "AQ-148",
            imgName: "2_AQ-148.webp",
            attributes: {
                upper_material: "Action leather&glitter mesh",
                lining: "Bk mesh",
                outsole : "TPR",
                available_size: "28# - 36#"
            }
        },
        "AQ-158": {
            categoryId: 2,
            model: "AQ-158",
            imgName: "2_AQ-158.webp",
            attributes: {
                upper_material: "Washing Canvas",
                lining: "Twill",
                outsole : "TPR",
                available_size: "25#-37#"
            }
        },
        "AQ-156": {
            categoryId: 2,
            model: "AQ-156",
            imgName: "2_AQ-156.webp",
            attributes: {
                upper_material: "High quality&mesh",
                lining: "Pig skin",
                outsole : "EVA + TPR + TPU",
                available_size: "24# - 32#"
            }
        },
        "AQ-147": {
            categoryId: 2,
            model: "AQ-147",
            imgName: "2_AQ-147.webp",
            attributes: {
                upper_material: "Action leather&sandwich mesh",
                lining: "Pig Skin",
                outsole : "TPR with light",
                available_size: "25# - 35#"
            }
        },
        "AQ-139": {
            categoryId: 2,
            model: "AQ-139",
            imgName: "2_AQ-139.webp",
            attributes: {
                upper_material: "Nappa leather",
                lining: "Nappa Pu",
                outsole : "RB",
                available_size: "23#-38#"
            }
        },
        "AQ-256": {
            categoryId: 3,
            model: "AQ-256",
            imgName: "3_AQ-256.webp",
            attributes: {
                upper_material: "Water resistant canvas",
                lining: "silky-smooth moisture-wicking mesh",
                outsole : "Durable rubber",
                available_size: "5# - 15#"
            }
        },
        "AQ-257": {
            categoryId: 3,
            model: "AQ-257",
            imgName: "3_AQ-257.webp",
            attributes: {
                upper_material: "canvas",
                lining: "Silky-smooth Moisture-wicking Mesh",
                outsole : "Durable rubber",
                available_size: "5# - 11#",
            }
        },
        "AQ-262": {
            categoryId: 3,
            model: "AQ-262",
            imgName: "3_AQ-262.webp",
            attributes: {
                upper_material: "Canvas",
                lining: "Silky-smooth Moisture-wicking Mesh",
                outsole : "Durable rubber",
                available_size: "5# - 11#",
            }
        },
        "AQ-263": {
            categoryId: 3,
            model: "AQ-263",
            imgName: "3_AQ-263.webp",
            attributes: {
                upper_material: "Wool blend",
                lining: "Silky-smooth Moisture-wicking Mesh",
                outsole : "Durable rubber",
                available_size: "5# - 15#"
            }
        },
        "AQ-189": {
            categoryId: 3,
            model: "AQ-189",
            imgName: "3_AQ-189.webp",
            attributes: {
                upper_material: "Nubuck leather",
                lining: "Nappa Pu",
                outsole : "Durable rubber+welting",
                available_size: "6.5# - 14#"
            }
        },
        "AQ-198": {
            categoryId: 3,
            model: "AQ-198",
            imgName: "3_AQ-198.webp",
            attributes: {
                upper_material: "Yellow Stone & canvas",
                lining: "Moisture-wicking Mesh",
                outsole: "Durable Rubber",
                available_size: "5# - 11#"
            }
        },
        "AQ-196": {
            categoryId: 4,
            model: "AQ-196",
            imgName: "4_AQ-196.webp",
            attributes: {
                upper_material: "Multi-webbing",
                outsole: "EVA + RB",
                available_size: "6# - 15#"
            }
        },
        "AQ-178": {
            categoryId: 4,
            model: "AQ-178",
            imgName: "4_AQ-178.webp",
            attributes: {
                upper_material: "Multi-webbing",
                outsole: "Durable RB",
                available_size: "6# - 15#"
            }
        },
        "AQ-199": {
            categoryId: 4,
            model: "AQ-199",
            imgName: "4_AQ-199.webp",
            attributes: {
                upper_material: "Reflective lace",
                outsole: "Durable RB",
                available_size: "6# - 13#"
            }
        },
        "AQ-200": {
            categoryId: 4,
            model: "AQ-200",
            imgName: "4_AQ-200.webp",
            attributes: {
                upper_material: "Webbing+Microfiber",
                outsole: "Durable RB",
                available_size: "6# - 11#"
            }
        },
        "AQ-201": {
            categoryId: 4,
            model: "AQ-201",
            imgName: "4_AQ-201.webp",
            attributes: {
                upper_material: "Round lace",
                outsole: "Durable RB+EVA",
                available_size: "6# - 14#"
            }
        },
        "AQ-300": {
            categoryId: 5,
            model: "AQ-300",
            imgName: "5_AQ-300.webp",
            attributes: {
                upper_material: "Sanke Pu",
                lining: "Pig Skin",
                outsole: "TPR + welting",
                available_size: "28# - 37#"
            }
        },
        "AQ-301": {
            categoryId: 5,
            model: "AQ-301",
            imgName: "5_AQ-301.webp",
            attributes: {
                upper_material: "Action leather",
                lining: "Pig Skin",
                outsole : "TPR",
                available_size: "22# - 28#"
            }
        },
        "AQ-302": {
            categoryId: 5,
            model: "AQ-302",
            imgName: "5_AQ-302.webp",
            attributes: {
                upper_material: "Nappa Pu &Action leather",
                lining: "Pig Skin",
                outsole : "TPR",
                available_size: "28# - 37#"
            }
        },
        "AQ-303": {
            categoryId: 5,
            model: "AQ-303",
            imgName: "5_AQ-303.webp",
            attributes: {
                upper_material: "Glitter Pu &Action leather",
                lining: "Pig Skin",
                outsole: "TPR",
                available_size: "28# - 37#"
            }
        },
        "AQ-305": {
            categoryId: 5,
            model: "AQ-305",
            imgName: "5_AQ-305.webp",
            attributes: {
                upper_material: "Action leather",
                lining: "Pig Skin",
                outsole: "TPR",
                available_size: "24# - 34#"
            }
        },
        "AQ-307": {
            categoryId: 5,
            model: "AQ-307",
            imgName: "5_AQ-307.webp",
            attributes: {
                upper_material: "Action leather",
                lining: "Pig Skin",
                outsole : "TPR",
                available_size: "24# - 34#"
            }
        },
        "AQ-306": {
            categoryId: 5,
            model: "AQ-306",
            imgName: "5_AQ-306.webp",
            attributes: {
                upper_material: "Action leather",
                lining: "Pig Skin",
                outsole : "TPR",
                available_size: "24# - 34#"
            }
        },
        "AQ-308": {
            categoryId: 5,
            model: "AQ-308",
            imgName: "5_AQ-308.webp",
            attributes: {
                upper_material: "Action leather",
                lining: "Pig Skin",
                outsole: "TPR",
                available_size: "24# - 34#"
            }
        },
        "AQ-309": {
            categoryId: 5,
            model: "AQ-309",
            imgName: "5_AQ-309.webp",
            attributes: {
            }
        },
        "AQ-255": {
            categoryId: 6,
            model: "AQ-255",
            imgName: "6_AQ-255.webp",
            attributes: {
                upper_material: "TaiWan special Mesh",
                lining: "Silky-smooth Moisture-wicking Mesh",
                outsole: "Durable Rubber",
                available_size: "US5# - US14#"
            }
        },
        "AQ-254": {
            categoryId: 6,
            model: "AQ-254",
            imgName: "6_AQ-254.webp",
            attributes: {
                upper_material: "Nylon Mesh&Pu",
                lining: "Special Mesh",
                outsole: "Durable Rubber",
                available_size: "US5# - US14#"
            }
        },
        "AQ-268": {
            categoryId: 6,
            model: "AQ-268",
            imgName: "6_AQ-268.webp",
            attributes: {
                upper_material: "Normad Leather & Nylon Mesh",
                lining: "Nappa Leather",
                outsole: "MD + RB(Waterproof Construction)",
                available_size: "US6# - US13#"
            }
        },
        "AQ-280": {
            categoryId: 6,
            model: "AQ-280",
            imgName: "6_AQ-280.webp",
            attributes: {
                upper_material: "Nubuck PU &  Nylon Mesh",
                lining: "Wool fur",
                outsole: "MD + RB(Waterproof Construction)",
                available_size: "35# - 43#"
            }
        },
        "AQ-286": {
            categoryId: 7,
            model: "AQ-286",
            imgName: "7_AQ-286.webp",
            attributes: {
                upper_material: "Non Stretch Flyknit",
                lining: "Nappa Leather",
                outsole: "RB",
                available_size: "US6# - US13#"
            }
        },
        "AQ-287": {
            categoryId: 7,
            model: "AQ-287",
            imgName: "7_AQ-287.webp",
            attributes: {
                upper_material: "High Stretch Flyknit",
                lining: "N/A",
                outsole: "Air cushion +MD+RB",
                available_size: "US5#- US11#"
            }
        },
        "AQ-288": {
            categoryId: 7,
            model: "AQ-288",
            imgName: "7_AQ-288.webp",
            attributes: {
                upper_material: "High Stretch Flyknit + Nubuck Leather",
                lining: "Nappa Leather",
                outsole: "MD + RB",
                available_size: "US6# - US13#"
            }
        },
        "AQ-289": {
            categoryId: 7,
            model: "AQ-289",
            imgName: "7_AQ-289.webp",
            attributes: {
                upper_material: "High Stretch Flyknit & Normad Leather",
                lining: "Nappa Leather",
                outsole: "MD+ RB",
                available_size: "US6# - US13#"
            }
        },
        "AQ-290": {
            categoryId: 7,
            model: "AQ-290",
            imgName: "7_AQ-290.webp",
            attributes: {
            }
        },
        "AQ-312": {
            categoryId: 8,
            model: "AQ-312",
            imgName: "8_AQ-312.webp",
            attributes: {
                upper_material:"Nubuck Pu & Resistant Water Nylon",
                lining: "Wool fur",
                outsole: "MD + RB",
                available_size: "24# - 40#"
            }
        },
        "AQ-314": {
            categoryId: 8,
            model: "AQ-314",
            imgName: "8_AQ-314.webp",
            attributes: {
                upper_material: "Nubuck Pu & Resistant Water Nylon",
                lining: "Wool Fur",
                outsole: "MD + RB",
                available_size: "23# - 32#"
            }
        },
        "AQ-313": {
            categoryId: 8,
            model: "AQ-313",
            imgName: "8_AQ-313.webp",
            attributes: {
                upper_material: "Nubuck Pu & Resistant Water Nylon",
                lining: "Wool fur",
                outsole: "MD + RB",
                available_size: "23# - 32#"
            }
        },
        "AQ-315": {
            categoryId: 8,
            model: "AQ-315",
            imgName: "8_AQ-315.webp",
            attributes: {
                upper_material: "Nubuck Pu & Resistant Water Nylon",
                lining: "Wool fur",
                outsole: "MD + RB",
                available_size: "23# - 32#"
            }
        },
        "AQ-316": {
            categoryId: 8,
            model: "AQ-316",
            imgName: "8_AQ-316.webp",
            attributes: {
                upper_material: "Nubuck Pu & Resistant Water Nylon",
                lining: "Wool fur",
                outsole: "MD + RB",
                available_size: "23# - 32#"
            }
        },
        "AQ-318": {
            categoryId: 8,
            model: "AQ-318",
            imgName: "8_AQ-318.webp",
            attributes: {
                upper_material: "Nubuck Pu & Resistant Water Nylon",
                lining: "Wool fur",
                outsole: "MD + RB",
                available_size: "23# - 32#"
            }
        },
        "AQ-401": {
            categoryId: 8,
            model: "AQ-401",
            imgName: "8_AQ-401.webp",
            attributes: {
                upper_material: "Nubuck Pu & Resistant Water Nylon",
                lining: "Wool fur",
                outsole: "MD + RB",
                available_size: "23# - 32#"
            }
        },
        "AQ-402": {
            categoryId: 8,
            model: "AQ-402",
            imgName: "8_AQ-402.webp",
            attributes: {
                upper_material: "Nubuck Pu & Resistant Water Nylon",
                lining: "Wool fur",
                outsole: "MD + RB",
                available_size: "23# - 32#"
            }
        },
        "AQ-405": {
            categoryId: 8,
            model: "AQ-405",
            imgName: "8_AQ-405.webp",
            attributes: {
                upper_material: "Nubuck Pu & Resistant Water Nylon",
                lining: "Wool fur",
                outsole: "MD + RB",
                available_size: "23# - 32#"
            }
        },
        "AQ-408": {
            categoryId: 8,
            model: "AQ-408",
            imgName: "8_AQ-408.webp",
            attributes: {
                upper_material: "Nubuck Pu & Resistant Water Nylon",
                lining: "Wool fur",
                outsole: "MD + RB",
                available_size: "32# - 38#"
            }
        },
        "AQ-409": {
            categoryId: 8,
            model: "AQ-409",
            imgName: "8_AQ-409.webp",
            attributes: {

            }
        },
    };
    //var cateArr = {}；
    //Object.keys(productDetails).forEach((val, idx)=>{
    //    if(cateArr.hasOwnProperty(productDetails[val].categoryId)){
    //        cateArr[productDetails[val].categoryId].count++;
    //        cateArr[productDetails[val].categoryId].products.push(productDetails[val].imgName);
    //    } else {
    //        cateArr[productDetails[val].categoryId] = {};
    //        cateArr[productDetails[val].categoryId].count = 1;
    //        cateArr[productDetails[val].categoryId].products = [productDetails[val].imgName];
    //    }
    //})

    $('.galpop-info').galpop({getDesc: function (e) {
            var productId = e.parent().parent().attr('id');
            var desc = $('<div class="row"></div>');
            if(!productId || !productDetails.hasOwnProperty(productId)){
                return desc;
            }
            desc.append($('<div class="col-sm-6 col-xs-6 attrTitle">Model: </div>'));
            desc.append($('<div class="col-sm-6 col-xs-6 attrValue">' + productId + '</div>'));
            var productAttrs = productDetails[productId].attributes;
            if(productAttrs.hasOwnProperty('upper_material')){
                desc.append($('<div class="col-sm-6 col-xs-6 attrTitle">Upper Material: </div>'));
                desc.append($('<div class="col-sm-6 col-xs-6 attrValue">' + productAttrs.upper_material + '</div>'));
                //desc += "Upper Material : " + productAttrs.upper_material;
            }
            if(productAttrs.hasOwnProperty('lining')){
                desc.append($('<div class="col-sm-6 col-xs-6 attrTitle">Lining: </div>'));
                desc.append($('<div class="col-sm-6 col-xs-6 attrValue">' + productAttrs.lining + '</div>'));
                //desc += "\nLining: " + productAttrs.lining;
            }
            if(productAttrs.hasOwnProperty('outsole')){
                desc.append($('<div class="col-sm-6 col-xs-6 attrTitle">Outsole: </div>'));
                desc.append($('<div class="col-sm-6 col-xs-6 attrValue">' + productAttrs.outsole + '</div>'));
                //desc += "\nOutsole: " + productAttrs.outsole;
            }
            if(productAttrs.hasOwnProperty('available_size')){
                desc.append($('<div class="col-sm-6 col-xs-6 attrTitle">Available Size: </div>'));
                desc.append($('<div class="col-sm-6 col-xs-6 attrValue">' + productAttrs.available_size + '</div>'));
                //desc += "\nAvailable Size: " + productAttrs.available_size;
            }

            return desc;
        }});

    $(".cateLi").click(function(e){
        var targetLi = e.currentTarget;
        $(".cateLi.active").removeClass("active");
        $(targetLi).addClass("active");
        var categoryId = $(targetLi).attr('data-category');
        $(".productDiv").css("display", "block");
        $(".productDiv:not(.c" + categoryId +")").css("display", "none");
        $('#showingCate').text($(targetLi).text().trim() + ":");
    });

    function searchFunc(e) {
        var searchtxt = $("#searchInput").val().trim().toLowerCase();
        var productModels = Object.keys(productDetails);
        var founded = [];
        for (var idx = 0; idx < productModels.length; idx++){
            var modelName = productModels[idx];
            if(productModels[idx].toLowerCase().indexOf(searchtxt) >= 0){
                founded.push(modelName);
                continue;
            }
            var attrs = productDetails[modelName].attributes;
            if(attrs.upper_material && attrs.upper_material.toLowerCase().indexOf(searchtxt) >= 0
                || attrs.lining && attrs.lining.toLowerCase().indexOf(searchtxt) >= 0
                || attrs.outsole && attrs.outsole.toLowerCase().indexOf(searchtxt) >= 0
                || attrs.available_size && attrs.available_size.toLowerCase().indexOf(searchtxt) >= 0) {
                founded.push(modelName);
                continue;
            }
        }
        $(".productDiv").css("display", "none");
        if(founded.length > 0){
            founded.forEach(function (val, idx) {
                $("#" + val).css("display", "block");
            });
        }
        $('#showingCate').text("Search results for \"" + searchtxt + "\":");
    }
    $("#searchInput").on('keydown', function (e) {
        if(e.keyCode == 13){    // Enter
            searchFunc(e);
        }
    });
    $('#searchBtn').click(searchFunc);

    function handleQueryParameter() {
        var num = location.href.indexOf("?")
        var str = location.href.substr(num+1);

        var arr = str.split("&");
        var paraObj = {};
        for(var i=0; i < arr.length; i++){
            var idx = arr[i].indexOf("=");
            if(idx > 0){
                var paraName = arr[i].substring(0, idx);
                var paraValue = arr[i].substr(idx + 1);
                paraObj[paraName] = paraValue;
            }
        }

        //var querySearch = $("#prductsCon").attr("data-search");
        if(paraObj.hasOwnProperty("searchStr")){
            $("#searchInput").val(paraObj["searchStr"]);
            searchFunc();
        }
        //var queryCate = $("#categoryUl").attr("data-category");
        if(paraObj.hasOwnProperty("category")){
            var liEle = $(".cateLi[data-category=" + paraObj["category"] + "]");
            if(liEle){
                $(".cateLi.active").removeClass("active");
                liEle.addClass("active");
                $(".productDiv").css("display", "block");
                $(".productDiv:not(.c" + paraObj["category"] +")").css("display", "none");
                $('#showingCate').text(liEle.text().trim() + ":");
            }
        }
    }
    handleQueryParameter();
});