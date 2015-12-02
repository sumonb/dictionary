// A generic onclick callback function.
function genericOnClick(info, tab) {
    //https://www.google.com.au/search?q=define+good
    //$.ajax({
    //    url: "https://www.google.com.au/search?q=define+good", success: function (result) {
    //        alert(result);
    //    }
    //});
    
    //console.log("info: " + JSON.stringify(info));
    //var optionsUrl = chrome.extension.getURL('show.html');
    chrome.tabs.create({ url: "https://www.google.com.au/search?q=define+" + info.selectionText + "&whatdoumean" });
  

}

function createContextMenu() {
    // Create one test item for each context type.
    var contexts = ["selection"];
    var title = "What does it mean?";

    var id = chrome.contextMenus.create({
        "title": title,
        "contexts": contexts,
        "onclick": genericOnClick
    });

}

//Extenstion load event
createContextMenu();


