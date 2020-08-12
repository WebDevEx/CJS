
'use strict';
/** @type {!Array} */
var _0x98f6 = ["alert", "checked", "ccg", "getElementById", "click", "boutonSuivant", "Calendrier", "childNodes", "length", "color", "getPropertyValue", "rgb(255, 255, 255)", "compTableau_tbody", "onmouseover", "hasAttribute", "getMonth", "getFullYear", "getUTCDate", "http://dev.webholdingusa.com/rdv/assets/alert.mp3", "play", "frames", "window", "parentElement", "item2_0_0", "document"];
var x = window[_0x98f6[0]];

// import { email } from 'https://smtpjs.com/v3/smtp.js';
// let val = hello();

// window.onload = function(){
//     document.getElementsByTagName('img').src.replace('http://www.diplomatie.gouv.fr/fr/squelettes/_images/logo_maee.jpg', 'https://www.diplomatie.gouv.fr/fr/squelettes/_images/logo_maee.jpg');
// }

let script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://smtpjs.com/v3/smtp.js';    
document.getElementsByTagName('head')[0].appendChild(script);

script.onload = function() {
    //Call desired functions
    // alert("loaded javascript");
    console.log("loaded javascript");
}

// let img = document.createElement('img');
// // img.src = "https://js.cx/clipart/train.gif"; // (*)
// img.src = "https://www.diplomatie.gouv.fr/fr/squelettes/_images/logo_maee.jpg";

// img.onload = function() {
//   alert(`Image loaded, size ${img.width}x${img.height}`);
// };

// img.onerror = function() {
//   alert("Error occurred while loading image");
// };

/**
 * 
 * Ahmed, put here the minutes and seconds you want to attack in. Separate the values with comma.
 */
var targetedMinutes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
var targetedSeconds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];

/**
 * 
 * put here some name to help you know what chrome was blocked.
 */
var chrome_name = 'CHROME_01';

/**
 * @return {undefined}

 */

// localStorage.setItem('stop', 'false');

window[_0x98f6[0]] = function() {
};

window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
    // alert('Error: ' + errorMsg + ' Url: ' +  url);
    if (errorMsg.indexOf('Script error.') > -1) {
        return;
    }
    window.postMessage({ type: "CLEAR_COOKIES_EXTENSION_API" }, "*");    
    window.postMessage({ type: "CLEAR_COOKIES_EXTENSION_API" }, "*"); 
    console.log('Catching Error..');  

    var scripts =  document.getElementsByTagName('script');
    var torefreshs = ['myscript.js', 'myscript2.js'] ; // list of js to be refresh
    var key = 1; // change this key every time you want force a refresh
    for(var i=0;i<scripts.length;i++){ 
        for(var j=0;j<torefreshs;j++){ 
            if(scripts[i].src && (scripts[i].src.indexOf(torefreshs[j]) > -1)){
                var new_src = scripts[i].src.replace(torefreshs[j],torefreshs[j] + 'k=' + key );
                scripts[i].src = new_src; // change src in order to refresh js
            } 
        }
    }

    window.top.document.location.reload(); 
    return false;
};

setTimeout(function() {
    try {
              
        if(document.getElementById('main')){          
            console.log('we got blocked 1');
            window.postMessage({ type: "CLEAR_COOKIES_EXTENSION_API" }, "*");
            window.postMessage({ type: "CLEAR_COOKIES_EXTENSION_API" }, "*");
            window.top.document.location.reload();           
            return;                   
        }

        if(document.getElementById('Erreur')) {
            window.postMessage({ type: "CLEAR_COOKIES_EXTENSION_API" }, "*");
            window.postMessage({ type: "CLEAR_COOKIES_EXTENSION_API" }, "*");            
            window.location.href = "https://pastel.diplomatie.gouv.fr/rdvinternet/html-4.02.00/frameset/frameset.html?lcid=1&sgid=40&suid=1";
            return;
        }        
       
        if(document.getElementsByTagName('center').length !== 0){
            console.log("ggggggggggg", document.getElementsByTagName('center').length);
            // setTimeout(function(){console.log('delay')}, 50);
            window.postMessage({ type: "CLEAR_COOKIES_EXTENSION_API" }, "*");
            window.postMessage({ type: "CLEAR_COOKIES_EXTENSION_API" }, "*");
            window.top.document.location.reload();           
            return;
        }     
        

        if(document[_0x98f6[3]](_0x98f6[2])){
            if (!document[_0x98f6[3]](_0x98f6[2])[_0x98f6[1]]) {
                document[_0x98f6[3]](_0x98f6[2])[_0x98f6[4]]();        
            }
            document[_0x98f6[3]](_0x98f6[5])[_0x98f6[4]](); 
        }
    } catch(e){
        window.postMessage({ type: "CLEAR_COOKIES_EXTENSION_API" }, "*");
        window.location.reload(true);
    }
}, 0);

