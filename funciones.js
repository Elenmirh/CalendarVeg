function start(){
    document.body.style.zoom="100%";
    lastclick=mesactual;
    //A la función Calc hay que llamar con mesactual
    Calc (mesactual);
    setInterval(AnimSello,5000);
}


////Esta función modifica el texto del mes en el micalendar, también cambiar el color del cuadro seleccionado entre verde y negro
function Showmonth (month){
    mesactual = month;
    console.log(month);
    document.getElementById("nombremes").textContent=nombremes[month-1];
    if (lastclick!=month) 
    {
        document.getElementById(nombremes[month-1]).style.fill="#00FF00";
    }
}

function Hidemonth(month){
    document.getElementById("nombremes").textContent=nombremes[month-1];
    if (lastclick!=month)
    {
        document.getElementById(nombremes[month-1]).style.fill="#a2c23d";
    }              

}

function Resetmonth(){
    //alert("reseteando");
    document.getElementById("nombremes").textContent=nombremes[lastclick-1];
}

////Esta función calcula la canción según la estación del año 
function Calc(month){
    document.getElementById("primavera").pause();
    document.getElementById("primavera").currentTime=0;
    document.getElementById("verano").pause();
    document.getElementById("verano").currentTime=0;
    document.getElementById("otono").pause();
    document.getElementById("otono").currentTime=0;
    document.getElementById("invierno").pause();
    document.getElementById("invierno").currentTime=0;

    switch (month){
        case 3: 
        case 4:
        case 5:
            document.getElementById("primavera").play();
            season=1;
        break;
        case 6:
        case 7:
        case 8: 
            document.getElementById("verano").play();
            season=2;
        break;
        case 9:
        case 10:
        case 11: 
            document.getElementById("otono").play();
            season=3;
        break;
        case 12:
        case 1:
        case 2:
            document.getElementById("invierno").play();
            season=4;
        break;
    }        
         
    if (lastclick!=-1){
        document.getElementById(nombremes[lastclick-1]).style.fill="#a2c23d";
        Hidemonth(month);                        
        lastclick=month;            
    }
    Showmonth(month);
    document.getElementById(nombremes[month-1]).style.fill="#000000";

    if (Changecolor)
        clearInterval(Changecolor);

    index_path=1;
    
    Changecolor=setInterval(animation,50);
    //console.log("start animacion:",index_path);
    
    temporada();

    devilloop();
    
}