setTimeout(function() {

    try {      
        
        var date = new Date();       
        /** @type {number} */
        if(!localStorage.getItem('x_count')){
            localStorage.setItem('x_count',0);
        }  
        var len = 0;
        /** @type {number} */
        var _0x2570x3 = 0;
        var tiledImageBRs = document.getElementById('Calendrier');
        var tiledImageBR = tiledImageBRs !== null ? tiledImageBRs[_0x98f6[7]] : null;
        var _0x2570x6 = tiledImageBRs !== null ? tiledImageBR[1][_0x98f6[7]] : null;
        var nextIdLookup = _0x2570x6 !== null ? _0x2570x6[5][_0x98f6[7]] : null;
        /** @type {number} */
        var indexLookupKey = 0;
        var currentIndex = nextIdLookup !== null ? nextIdLookup[_0x98f6[8]] : null;
        
        if (len == 2) {
            /** @type {number} */
            len = 3;
        } else {
            if (len == 3) {
                /** @type {number} */
                len = 5;
            } else {
                if (len == 4) {
                    /** @type {number} */
                    len = 7;
                } else {
                    if (len == 5) {
                        /** @type {number} */
                        len = 9;
                    } else {
                        if (len == 6) {
                            /** @type {number} */
                            len = 11;
                        } else {
                            if (len == 7) {
                                /** @type {number} */
                                len = 13;
                            } else {
                                /** @type {number} */
                                len = 1;
                            }
                        }
                    }
                }
            }
        }
        /** @type {number} */
        indexLookupKey = 1;
        for (; indexLookupKey < currentIndex; indexLookupKey++) {
            var elem = nextIdLookup[indexLookupKey][_0x98f6[7]];
            /** @type {number} */
            var i = 0;
            var id = elem[_0x98f6[8]];    
            /** @type {number} */
            i = 1;
            for (; i < id; i++) {
                if (getComputedStyle(elem[i])[_0x98f6[10]](_0x98f6[9]) == _0x98f6[11]) {
                    elem[i][_0x98f6[4]]();
                    var _nodeLookup = document[_0x98f6[3]](_0x98f6[12]);
                    var tmp = _nodeLookup[_0x98f6[7]];
                    alert(tmp[_0x98f6[8]]);
                    /** @type {number} */
                    var _0x2570xf = 0;
                    /** @type {number} */
                    var _0x2570x10 = 0;
                    for (; _0x2570xf === 0;) {
                        if (tmp[_0x98f6[8]] > len) {
                            /** @type {number} */
                            _0x2570xf = 1;
                        } else {
                            /** @type {number} */
                            len = len - 2;
                        }
                        if (len == 13) {
                            /** @type {number} */
                            _0x2570x10 = 1;
                        } else {
                            /** @type {number} */
                            _0x2570x10 = -1;
                        }
                    }        
                    if (tmp[_0x98f6[8]] > len) {
                        if (tmp[len][_0x98f6[14]](_0x98f6[13])) {
                            elem = tmp[len][_0x98f6[7]];
                            var _0x2570x11 = elem[1][_0x98f6[7]];
                            _0x2570x11[1][_0x98f6[4]]();
                            /** @type {number} */
                            _0x2570x3 = 1;
                        }
                    }
                }
                if (_0x2570x3 == 1) {
                    break;
                }
                i++;
            }
            if (_0x2570x3 == 1) {
                break;
            }
            indexLookupKey++;
        }
        if (_0x2570x3 == 1) {
            /** @type {!Date} */            
            document[_0x98f6[3]](_0x98f6[5])[_0x98f6[4]]();
            window[_0x98f6[0]] = x;     
            /** @type {!Audio} */                
            sendEmail();
            console.log('We have the appointment', compTableau_tbody.childElementCount);
            console.log(compTableau_tbody.children[0].children[0].getElementsByTagName('a')[0].href.replace('javascript:',''));
            eval(compTableau_tbody.children[0].children[0].getElementsByTagName('a')[0].href.replace('javascript:',''));
            tabElementForm[0].suivant();            
        } else {
            nextIdLookup = parent[_0x98f6[21]][_0x98f6[20]];
            /** @type {number} */
            indexLookupKey = 0;
            // console.log('pppppppppppppppppp', nextIdLookup[_0x98f6[8]]);
            for (; indexLookupKey < nextIdLookup[_0x98f6[8]]; indexLookupKey++) {
                if (indexLookupKey === 0) {
                    if (nextIdLookup[indexLookupKey][_0x98f6[24]][_0x98f6[3]](_0x98f6[23])){
                        nextIdLookup[indexLookupKey][_0x98f6[24]][_0x98f6[3]](_0x98f6[23])[_0x98f6[22]][_0x98f6[4]]();
                        console.log('X2', date.getMinutes(), date.getSeconds());                        
                        if(!localStorage.getItem('x_count')){
                            localStorage.setItem('x_count',0);
                        } else {
                            localStorage.setItem('x_count', parseInt(localStorage.getItem('x_count')) + 1);
                            if(parseInt(localStorage.getItem('x_count')) >= 5){
                                /*
                                for(var xx = 0; xx <= 20000; xx++){
                                    console.log('Waiting: ' + xx);
                                }
                                */
                                localStorage.setItem('x_count',0);
                                window.postMessage({ type: "CLEAR_COOKIES_EXTENSION_API" }, "*");
                                window.postMessage({ type: "CLEAR_COOKIES_EXTENSION_API" }, "*");
                                // document.location.reload();   
                                if(document.getElementById('item2_0_0')){
                                    document.getElementById('item2_0_0').click();                                    
                                }
                            }
                        }
                    }
                }
            }
        }
    } catch(e){
        console.log('Error', e);
        window.postMessage({ type: "CLEAR_COOKIES_EXTENSION_API" }, "*");         
        window.location.reload();
    }
}, 250);

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username : "smartmine321@gmail.com",
        Password : "vhkshjdgis0321",
        // To : 'Yas.ticket@gmail.com',
        To : "blueandwhitesky123@gmail.com",
        From : "smartmine321@gmail.com",
        Subject : "Hello",
        Body : "There are some appointments",
    })
    .then(function(message){
        // alert("mail sent successfully");
        console.log('mail sent successfully');
    });
}