////La función del bucle del demonio pinta las verduras y vegetales de cada mes 
function devilloop(){

let htmlver="";
let htmlfru="";

//VERDURA

//Temporada

let verY=2;

for (let index=0;index<selectvertem.length;index++){
    htmlver+='<div class="rounded" style="top:'+ verY+'vh;'+' left:'+ '1vw"'+'>';
    htmlver+='<div class="nombrevegetal">'+ Vegetales[selectvertem[index]].nombre+'</div>';
    htmlver+='<div class="foto1"><img src="img/'+Vegetales[selectvertem[index]].id+'_1.png" height="100%" width="100%"></img></div>';
    htmlver+='<div class="sello"><img src="img/VERDURA_TEMP.svg" height="15%" width="15%"></img></div>';
    htmlver+='<div class="grafico">'+make_grafico_svg(selectvertem,index)+'</div>';
    htmlver+='<div class="foto2"><img src="img/'+Vegetales[selectvertem[index]].id+'_2.png" height="100%" width="100%"></img></div>';
    htmlver+='</div>';
    verY+=37;
}

//Pretemporada

for (let index=0;index<selectverpre.length;index++){
    htmlver+='<div class="rounded" style="top:'+ verY+'vh;'+' left:'+ '1vw"'+'>';
    htmlver+='<div class="nombrevegetal">'+ Vegetales[selectverpre[index]].nombre+'</div>';
    htmlver+='<div class="foto1"><img src="img/'+Vegetales[selectverpre[index]].id+'_1.png" height="100%" width="100%"></img></div>';
    htmlver+='<div class="sello"><img src="img/VERDURA_PRETEMP.svg" height="15%" width="15%"></img></div>';
    htmlver+='<div class="grafico">'+make_grafico_svg(selectverpre,index)+'</div>';
    htmlver+='<div class="foto2"><img src="img/'+Vegetales[selectverpre[index]].id+'_2.png" height="100%" width="100%"></img></div>';
    htmlver+='</div>';
    verY+=37;
}

//Postemporada

for (let index=0;index<selectverpos.length;index++){
    htmlver+='<div class="rounded" style="top:'+ verY+'vh;'+' left:'+ '1vw"'+'>';
    htmlver+='<div class="nombrevegetal">'+ Vegetales[selectverpos[index]].nombre+'</div>';
    htmlver+='<div class="foto1"><img src="img/'+Vegetales[selectverpos[index]].id+'_1.png" height="100%" width="100%"></img></div>';
    htmlver+='<div class="sello"><img src="img/VERDURA_POSTEMP.svg" height="15%" width="15%"></img></div>';
    htmlver+='<div class="grafico">'+make_grafico_svg(selectverpos,index)+'</div>';
    htmlver+='<div class="foto2"><img src="img/'+Vegetales[selectverpos[index]].id+'_2.png" height="100%" width="100%"></img></div>';
    htmlver+='</div>';
    verY+=37;
}

//FRUTA

//Temporada
let fruY=2;

for (let index=0;index<selectfrutem.length;index++){

    htmlfru+='<div class="rounded" style="top:'+ fruY+'vh;'+' left:'+ '1vw"'+'>';
    htmlfru+='<div class="nombrevegetal">'+ Vegetales[selectfrutem[index]].nombre+'</div>';
    htmlfru+='<div class="foto1"><img src="img/'+Vegetales[selectfrutem[index]].id+'_1.png" height="100%" width="100%"></img></div>';
    htmlfru+='<div class="sello"><img src="img/FRUTA_TEMP.svg" height="15%" width="15%"></img></div>';
    htmlfru+='<div class="grafico">'+make_grafico_svg(selectfrutem,index)+'</div>';
    htmlfru+='<div class="foto2"><img src="img/'+Vegetales[selectfrutem[index]].id+'_2.png" height="100%" width="100%"></img></div>';
    htmlfru+='</div>';
    fruY+=37;
}

//Pretemporada

for (let index=0;index<selectfrupre.length;index++){

    htmlfru+='<div class="rounded" style="top:'+ fruY+'vh;'+' left:'+ '1vw"'+'>';
    htmlfru+='<div class="nombrevegetal">'+ Vegetales[selectfrupre[index]].nombre+'</div>';
    htmlfru+='<div class="foto1"><img src="img/'+Vegetales[selectfrupre[index]].id+'_1.png" height="100%" width="100%"></img></div>';
    htmlfru+='<div class="sello"><img src="img/FRUTA_PRETEMP.svg" height="15%" width="15%"></img></div>';
    htmlfru+='<div class="grafico">'+make_grafico_svg(selectfrupre,index)+'</div>';
    htmlfru+='<div class="foto2"><img src="img/'+Vegetales[selectfrupre[index]].id+'_2.png" height="100%" width="100%"></img></div>';
    htmlfru+='</div>';
    fruY+=37;
}

//Postemporada

for (let index=0;index<selectfrupos.length;index++){

    htmlfru+='<div class="rounded" style="top:'+ fruY+'vh;'+' left:'+ '1vw"'+'>';
    htmlfru+='<div class="nombrevegetal">'+ Vegetales[selectfrupos[index]].nombre+'</div>';
    htmlfru+='<div class="foto1"><img src="img/'+Vegetales[selectfrupos[index]].id+'_1.png" height="100%" width="100%"></img></div>';
    htmlfru+='<div class="sello"><img src="img/FRUTA_POSTEMP.svg" height="15%" width="15%"></img></div>';
    htmlfru+='<div class="grafico">'+make_grafico_svg(selectfrupos,index)+'</div>';
    htmlfru+='<div class="foto2"><img src="img/'+Vegetales[selectfrupos[index]].id+'_2.png" height="100%" width="100%"></img></div>';
    htmlfru+='</div>';
    fruY+=37;
}


document.getElementById("listver").scrollTo(0,0);
document.getElementById("listfru").scrollTo(0,0);

document.getElementById("listver").innerHTML=htmlver;
document.getElementById("listfru").innerHTML=htmlfru;
}



////El array grafico corresponde al grafico de cada vegetal
let grafico=[];

////El array grafico es el conjunto de graficos de un mes
let graficos=[];

const TEMPORADA=true;
const PRETEMPORADA=true; 
const POSTEMPORADA=true; 

function check_map(index,map){
    if (map[mesactual-1]=="1"){
        return true;
    }
    else {
        return false;
    }
}

////Función que elige los vegetales que están en temporada, pretemporada y postemporada
function temporada() {
    let mes_ini;
    let mes_fin;
    let mesactual_com;
    graficos.length=0;
    
//vaciamos array y lo ponemos a 0
    selectvertem.length=0;
    selectverpre.length=0;
    selectverpos.length=0;
    
    selectfrutem.length=0;
    selectfrupre.length=0;
    selectfrupos.length=0;

    for (let i=0;i<Vegetales.length;i++){
        grafico=["","","","","","","","","","","",""];
        //////////////////////////////////////////////////////////

        for (let mes=0;mes<12;mes++){
            if (Vegetales[i].map_tem[mes]=="1"){
                grafico[mes]="TEMP";
            }
            if (Vegetales[i].map_pre[mes]=="1"){
                grafico[mes]="PRETEMP";
            }
            if (Vegetales[i].map_pos[mes]=="1"){
                grafico[mes]="POSTEMP";
            }
        }

    /////////////////////////////////////////////////////////////
    //En temporada    
        
        if (TEMPORADA){      
        if (check_map(i,Vegetales[i].map_tem)){
            if (Vegetales[i].tipo=="fruta")
                selectfrutem.push(i);
            if (Vegetales[i].tipo=="verdura")
                selectvertem.push(i);
        }
                            
    }

    ////////////////////////////////////////////////////////
    //En pretemporada
    
    if (PRETEMPORADA) {  
        if (check_map(i,Vegetales[i].map_pre)){
            if (Vegetales[i].tipo=="fruta")
                selectfrupre.push(i);
            if (Vegetales[i].tipo=="verdura")
                selectverpre.push(i);
        }
    }
    
    ////////////////////////////////////////////////////////
    //En postemporada
    if (POSTEMPORADA){         

        if (check_map(i,Vegetales[i].map_pos)){
            if (Vegetales[i].tipo=="fruta")
                selectfrupos.push(i);
            if (Vegetales[i].tipo=="verdura")
                selectverpos.push(i);
        }     

    }
    //Aquí acaba la postemporada
    graficos.push(grafico);
    }
}
//Acaba la función funcion temporada

////Función que crea el gráfico central de las frutas y verduras 
function make_grafico_svg(array,index){
    let svg="";
 
    svg='\
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="100%" width="100%"\
    \r\n viewBox="0 0 500 3000" xml:space="preserve" preserveAspectRatio="none">\
    \r\n <defs>\
    \r\n <style type="text/css">\
    \r\n .st0{fill:#feb2b4;stroke:#FF0000;stroke-width:15;stroke-miterlimit:10;}\
    \r\n .st1{font:bold 121px sans-serif;fill: #cccccc}\
    .cl1{fill:#8E7404;stroke:#8E7404;stroke-width:15;stroke-miterlimit:10;}\
    .cl2{fill:#294C23;stroke:#294C23;stroke-width:15;stroke-miterlimit:10;}\
    .cl3{fill:#6D2222;stroke:#6D2222;stroke-width:15;stroke-miterlimit:10;}\
    \r\n</style>\
    \r\n</defs>';

    let parrafo="";

    let level;
    let clase=""; 

    for (let margen=0; margen<12; margen++){
        switch (graficos[array[index]][margen]){
            case "TEMP":
            case "TEMP2":
                level=500;
                clase="cl1";
            break;
            case "PRETEMP":
            case "PRETEMP2":
                level=250; 
                clase="cl2";
            break;
            case "POSTEMP":
            case "POSTEMP2":
                level=250;
                clase="cl3";
            break;
            default:
                level=0;
                clase="";
            break;
        }

        parrafo+='\r\n<rect x="0" y="'+(40+margen*250)+'" class="'+clase+'" width="'+level+'" height="200"/>';
        parrafo+='\r\n<text class="st1" y="'+(180+margen*250)+'">'+nombremes[margen]+'</text>';
    }
    svg+=parrafo;

    svg+='</svg>';
    //alert(svg);
    //console.log(svg);
    //download("pepe.svg",svg);

    return svg;
    }

////Esta función sirve para buscar por texto la fruta o verdura que queramos
function Search(word){
    console.log(word);
    let upperword=word.toUpperCase();
    let upperfind;
    selectvertem.length=0;
    selectverpre.length=0;
    selectverpos.length=0;
    selectfrutem.length=0;
    selectfrupre.length=0;
    selectfrupos.length=0;
    for (let itera=0; itera<Vegetales.length; itera++){
        upperfind=Vegetales[itera].nombre.toUpperCase();
        if (upperfind.includes(upperword)){
            console.log(Vegetales[itera].nombre,"lo contiene");
            if(Vegetales[itera].tipo=="verdura")
                selectvertem.push(itera);
            if(Vegetales[itera].tipo=="fruta")
                selectfrutem.push(itera);
        }
        
    }
    devilloop();
}

////Esta función cambia los colores del fondo según la estación
function animation2(){
        let pSVG = document.getElementById("svgid").contentDocument.getElementById("p"+index_path);
        if (pSVG!=null){
            currentcolor=pSVG.attributes.fill.value;

                let rh=currentcolor.substr(1,2);
                let gh=currentcolor.substr(3,2);
                let bh=currentcolor.substr(5,2);

                let rd=parseInt(rh,16);
                let gd=parseInt(gh,16);
                let bd=parseInt(bh,16);

                let levelgray = CalculeGray(rd,gd,bd);
                
                if(levelgray<16){
                rh=tones[season-1][levelgray][0].toString(16);
                if(rh.length<2) 
                  rh="0"+rh;
                gh=tones[season-1][levelgray][1].toString(16);
                if(gh.length<2) 
                  gh="0"+gh;
                bh=tones[season-1][levelgray][2].toString(16);
                if(bh.length<2) 
                  bh="0"+bh;
                
                newcolor="#"+rh+gh+bh;
                pSVG.style.fill=newcolor;
                pSVG.style.stroke=newcolor;
                }
                else{
                    console.log("Se desborda...", levelgray);
                    pSVG.style.fill="#ff0000";
                    pSVG.style.stroke="#ff0000";
                }
            colors[levelgray]++;
            index_path++
            }
        else{
            clearInterval(Changecolor);

        index_path=1;
        }
}

////Esta función sirve para poder descargar los gráficos (bases de datos u otros) de la página 
function download(filename, content) {
    if (typeof filename==='undefined') filename = ""; // default
    value = content; //document.getElementById('textarea_area').value;

    filetype="text/*";
    extension=filename.substring(filename.lastIndexOf("."));
    for (var i = 0; i < extToMIME.length; i++) {
        if (extToMIME[i][0].localeCompare(extension)==0) {
            filetype=extToMIME[i][1];
            break;
        }
    }


    var pom = document.createElement('a');
    pom.setAttribute('href', 'data: '+filetype+';charset=utf-8,' + '\ufeff' + encodeURIComponent(value)); // Added BOM too
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) { // IE
            blobObject = new Blob(['\ufeff'+value]);
            window.navigator.msSaveBlob(blobObject, filename);
        } else { // FF, Chrome
            var event = document.createEvent('MouseEvents');
            event.initEvent('click', true, true);
            pom.dispatchEvent(event);
        }
    } else if( document.createEventObject ) { // Have No Idea
        var evObj = document.createEventObject();
        pom.fireEvent( 'onclick' , evObj );
    } else { // For Any Case
        pom.click();
    }

}

// ----------------------- Extensions to MIME --------- //

        // List of mime types
        // combination of values from Windows 7 Registry and 
        // from C:\Windows\System32\inetsrv\config\applicationHost.config
        // some added, including .7z and .dat
        var extToMIME = [
            [".323", "text/h323"],
            [".3g2", "video/3gpp2"],
            [".3gp", "video/3gpp"],
            [".3gp2", "video/3gpp2"],
            [".3gpp", "video/3gpp"],
            [".7z", "application/x-7z-compressed"],
            [".aa", "audio/audible"],
            [".AAC", "audio/aac"],
            [".aaf", "application/octet-stream"],
            [".aax", "audio/vnd.audible.aax"],
            [".ac3", "audio/ac3"],
            [".aca", "application/octet-stream"],
            [".accda", "application/msaccess.addin"],
            [".accdb", "application/msaccess"],
            [".accdc", "application/msaccess.cab"],
            [".accde", "application/msaccess"],
            [".accdr", "application/msaccess.runtime"],
            [".accdt", "application/msaccess"],
            [".accdw", "application/msaccess.webapplication"],
            [".accft", "application/msaccess.ftemplate"],
            [".acx", "application/internet-property-stream"],
            [".AddIn", "text/xml"],
            [".ade", "application/msaccess"],
            [".adobebridge", "application/x-bridge-url"],
            [".adp", "application/msaccess"],
            [".ADT", "audio/vnd.dlna.adts"],
            [".ADTS", "audio/aac"],
            [".afm", "application/octet-stream"],
            [".ai", "application/postscript"],
            [".aif", "audio/x-aiff"],
            [".aifc", "audio/aiff"],
            [".aiff", "audio/aiff"],
            [".air", "application/vnd.adobe.air-application-installer-package+zip"],
            [".amc", "application/x-mpeg"],
            [".application", "application/x-ms-application"],
            [".art", "image/x-jg"],
            [".asa", "application/xml"],
            [".asax", "application/xml"],
            [".ascx", "application/xml"],
            [".asd", "application/octet-stream"],
            [".asf", "video/x-ms-asf"],
            [".ashx", "application/xml"],
            [".asi", "application/octet-stream"],
            [".asm", "text/plain"],
            [".asmx", "application/xml"],
            [".aspx", "application/xml"],
            [".asr", "video/x-ms-asf"],
            [".asx", "video/x-ms-asf"],
            [".atom", "application/atom+xml"],
            [".au", "audio/basic"],
            [".avi", "video/x-msvideo"],
            [".axs", "application/olescript"],
            [".bas", "text/plain"],
            [".bcpio", "application/x-bcpio"],
            [".bin", "application/octet-stream"],
            [".bmp", "image/bmp"],
            [".c", "text/plain"],
            [".cab", "application/octet-stream"],
            [".caf", "audio/x-caf"],
            [".calx", "application/vnd.ms-office.calx"],
            [".cat", "application/vnd.ms-pki.seccat"],
            [".cc", "text/plain"],
            [".cd", "text/plain"],
            [".cdda", "audio/aiff"],
            [".cdf", "application/x-cdf"],
            [".cer", "application/x-x509-ca-cert"],
            [".chm", "application/octet-stream"],
            [".class", "application/x-java-applet"],
            [".clp", "application/x-msclip"],
            [".cmx", "image/x-cmx"],
            [".cnf", "text/plain"],
            [".cod", "image/cis-cod"],
            [".config", "application/xml"],
            [".contact", "text/x-ms-contact"],
            [".coverage", "application/xml"],
            [".cpio", "application/x-cpio"],
            [".cpp", "text/plain"],
            [".crd", "application/x-mscardfile"],
            [".crl", "application/pkix-crl"],
            [".crt", "application/x-x509-ca-cert"],
            [".cs", "text/plain"],
            [".csdproj", "text/plain"],
            [".csh", "application/x-csh"],
            [".csproj", "text/plain"],
            [".css", "text/css"],
            [".csv", "text/csv"],
            [".cur", "application/octet-stream"],
            [".cxx", "text/plain"],
            [".dat", "application/octet-stream"],
            [".datasource", "application/xml"],
            [".dbproj", "text/plain"],
            [".dcr", "application/x-director"],
            [".def", "text/plain"],
            [".deploy", "application/octet-stream"],
            [".der", "application/x-x509-ca-cert"],
            [".dgml", "application/xml"],
            [".dib", "image/bmp"],
            [".dif", "video/x-dv"],
            [".dir", "application/x-director"],
            [".disco", "text/xml"],
            [".dll", "application/x-msdownload"],
            [".dll.config", "text/xml"],
            [".dlm", "text/dlm"],
            [".doc", "application/msword"],
            [".docm", "application/vnd.ms-word.document.macroEnabled.12"],
            [".docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
            [".dot", "application/msword"],
            [".dotm", "application/vnd.ms-word.template.macroEnabled.12"],
            [".dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"],
            [".dsp", "application/octet-stream"],
            [".dsw", "text/plain"],
            [".dtd", "text/xml"],
            [".dtsConfig", "text/xml"],
            [".dv", "video/x-dv"],
            [".dvi", "application/x-dvi"],
            [".dwf", "drawing/x-dwf"],
            [".dwp", "application/octet-stream"],
            [".dxr", "application/x-director"],
            [".eml", "message/rfc822"],
            [".emz", "application/octet-stream"],
            [".eot", "application/octet-stream"],
            [".eps", "application/postscript"],
            [".etl", "application/etl"],
            [".etx", "text/x-setext"],
            [".evy", "application/envoy"],
            [".exe", "application/octet-stream"],
            [".exe.config", "text/xml"],
            [".fdf", "application/vnd.fdf"],
            [".fif", "application/fractals"],
            [".filters", "Application/xml"],
            [".fla", "application/octet-stream"],
            [".flr", "x-world/x-vrml"],
            [".flv", "video/x-flv"],
            [".fsscript", "application/fsharp-script"],
            [".fsx", "application/fsharp-script"],
            [".generictest", "application/xml"],
            [".gif", "image/gif"],
            [".group", "text/x-ms-group"],
            [".gsm", "audio/x-gsm"],
            [".gtar", "application/x-gtar"],
            [".gz", "application/x-gzip"],
            [".h", "text/plain"],
            [".hdf", "application/x-hdf"],
            [".hdml", "text/x-hdml"],
            [".hhc", "application/x-oleobject"],
            [".hhk", "application/octet-stream"],
            [".hhp", "application/octet-stream"],
            [".hlp", "application/winhlp"],
            [".hpp", "text/plain"],
            [".hqx", "application/mac-binhex40"],
            [".hta", "application/hta"],
            [".htc", "text/x-component"],
            [".htm", "text/html"],
            [".html", "text/html"],
            [".htt", "text/webviewhtml"],
            [".hxa", "application/xml"],
            [".hxc", "application/xml"],
            [".hxd", "application/octet-stream"],
            [".hxe", "application/xml"],
            [".hxf", "application/xml"],
            [".hxh", "application/octet-stream"],
            [".hxi", "application/octet-stream"],
            [".hxk", "application/xml"],
            [".hxq", "application/octet-stream"],
            [".hxr", "application/octet-stream"],
            [".hxs", "application/octet-stream"],
            [".hxt", "text/html"],
            [".hxv", "application/xml"],
            [".hxw", "application/octet-stream"],
            [".hxx", "text/plain"],
            [".i", "text/plain"],
            [".ico", "image/x-icon"],
            [".ics", "application/octet-stream"],
            [".idl", "text/plain"],
            [".ief", "image/ief"],
            [".iii", "application/x-iphone"],
            [".inc", "text/plain"],
            [".inf", "application/octet-stream"],
            [".inl", "text/plain"],
            [".ins", "application/x-internet-signup"],
            [".ipa", "application/x-itunes-ipa"],
            [".ipg", "application/x-itunes-ipg"],
            [".ipproj", "text/plain"],
            [".ipsw", "application/x-itunes-ipsw"],
            [".iqy", "text/x-ms-iqy"],
            [".isp", "application/x-internet-signup"],
            [".ite", "application/x-itunes-ite"],
            [".itlp", "application/x-itunes-itlp"],
            [".itms", "application/x-itunes-itms"],
            [".itpc", "application/x-itunes-itpc"],
            [".IVF", "video/x-ivf"],
            [".jar", "application/java-archive"],
            [".java", "application/octet-stream"],
            [".jck", "application/liquidmotion"],
            [".jcz", "application/liquidmotion"],
            [".jfif", "image/pjpeg"],
            [".jnlp", "application/x-java-jnlp-file"],
            [".jpb", "application/octet-stream"],
            [".jpe", "image/jpeg"],
            [".jpeg", "image/jpeg"],
            [".jpg", "image/jpeg"],
            [".js", "application/x-javascript"],
            [".json", "application/json"],
            [".jsx", "text/jscript"],
            [".jsxbin", "text/plain"],
            [".latex", "application/x-latex"],
            [".library-ms", "application/windows-library+xml"],
            [".lit", "application/x-ms-reader"],
            [".loadtest", "application/xml"],
            [".lpk", "application/octet-stream"],
            [".lsf", "video/x-la-asf"],
            [".lst", "text/plain"],
            [".lsx", "video/x-la-asf"],
            [".lzh", "application/octet-stream"],
            [".m13", "application/x-msmediaview"],
            [".m14", "application/x-msmediaview"],
            [".m1v", "video/mpeg"],
            [".m2t", "video/vnd.dlna.mpeg-tts"],
            [".m2ts", "video/vnd.dlna.mpeg-tts"],
            [".m2v", "video/mpeg"],
            [".m3u", "audio/x-mpegurl"],
            [".m3u8", "audio/x-mpegurl"],
            [".m4a", "audio/m4a"],
            [".m4b", "audio/m4b"],
            [".m4p", "audio/m4p"],
            [".m4r", "audio/x-m4r"],
            [".m4v", "video/x-m4v"],
            [".mac", "image/x-macpaint"],
            [".mak", "text/plain"],
            [".man", "application/x-troff-man"],
            [".manifest", "application/x-ms-manifest"],
            [".map", "text/plain"],
            [".master", "application/xml"],
            [".mda", "application/msaccess"],
            [".mdb", "application/x-msaccess"],
            [".mde", "application/msaccess"],
            [".mdp", "application/octet-stream"],
            [".me", "application/x-troff-me"],
            [".mfp", "application/x-shockwave-flash"],
            [".mht", "message/rfc822"],
            [".mhtml", "message/rfc822"],
            [".mid", "audio/mid"],
            [".midi", "audio/mid"],
            [".mix", "application/octet-stream"],
            [".mk", "text/plain"],
            [".mmf", "application/x-smaf"],
            [".mno", "text/xml"],
            [".mny", "application/x-msmoney"],
            [".mod", "video/mpeg"],
            [".mov", "video/quicktime"],
            [".movie", "video/x-sgi-movie"],
            [".mp2", "video/mpeg"],
            [".mp2v", "video/mpeg"],
            [".mp3", "audio/mpeg"],
            [".mp4", "video/mp4"],
            [".mp4v", "video/mp4"],
            [".mpa", "video/mpeg"],
            [".mpe", "video/mpeg"],
            [".mpeg", "video/mpeg"],
            [".mpf", "application/vnd.ms-mediapackage"],
            [".mpg", "video/mpeg"],
            [".mpp", "application/vnd.ms-project"],
            [".mpv2", "video/mpeg"],
            [".mqv", "video/quicktime"],
            [".ms", "application/x-troff-ms"],
            [".msi", "application/octet-stream"],
            [".mso", "application/octet-stream"],
            [".mts", "video/vnd.dlna.mpeg-tts"],
            [".mtx", "application/xml"],
            [".mvb", "application/x-msmediaview"],
            [".mvc", "application/x-miva-compiled"],
            [".mxp", "application/x-mmxp"],
            [".nc", "application/x-netcdf"],
            [".nsc", "video/x-ms-asf"],
            [".nws", "message/rfc822"],
            [".ocx", "application/octet-stream"],
            [".oda", "application/oda"],
            [".odc", "text/x-ms-odc"],
            [".odh", "text/plain"],
            [".odl", "text/plain"],
            [".odp", "application/vnd.oasis.opendocument.presentation"],
            [".ods", "application/oleobject"],
            [".odt", "application/vnd.oasis.opendocument.text"],
            [".one", "application/onenote"],
            [".onea", "application/onenote"],
            [".onepkg", "application/onenote"],
            [".onetmp", "application/onenote"],
            [".onetoc", "application/onenote"],
            [".onetoc2", "application/onenote"],
            [".orderedtest", "application/xml"],
            [".osdx", "application/opensearchdescription+xml"],
            [".p10", "application/pkcs10"],
            [".p12", "application/x-pkcs12"],
            [".p7b", "application/x-pkcs7-certificates"],
            [".p7c", "application/pkcs7-mime"],
            [".p7m", "application/pkcs7-mime"],
            [".p7r", "application/x-pkcs7-certreqresp"],
            [".p7s", "application/pkcs7-signature"],
            [".pbm", "image/x-portable-bitmap"],
            [".pcast", "application/x-podcast"],
            [".pct", "image/pict"],
            [".pcx", "application/octet-stream"],
            [".pcz", "application/octet-stream"],
            [".pdf", "application/pdf"],
            [".pfb", "application/octet-stream"],
            [".pfm", "application/octet-stream"],
            [".pfx", "application/x-pkcs12"],
            [".pgm", "image/x-portable-graymap"],
            [".pic", "image/pict"],
            [".pict", "image/pict"],
            [".pkgdef", "text/plain"],
            [".pkgundef", "text/plain"],
            [".pko", "application/vnd.ms-pki.pko"],
            [".pls", "audio/scpls"],
            [".pma", "application/x-perfmon"],
            [".pmc", "application/x-perfmon"],
            [".pml", "application/x-perfmon"],
            [".pmr", "application/x-perfmon"],
            [".pmw", "application/x-perfmon"],
            [".png", "image/png"],
            [".pnm", "image/x-portable-anymap"],
            [".pnt", "image/x-macpaint"],
            [".pntg", "image/x-macpaint"],
            [".pnz", "image/png"],
            [".pot", "application/vnd.ms-powerpoint"],
            [".potm", "application/vnd.ms-powerpoint.template.macroEnabled.12"],
            [".potx", "application/vnd.openxmlformats-officedocument.presentationml.template"],
            [".ppa", "application/vnd.ms-powerpoint"],
            [".ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"],
            [".ppm", "image/x-portable-pixmap"],
            [".pps", "application/vnd.ms-powerpoint"],
            [".ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],
            [".ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"],
            [".ppt", "application/vnd.ms-powerpoint"],
            [".pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
            [".pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
            [".prf", "application/pics-rules"],
            [".prm", "application/octet-stream"],
            [".prx", "application/octet-stream"],
            [".ps", "application/postscript"],
            [".psc1", "application/PowerShell"],
            [".psd", "application/octet-stream"],
            [".psess", "application/xml"],
            [".psm", "application/octet-stream"],
            [".psp", "application/octet-stream"],
            [".pub", "application/x-mspublisher"],
            [".pwz", "application/vnd.ms-powerpoint"],
            [".qht", "text/x-html-insertion"],
            [".qhtm", "text/x-html-insertion"],
            [".qt", "video/quicktime"],
            [".qti", "image/x-quicktime"],
            [".qtif", "image/x-quicktime"],
            [".qtl", "application/x-quicktimeplayer"],
            [".qxd", "application/octet-stream"],
            [".ra", "audio/x-pn-realaudio"],
            [".ram", "audio/x-pn-realaudio"],
            [".rar", "application/octet-stream"],
            [".ras", "image/x-cmu-raster"],
            [".rat", "application/rat-file"],
            [".rc", "text/plain"],
            [".rc2", "text/plain"],
            [".rct", "text/plain"],
            [".rdlc", "application/xml"],
            [".resx", "application/xml"],
            [".rf", "image/vnd.rn-realflash"],
            [".rgb", "image/x-rgb"],
            [".rgs", "text/plain"],
            [".rm", "application/vnd.rn-realmedia"],
            [".rmi", "audio/mid"],
            [".rmp", "application/vnd.rn-rn_music_package"],
            [".roff", "application/x-troff"],
            [".rpm", "audio/x-pn-realaudio-plugin"],
            [".rqy", "text/x-ms-rqy"],
            [".rtf", "application/rtf"],
            [".rtx", "text/richtext"],
            [".ruleset", "application/xml"],
            [".s", "text/plain"],
            [".safariextz", "application/x-safari-safariextz"],
            [".scd", "application/x-msschedule"],
            [".sct", "text/scriptlet"],
            [".sd2", "audio/x-sd2"],
            [".sdp", "application/sdp"],
            [".sea", "application/octet-stream"],
            [".searchConnector-ms", "application/windows-search-connector+xml"],
            [".setpay", "application/set-payment-initiation"],
            [".setreg", "application/set-registration-initiation"],
            [".settings", "application/xml"],
            [".sgimb", "application/x-sgimb"],
            [".sgml", "text/sgml"],
            [".sh", "application/x-sh"],
            [".shar", "application/x-shar"],
            [".shtml", "text/html"],
            [".sit", "application/x-stuffit"],
            [".sitemap", "application/xml"],
            [".skin", "application/xml"],
            [".sldm", "application/vnd.ms-powerpoint.slide.macroEnabled.12"],
            [".sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"],
            [".slk", "application/vnd.ms-excel"],
            [".sln", "text/plain"],
            [".slupkg-ms", "application/x-ms-license"],
            [".smd", "audio/x-smd"],
            [".smi", "application/octet-stream"],
            [".smx", "audio/x-smd"],
            [".smz", "audio/x-smd"],
            [".snd", "audio/basic"],
            [".snippet", "application/xml"],
            [".snp", "application/octet-stream"],
            [".sol", "text/plain"],
            [".sor", "text/plain"],
            [".spc", "application/x-pkcs7-certificates"],
            [".spl", "application/futuresplash"],
            [".src", "application/x-wais-source"],
            [".srf", "text/plain"],
            [".SSISDeploymentManifest", "text/xml"],
            [".ssm", "application/streamingmedia"],
            [".sst", "application/vnd.ms-pki.certstore"],
            [".stl", "application/vnd.ms-pki.stl"],
            [".sv4cpio", "application/x-sv4cpio"],
            [".sv4crc", "application/x-sv4crc"],
            [".svc", "application/xml"],
            [".swf", "application/x-shockwave-flash"],
            [".t", "application/x-troff"],
            [".tar", "application/x-tar"],
            [".tcl", "application/x-tcl"],
            [".testrunconfig", "application/xml"],
            [".testsettings", "application/xml"],
            [".tex", "application/x-tex"],
            [".texi", "application/x-texinfo"],
            [".texinfo", "application/x-texinfo"],
            [".tgz", "application/x-compressed"],
            [".thmx", "application/vnd.ms-officetheme"],
            [".thn", "application/octet-stream"],
            [".tif", "image/tiff"],
            [".tiff", "image/tiff"],
            [".tlh", "text/plain"],
            [".tli", "text/plain"],
            [".toc", "application/octet-stream"],
            [".tr", "application/x-troff"],
            [".trm", "application/x-msterminal"],
            [".trx", "application/xml"],
            [".ts", "video/vnd.dlna.mpeg-tts"],
            [".tsv", "text/tab-separated-values"],
            [".ttf", "application/octet-stream"],
            [".tts", "video/vnd.dlna.mpeg-tts"],
            [".txt", "text/plain"],
            [".u32", "application/octet-stream"],
            [".uls", "text/iuls"],
            [".user", "text/plain"],
            [".ustar", "application/x-ustar"],
            [".vb", "text/plain"],
            [".vbdproj", "text/plain"],
            [".vbk", "video/mpeg"],
            [".vbproj", "text/plain"],
            [".vbs", "text/vbscript"],
            [".vcf", "text/x-vcard"],
            [".vcproj", "Application/xml"],
            [".vcs", "text/plain"],
            [".vcxproj", "Application/xml"],
            [".vddproj", "text/plain"],
            [".vdp", "text/plain"],
            [".vdproj", "text/plain"],
            [".vdx", "application/vnd.ms-visio.viewer"],
            [".vml", "text/xml"],
            [".vscontent", "application/xml"],
            [".vsct", "text/xml"],
            [".vsd", "application/vnd.visio"],
            [".vsi", "application/ms-vsi"],
            [".vsix", "application/vsix"],
            [".vsixlangpack", "text/xml"],
            [".vsixmanifest", "text/xml"],
            [".vsmdi", "application/xml"],
            [".vspscc", "text/plain"],
            [".vss", "application/vnd.visio"],
            [".vsscc", "text/plain"],
            [".vssettings", "text/xml"],
            [".vssscc", "text/plain"],
            [".vst", "application/vnd.visio"],
            [".vstemplate", "text/xml"],
            [".vsto", "application/x-ms-vsto"],
            [".vsw", "application/vnd.visio"],
            [".vsx", "application/vnd.visio"],
            [".vtx", "application/vnd.visio"],
            [".wav", "audio/wav"],
            [".wave", "audio/wav"],
            [".wax", "audio/x-ms-wax"],
            [".wbk", "application/msword"],
            [".wbmp", "image/vnd.wap.wbmp"],
            [".wcm", "application/vnd.ms-works"],
            [".wdb", "application/vnd.ms-works"],
            [".wdp", "image/vnd.ms-photo"],
            [".webarchive", "application/x-safari-webarchive"],
            [".webtest", "application/xml"],
            [".wiq", "application/xml"],
            [".wiz", "application/msword"],
            [".wks", "application/vnd.ms-works"],
            [".WLMP", "application/wlmoviemaker"],
            [".wlpginstall", "application/x-wlpg-detect"],
            [".wlpginstall3", "application/x-wlpg3-detect"],
            [".wm", "video/x-ms-wm"],
            [".wma", "audio/x-ms-wma"],
            [".wmd", "application/x-ms-wmd"],
            [".wmf", "application/x-msmetafile"],
            [".wml", "text/vnd.wap.wml"],
            [".wmlc", "application/vnd.wap.wmlc"],
            [".wmls", "text/vnd.wap.wmlscript"],
            [".wmlsc", "application/vnd.wap.wmlscriptc"],
            [".wmp", "video/x-ms-wmp"],
            [".wmv", "video/x-ms-wmv"],
            [".wmx", "video/x-ms-wmx"],
            [".wmz", "application/x-ms-wmz"],
            [".wpl", "application/vnd.ms-wpl"],
            [".wps", "application/vnd.ms-works"],
            [".wri", "application/x-mswrite"],
            [".wrl", "x-world/x-vrml"],
            [".wrz", "x-world/x-vrml"],
            [".wsc", "text/scriptlet"],
            [".wsdl", "text/xml"],
            [".wvx", "video/x-ms-wvx"],
            [".x", "application/directx"],
            [".xaf", "x-world/x-vrml"],
            [".xaml", "application/xaml+xml"],
            [".xap", "application/x-silverlight-app"],
            [".xbap", "application/x-ms-xbap"],
            [".xbm", "image/x-xbitmap"],
            [".xdr", "text/plain"],
            [".xht", "application/xhtml+xml"],
            [".xhtml", "application/xhtml+xml"],
            [".xla", "application/vnd.ms-excel"],
            [".xlam", "application/vnd.ms-excel.addin.macroEnabled.12"],
            [".xlc", "application/vnd.ms-excel"],
            [".xld", "application/vnd.ms-excel"],
            [".xlk", "application/vnd.ms-excel"],
            [".xll", "application/vnd.ms-excel"],
            [".xlm", "application/vnd.ms-excel"],
            [".xls", "application/vnd.ms-excel"],
            [".xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"],
            [".xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"],
            [".xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
            [".xlt", "application/vnd.ms-excel"],
            [".xltm", "application/vnd.ms-excel.template.macroEnabled.12"],
            [".xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"],
            [".xlw", "application/vnd.ms-excel"],
            [".xml", "text/xml"],
            [".xmta", "application/xml"],
            [".xof", "x-world/x-vrml"],
            [".XOML", "text/plain"],
            [".xpm", "image/x-xpixmap"],
            [".xps", "application/vnd.ms-xpsdocument"],
            [".xrm-ms", "text/xml"],
            [".xsc", "application/xml"],
            [".xsd", "text/xml"],
            [".xsf", "text/xml"],
            [".xsl", "text/xml"],
            [".xslt", "text/xml"],
            [".xsn", "application/octet-stream"],
            [".xss", "application/xml"],
            [".xtp", "application/octet-stream"],
            [".xwd", "image/x-xwindowdump"],
            [".z", "application/x-compress"],
            [".zip", "application/x-zip-compressed"]
    ];
    
    // ----------------------- End of Extensions to MIME --------- //