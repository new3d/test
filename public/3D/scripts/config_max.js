jQuery(document).ready(function () {
    var playLocal = true;
    var mycw = true;
    if((document.location + "").indexOf("file:///")!=0 && (document.location + "").indexOf("content://")!=0 || document.location.hostname == "localhost") 
    {
      playLocal = false;
      //mycw = false;
    }
    // ********************************************************************************************************************
    var isMobile = false;

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) 
    {
      isMobile = true;
      //Orient3D(screen.width);      
    }

    // ********************************************************************************************************************
    // Подключение стилей
    var pathTmp = base3Dpath;
    if(typeof playLocal != 'undefined')
      if(playLocal)
        pathTmp = '../..';

    // ADD styles
    if (document.createStyleSheet){
        document.createStyleSheet(pathTmp+'/scripts/styles.css');
        document.createStyleSheet(pathTmp+'/scripts/jquery.fancybox-1.3.4.css');
    }
    else{
        jQuery("head").append(jQuery("<link rel='stylesheet' href='"+pathTmp+"/scripts/styles.css' type='text/css' media='screen' />"));
        jQuery("head").append(jQuery("<link rel='stylesheet' href='"+pathTmp+"/scripts/jquery.fancybox-1.3.4.css' type='text/css' media='screen' />"));
    }
    
    // ********************************************************************************************************************
    // Задание значения для переменных панели управления моделями
    if(base3Dpath.charAt(0) != '/')
		base3Dpath = '/' + base3Dpath;
    base3Dpath = location.protocol + '//' + location.host + base3Dpath;
    var zoomIn    = base3Dpath + '/sysImages/zoom_in.png';
    var zoomOut   = base3Dpath + '/sysImages/zoom_out.png';
    var zoomImg   = base3Dpath + '/sysImages/zoom.png';
    var rotateImg = base3Dpath + '/sysImages/rotate.png';
    var fullScreen  = base3Dpath + '/sysImages/full_screen.png';
    var leftBtn  = base3Dpath + '/sysImages/left.png';
    var rightBtn  = base3Dpath + '/sysImages/right.png';
    var plusBtn = base3Dpath + '/sysImages/plus.png';
    var myCursor = base3Dpath + '/sysImages/jquery.reel.cur';
    
    if(typeof playLocal != 'undefined')
      if(playLocal)
      {
        zoomIn      = '../../sysImages/zoom_in.png';
        zoomOut     = '../../sysImages/zoom_out.png';
        zoomImg     = '../../sysImages/zoom.png';
        rotateImg   = '../../sysImages/rotate.png';
        fullScreen  = '../../sysImages/full_screen.png';
        leftBtn     = '../../sysImages/left.png';
        rightBtn    = '../../sysImages/right.png';
        plusBtn     = '../../sysImages/plus.png';
        myCursor    = '../../sysImages/jquery.reel.cur';
      }
    
    // ********************************************************************************************************************
    // ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
    var timerBtnRotate = 100;  // Влияет на скорость вращения моделей при нажатии на кнопки Вправо и Влево 
    var first = [];
    var zoomActive = [];
    var reelActive = [];
    var activeMode = []; 
    var isZoom = [];           
    var maxZoom = [];
    
    var timeoutLeftBtnId = [];
    var timeoutLeftBtnFId = [];
    var timeoutRightBtnId = [];
    var timeoutRightBtnFId = [];
    
    var isFullScreen = [];
    
    var autoplay = [];
    var thisW = [];
    var thisH = [];
    var imgW = [];
    var imgH = [];
    var firstW = [];
    var firstH = [];
    var framesCnt = [];
    var myImages = [];
    var allAnnotations = [];
    var myImage = [];
    
    var screenW = screen.width;
    var screenH = screen.height;
    
    // ********************************************************************************************************************
    var oneModel = false;//true;
    var existModelsCnt = 1;
    if(typeof existModelsCnt1 != "undefined")
    {
        existModelsCnt = existModelsCnt1;
        //if(existModelsCnt1 > 1)
        //    oneModel = false;
    }
    var myFullScreen = false;
    if(typeof myFullScreen1 != 'undefined')
        myFullScreen = myFullScreen1;
        
    var myStaticMode = false;
    if(typeof myStaticMode1 != 'undefined')
        myStaticMode = myStaticMode1;
        
    // Запуск моделей для данного товара
    if(typeof existModelsCnt != 'undefined')
    {        
      var suff = "";
      var suffStat = "";
      
      for(i=0; i<existModelsCnt; i++)
      {
        if(!oneModel || myStaticMode)
            suff = "-"+(i+1);
        first[i] = true;
        zoomActive[i] = false;
        reelActive[i] = false;
        activeMode[i] = 'zoom'; 
        
        if(typeof myStaticMode != "undefined")
        {
            if(myStaticMode == true)
            {
                jQuery('#hotspots'+suff).empty();
                jQuery('#staticPic'+suff).click(function () {
                    var currI = parseInt(this.id.replace('staticPic-',''))-1;
                    jQuery.fancybox({
                    content: model3D[currI],
                    modal: false,
                    onComplete: function(){
                        start3Dmodel(currI, "-"+(currI+1), base3Dpath); 
                    } 
                    }); 
                });  
            }
            else{
                start3Dmodel(i, suff, base3Dpath);}
        }
        else{
            start3Dmodel(i, suff, base3Dpath);}
      }
    }  
    
    // ################################################################################################################
    
    function getOffset(el) {
        var elem = document.getElementById(el);
        if (elem.getBoundingClientRect) {
            return getOffsetRect(elem)
        } else {
            return getOffsetSum(elem)
        }
    }

    function getOffsetSum(elem) {
        var top=0, left=0
        while(elem) {
            top = top + parseInt(elem.offsetTop)
            left = left + parseInt(elem.offsetLeft)
            elem = elem.offsetParent
        }

        return {top: top, left: left}
    }

    function getOffsetRect(elem) {
        // (1)
        var box = elem.getBoundingClientRect()

        // (2)
        var body = document.body
        var docElem = document.documentElement

        // (3)
        var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
        var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft

        // (4)
        var clientTop = docElem.clientTop || body.clientTop || 0
        var clientLeft = docElem.clientLeft || body.clientLeft || 0

        // (5)
        var top  = box.top +  scrollTop - clientTop
        var left = box.left + scrollLeft - clientLeft

        return { top: Math.round(top), left: Math.round(left) }
    }
    
    function switchToFullScreen(toFullScreen, i)
    {
        if(toFullScreen)
          isFullScreen[i] = true;
        else
          isFullScreen[i] = false;
    }
    
    function showFullScreen(i, suff)
    {  
        switchToFullScreen(true, i);
        
        var fullScreenDiv=jQuery("<div id='pageF"+suff+"'><div id='galleryF"+suff+"'><div id='panelF"+suff+"'><img id='myImageF"+suff+"' src='"+jQuery('#myImage'+suff).attr('src')+"'/></div></div><div id='reelControlsPanelF"+suff+"' class='reelControlsPanelFCl'><img id='leftBtnF"+suff+"' src='"+leftBtn+"' alt='Left'><img id='stopButtonF"+suff+"' src='"+jQuery('#stopButton'+suff).attr('src')+"' alt='Stop'><img id='zoomRotateToggleButtonF"+suff+"' src='"+zoomImg+"' alt='Zoom'><img id='playButtonF"+suff+"' src='"+jQuery('#playButton'+suff).attr('src')+"' alt='Play'><img id='rightBtnF"+suff+"' src='"+rightBtn+"' alt='Right'></div></div>");

        var fancyScale = true;
        var fancyAutoDimensions = true;
        var fancyWidth = thisW[i];
        var fancyHeight = thisH[i] + jQuery('#reelControlsPanel'+suff).height();
        var userAgent = navigator.userAgent.toLowerCase();
        if (/msie/.test(userAgent) && parseFloat((userAgent.match(/.*(?:rv|ie)[\/: ](.+?)([ \);]|$)/) || [])[1]) < 9) {
            fancyScale = false;
            fancyAutoDimensions = false;
            fancyWidth += 20;
            fancyHeight += 30;
        }  
        
        for(j=1; j<=existModelsCnt; j++)
        {
          jQuery('#myImage-'+j).trigger('play');
          jQuery('#myImage-'+j).trigger('stop');
        }

        jQuery.fancybox({
          content: fullScreenDiv,
          modal: false,
          autoScale: fancyScale,
          autoDimensions: fancyAutoDimensions,
          width: fancyWidth,
          height: fancyHeight,
          onClosed : function(){
            switchToFullScreen(false, i);
            first[i] = true;
            startReel(i, suff);
          }
        });
        
        setReelControlsPanel(i, suff);
        
        first[i] = true;
        startReel(i, suff);
    }
    
    function showFullScreenIcon(i, suff)
    {
      if(isMobile || isFullScreen[i] || !myFullScreen)
        return;
        
      if(jQuery('#go_full_screen'+suff).length == 0)
      {
        jQuery('body').append("<img id='go_full_screen"+suff+"' class='go_full_screenCl' src='"+fullScreen+"'/>");
        
        jQuery('#go_full_screen'+suff).click(function () {
            activeFunctionOff(i, suff);
            showFullScreen(i, suff);
        });
      }
      
      if (jQuery("#page"+suff).css('position') == 'absolute')
      {
        var tmp1 = parseInt(jQuery('#page'+suff).css('left').replace('px',''));
        var tmp2 = parseInt(jQuery('#page'+suff).css('top').replace('px',''));
        
        jQuery('#go_full_screen'+suff).css('left', tmp1 + imgW[i] - 32 - 3);
        jQuery('#go_full_screen'+suff).css('top', tmp2+5);
      }
      else
      {
        var x = getOffset('myImage'+suff).left; 
        var y = getOffset('myImage'+suff).top;
        jQuery('#go_full_screen'+suff).css('left', x + imgW[i] - 32-2);
        jQuery('#go_full_screen'+suff).css('top', y+2);
      }
      jQuery('#go_full_screen'+suff).css('position', 'absolute');
      jQuery('#go_full_screen'+suff).show();
    }
    
    // ################################################################################################################
    
    function activateZoom(i, suff) {
        var normalSrc = jQuery((isFullScreen[i]) ? '#myImageF'+suff : '#myImage'+suff).attr('src');
        var zoomSrc = normalSrc.replace('img', 'img_zoom');
        activeFunctionOff(i, suff);
        jQuery((isFullScreen[i]) ? '#zoomRotateToggleButtonF'+suff : '#zoomRotateToggleButton'+suff).attr('src', rotateImg);
        activeMode[i] = 'reel';
        jQuery((isFullScreen[i]) ? '#myImageF'+suff : '#myImage'+suff).attr('src', normalSrc);
        if (isZoom[i])
            jQuery((isFullScreen[i]) ? '#myImageF'+suff : '#myImage'+suff).attr('src-big', zoomSrc);
        startZoom(i, suff);
    }
    
    function activeFunctionOff(i, suff) {
        if (zoomActive[i])
            zoomOff(i, suff);
        if (reelActive[i])
            reelOff(i, suff);
    }

    function zoomOff(i, suff) {
        jQuery((isFullScreen[i]) ? '#myImageF'+suff : '#myImage'+suff).axzoomer('destroy');
        jQuery((isFullScreen[i]) ? '#myImageF'+suff : '#myImage'+suff).css(
            {
                'position': 'relative',
                'top': '0',
                'left': '0'
            });
        zoomActive[i] = false;
    }

    function reelOff(i, suff) {
        jQuery((isFullScreen[i]) ? '#myImageF'+suff : '#myImage'+suff).unreel();
        reelActive[i] = false;
    }

    function activateRotate(i, suff) {
        activeFunctionOff(i, suff);
        jQuery((isFullScreen[i]) ? '#zoomRotateToggleButtonF'+suff : '#zoomRotateToggleButton'+suff).attr('src', zoomImg);
        activeMode[i] = 'zoom';
        if(!first[i] || autoplay[i])
            startReel(i, suff);
    }
    
    // ################################################################################################################
    
    function setVisibilityButtons(i, suff, vis)
    {
        var postfix = '';
        if(isFullScreen[i])
            postfix = 'F';
        jQuery('#leftBtn'+postfix+suff).css('visibility',vis);
        jQuery('#rightBtn'+postfix+suff).css('visibility',vis);
        jQuery('#stopButton'+postfix+suff).css('visibility',vis);
        jQuery('#playButton'+postfix+suff).css('visibility',vis);
    }
    
    function clickZoomRotateToggleButton(i, suff)
    {   
        if (activeMode[i] == 'zoom') {
            setVisibilityButtons(i, suff, 'hidden');
            if(jQuery('#go_full_screen'+suff).length > 0 && !isFullScreen[i])
              jQuery('#go_full_screen'+suff).css('visibility', 'hidden');
            activateZoom(i, suff);
        } else if (activeMode[i] == 'reel') {
            setVisibilityButtons(i, suff, 'visible');
            if(jQuery('#go_full_screen'+suff).length > 0 && !isFullScreen[i])
              jQuery('#go_full_screen'+suff).css('visibility', 'visible');
            activateRotate(i, suff);
        }
    }
    
    function addEventListenerToZoomRatateToggleButton(i, suff)
    {
      jQuery(document).on("click", "#zoomRotateToggleButton"+suff, function(event){
        var i = parseInt(this.id.replace(/.*(?=-\d+$)/g,'').replace("-",""))-1; if(!oneModel || myStaticMode) var suff = "-"+(i+1); else { var suff = ""; i = 0; }
        clickZoomRotateToggleButton(i, suff);    
      });
    
      jQuery(document).on("click", "#zoomRotateToggleButtonF"+suff, function(event){
        var i = parseInt(this.id.replace(/.*(?=-\d+$)/g,'').replace("-",""))-1; if(!oneModel || myStaticMode) var suff = "-"+(i+1); else { var suff = ""; i = 0; }
        clickZoomRotateToggleButton(i, suff);
      });
    }
    
    // ################################################################################################################
    
    function addEventListeners(i, suff)
    {
      // Left Button
      jQuery(document).on("mousedown", "#leftBtn"+suff, function(event){
        var i = parseInt(this.id.replace(/.*(?=-\d+$)/g,'').replace("-",""))-1; if(!oneModel || myStaticMode) var suff = "-"+(i+1); else { var suff = ""; i = 0; }
        timeoutLeftBtnId[i] = setInterval(function(){jQuery('#myImage'+suff).trigger('stepRight')}, timerBtnRotate);
      });
    
      jQuery(document).on("mouseup", "#leftBtn"+suff, function(event){
        var i = parseInt(this.id.replace(/.*(?=-\d+$)/g,'').replace("-",""))-1; if(!oneModel || myStaticMode) var suff = "-"+(i+1); else { var suff = ""; i = 0; }
        clearInterval(timeoutLeftBtnId[i]);
      });
      
      // Left Button F
      jQuery(document).on("mousedown", "#leftBtnF"+suff, function(event){
        var i = parseInt(this.id.replace(/.*(?=-\d+$)/g,'').replace("-",""))-1; if(!oneModel || myStaticMode) var suff = "-"+(i+1); else { var suff = ""; i = 0; }
        timeoutLeftBtnFId[i] = setInterval(function(){jQuery('#myImageF'+suff).trigger('stepRight')}, timerBtnRotate);
      });
    
      jQuery(document).on("mouseup", "#leftBtnF"+suff, function(event){
        var i = parseInt(this.id.replace(/.*(?=-\d+$)/g,'').replace("-",""))-1; if(!oneModel || myStaticMode) var suff = "-"+(i+1); else { var suff = ""; i = 0; }
        clearInterval(timeoutLeftBtnFId[i]);
      });
      
      // Right Button
      jQuery(document).on("mousedown", "#rightBtn"+suff, function(event){
        var i = parseInt(this.id.replace(/.*(?=-\d+$)/g,'').replace("-",""))-1; if(!oneModel || myStaticMode) var suff = "-"+(i+1); else { var suff = ""; i = 0; }
        timeoutRightBtnId[i] = setInterval(function(){jQuery('#myImage'+suff).trigger('stepLeft')}, timerBtnRotate);
      });
    
      jQuery(document).on("mouseup", "#rightBtn"+suff, function(event){
        var i = parseInt(this.id.replace(/.*(?=-\d+$)/g,'').replace("-",""))-1; if(!oneModel || myStaticMode) var suff = "-"+(i+1); else { var suff = ""; i = 0; }
        clearInterval(timeoutRightBtnId[i]);
      });
      
      // Right Button F
      jQuery(document).on("mousedown", "#rightBtnF"+suff, function(event){
        var i = parseInt(this.id.replace(/.*(?=-\d+$)/g,'').replace("-",""))-1; if(!oneModel || myStaticMode) var suff = "-"+(i+1); else { var suff = ""; i = 0; }
        timeoutRightBtnFId[i] = setInterval(function(){jQuery('#myImageF'+suff).trigger('stepLeft')}, timerBtnRotate);
      });
    
      jQuery(document).on("mouseup", "#rightBtnF"+suff, function(event){
        var i = parseInt(this.id.replace(/.*(?=-\d+$)/g,'').replace("-",""))-1; if(!oneModel || myStaticMode) var suff = "-"+(i+1); else { var suff = ""; i = 0; }
        clearInterval(timeoutRightBtnFId[i]);
      });

      // Left Button Click
      jQuery(document).on("click", "#leftBtn"+suff, function(event){
        jQuery('#myImage'+suff).trigger('stepRight');
      });
    
      // Left Button F Click
      jQuery(document).on("click", "#leftBtnF"+suff, function(event){
        jQuery('#myImageF'+suff).trigger('stepRight');
      });
      
      // Right Button Click
      jQuery(document).on("click", "#rightBtn"+suff, function(event){
        jQuery('#myImage'+suff).trigger('stepLeft');
      });
    
      // Right Button F Click
      jQuery(document).on("click", "#rightBtnF"+suff, function(event){
        jQuery('#myImageF'+suff).trigger('stepLeft');
      });
    
      // Stop Button Click
      jQuery(document).on("click", "#stopButton"+suff, function(event){
        jQuery('#myImage'+suff).trigger('stop');
      });
    
      // Stop Button F Click
      jQuery(document).on("click", "#stopButtonF"+suff, function(event){
        jQuery('#myImageF'+suff).trigger('stop');
      });

      // Play Button Click
      jQuery(document).on("click", "#playButton"+suff, function(event){
        var i = parseInt(this.id.replace(/.*(?=-\d+$)/g,'').replace("-",""))-1; if(!oneModel || myStaticMode) var suff = "-"+(i+1); else { var suff = ""; i = 0; }
        if(first[i]){
            startReel(i, suff);
            first[i] = false;
        }
        else
        {
            for(j=1; j<=i; j++)
            {
              jQuery('#myImage-'+j).trigger('play');
              jQuery('#myImage-'+j).trigger('stop');
            }
            jQuery('#myImage'+suff).trigger('play');
            for(j=i+2; j<=existModelsCnt; j++)
            {
              jQuery('#myImage-'+j).trigger('play');
              jQuery('#myImage-'+j).trigger('stop');
            }
        }
      });
    
      // Play Button F Click
      jQuery(document).on("click", "#playButtonF"+suff, function(event){
        var i = parseInt(this.id.replace(/.*(?=-\d+$)/g,'').replace("-",""))-1; if(!oneModel || myStaticMode) var suff = "-"+(i+1); else { var suff = ""; i = 0; }
        if(first[i]){
            startReel(i, suff);
            first[i] = false;
        }
        else
        {
            for(j=1; j<=i; j++)
            {
              jQuery('#myImage-'+j+'F').trigger('play');
              jQuery('#myImage-'+j+'F').trigger('stop');
            }
            jQuery('#myImageF'+suff).trigger('play');
            for(j=i+2; j<=existModelsCnt; j++)
            {
              jQuery('#myImage-'+j+'F').trigger('play');
              jQuery('#myImage-'+j+'F').trigger('stop');
            }
        }
      });
    }
    
    // ################################################################################################################
    
    function startZoom(i, suff) {
        jQuery((isFullScreen[i]) ? '#myImageF'+suff : '#myImage'+suff).axzoomer({
            'maxZoom': maxZoom[i],
            'showControls': true,
            'zoomIn': zoomIn,
            'zoomOut': zoomOut,
            'opacity': 0.8,
            'sensivity': 12,
            'resetImage': true
        });
        zoomActive[i] = true;
    }
    
    // ################################################################################################################
    
    function startReel(i, suff) {
        jQuery((isFullScreen[i]) ? '#myImageF'+suff : '#myImage'+suff).reel({
            frames: framesCnt[i],
            speed: 0.25,
            timeout: 30,
            delay: 0,
            preloader: 4,
            attr:{width:(isFullScreen[i] ? thisW[i] : imgW[i]) + 'px',height:(isFullScreen[i] ? thisH[i] : imgH[i]) + 'px'},
            modelsCnt:i,
            suff:suff,
            existModelsCnt:existModelsCnt,
            wheelable: false,
            images: myImages[i],
            cw: mycw,
            suffix: (isFullScreen[i]) ? '-reelF' : '-reel',
            annotations: (isFullScreen[i]) ? '' : allAnnotations[i],
            cursor: 'move',
            steppable: true,
            draggable: true,
            clickfree: false
        });
        
        if(autoplay[i] && first[i]){
            first[i] = false;
            reelActive[i] = true;
        }
        else
            reelActive[i] = true;

        // ADD fullscreen icon
        if(myFullScreen && !isFullScreen[i]) 
          setTimeout(function() {showFullScreenIcon(i, suff);}, 1000);
    }
    
    // ################################################################################################################
    
    function setReelControlsPanel(i, suff)
    {
      var btnsW = 244;
      var areaOfzoomRotateToggleButton = 10;
      var postfix = '';
      if(isFullScreen[i])
        postfix = 'F';

      if(jQuery("#leftBtn"+postfix+suff).length == 0)
        jQuery('#reelControlsPanel'+postfix+suff).prepend("<img id='leftBtn"+postfix+suff+"' src='"+leftBtn+"' alt='Left'>");
      
      if(jQuery("#rightBtn"+postfix+suff).length == 0)
        jQuery('#reelControlsPanel'+postfix+suff).append("<img id='rightBtn"+postfix+suff+"' src='"+rightBtn+"' alt='Left'>");

      var tmpW = btnsW + 2*areaOfzoomRotateToggleButton;

      if(imgW[i] < tmpW && !isFullScreen[i])
      {
        var coeff = imgW[i] / tmpW;
        var newTmpW = 0; var tmp = 0;
        tmp = Math.ceil(43*coeff); jQuery("#leftBtn"+postfix+suff).css('width', tmp); newTmpW = newTmpW + tmp;
        jQuery("#leftBtn"+postfix+suff).css('height', Math.ceil(29*coeff));
        tmp = Math.ceil(43*coeff); jQuery("#rightBtn"+postfix+suff).css('width', tmp); newTmpW = newTmpW + tmp;
        jQuery("#rightBtn"+postfix+suff).css('height', Math.ceil(29*coeff));
        tmp = Math.ceil(40*coeff); jQuery("#stopButton"+postfix+suff).css('width', tmp); newTmpW = newTmpW + tmp;
        jQuery("#stopButton"+postfix+suff).css('height', Math.ceil(29*coeff));
        tmp = Math.ceil(52*coeff); jQuery("#zoomRotateToggleButton"+postfix+suff).css('width', tmp); newTmpW = newTmpW + tmp;
        jQuery("#zoomRotateToggleButton"+postfix+suff).css('height', Math.ceil(29*coeff));
        tmp = Math.ceil(40*coeff); jQuery("#playButton"+postfix+suff).css('width', tmp); newTmpW = newTmpW + tmp;
        jQuery("#playButton"+postfix+suff).css('height', Math.ceil(29*coeff));
        
        newTmpW = Math.ceil(newTmpW + 2*areaOfzoomRotateToggleButton*coeff);
        
        jQuery('#leftBtn'+postfix+suff).css('margin-right', Math.ceil((jQuery('#myImage'+postfix+suff).width()-newTmpW)/2));
        jQuery('#rightBtn'+postfix+suff).css('margin-left', Math.ceil((jQuery('#myImage'+postfix+suff).width()-newTmpW)/2));
        
        jQuery('#zoomRotateToggleButton'+postfix+suff).css('margin-left', Math.ceil(areaOfzoomRotateToggleButton*coeff));
        jQuery('#zoomRotateToggleButton'+postfix+suff).css('margin-right', Math.ceil(areaOfzoomRotateToggleButton*coeff));
      }
      else
      {
        tmpW = tmpW - 10;
        jQuery('#leftBtn'+postfix+suff).css('margin-right', Math.ceil((jQuery('#myImage'+postfix+suff).width()-tmpW)/2));
        jQuery('#rightBtn'+postfix+suff).css('margin-left', Math.ceil((jQuery('#myImage'+postfix+suff).width()-tmpW)/2));
        
        jQuery('#zoomRotateToggleButton'+postfix+suff).css('margin-left', areaOfzoomRotateToggleButton);
        jQuery('#zoomRotateToggleButton'+postfix+suff).css('margin-right', areaOfzoomRotateToggleButton);
      }

      jQuery('#reelControlsPanel'+suff).width(imgW[i]+5);
      jQuery('#reelControlsPanel'+suff).css('overflow', 'visible');
    }
    
    // ################################################################################################################
    
    function start3Dmodel(i, suff, base3Dpath)
    {
      myImage[i] = '#myImage'+suff;
      
      // ПАРСИНГ ПАРАМЕТРОВ, ПЕРЕДАННЫХ В КЛАССЕ %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
      
      // FRAMES
      var mysubstr = jQuery(myImage[i]).attr('class').split('_');
      framesCnt[i] = 34;
      if (mysubstr.length > 0)
        if (mysubstr[0].indexOf('frames-') + 1)  
            framesCnt[i] = mysubstr[0].replace('frames-', ''); 
    
      // ZOOM        
      isZoom[i] = false;           
      maxZoom[i] = 1.5;
      if(applyGlobalZoomToEveryModel)
      {
        if(globalZoom)
        {
          maxZoom[i] = globalZoomCoeff;
          isZoom[i] = true;
        }
      }
      else
      {
        if (mysubstr.length > 1)
          if (mysubstr[1].replace('zoom-', '') == '1')
          {
              maxZoom[i] = 3.0;
              isZoom[i] = true;
          }
      }

      // AUTOPLAY
      autoplay[i] = false;
      if(applyGlobalAutoplayToEveryModel)
      {
        if(globalAutoplay)
          autoplay[i] = true;
      }
      else
      {
        if (mysubstr.length > 2)
          if (mysubstr[2].replace('autoplay-', '') == '1')
             autoplay[i] = true;
      }
      
      // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

      // SIZE
      thisW[i] = jQuery(myImage[i]).width();
      thisH[i] = jQuery(myImage[i]).height();
      if(applyGlobalSizeToEveryModel)
      {
        jQuery(myImage[i]).width(globalWidth);
        jQuery(myImage[i]).height(globalHeight);
      }
      
      // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
      
      // HOTSPOTS
      
      function replacer(str, p1, offset, s) {
        return "\""+p1 + suff+"\":";
      }
      
      var innnerText = jQuery.trim(jQuery('#hotspots'+suff).text());
      
      if(innnerText != "")
      {
        innnerText = innnerText.replace(/\"(n\d+)\":/g, replacer)
        var myAnnotations1 = jQuery.parseJSON(innnerText);
      }
      
      if(typeof myAnnotations1 != "undefined" || (typeof myAnnotations != "undefined" && playLocal))
      {
        if(playLocal)
          allAnnotations[i] = myAnnotations;
        else
          allAnnotations[i] = myAnnotations1;
        var keys = [];
        for(var k in allAnnotations[i])
        { 
          allAnnotations[i][k]["image"] = {src:plusBtn,width:32,height: 32};
          allAnnotations[i][k]["link"]["id"] = "showhotspot";
          allAnnotations[i][k]["link"]["href"] = jQuery('#myImage'+suff).attr('src').replace('img/001.jpg', 'hotspots/')+allAnnotations[i][k]["link"]["href"];
        }
      }
      else
        allAnnotations[i] = '';

      // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
      
      // ENGINE 
      
      isFullScreen[i] = false;
       
      imgW[i] = parseInt(jQuery(myImage[i]).css('width').replace('px',''));
      imgH[i] = parseInt(jQuery(myImage[i]).css('height').replace('px',''));
      firstW[i] = imgW[i];
      firstH[i] = imgH[i];
    
      jQuery("body").append('<div id="firstWH'+suff+'" width="'+thisW[i]+'" height="'+thisH[i]+'" style="display:none; width:'+thisW[i]+'px; height:'+thisH[i]+'px;"></div>');
    
      jQuery(myImage[i]).width(imgW[i]);
      jQuery(myImage[i]).height(imgH[i]);
      jQuery(myImage[i]).css('wigth', imgW[i]);
      jQuery(myImage[i]).css('height', imgH[i]);
  
      setReelControlsPanel(i, suff);
      
      jQuery('#panel'+suff).width(imgW[i]);
      
      myImages[i] = jQuery(myImage[i]).attr('src').replace('001.jpg', '###.jpg');
      
      // Добавление обработчиков событий нажатия на кнопки управления
      addEventListeners(i, suff);
      addEventListenerToZoomRatateToggleButton(i, suff);
      
      if(location.href.indexOf("http://new3d.com.ua")==-1 && location.href.indexOf("http://new3d.net")==-1)
        jQuery('#panel'+suff).append("<a id='new3d' style='top:"+(imgH[i]-(playLocal ? 7 : 15))+"px;' title='New3D Studio' target='_blank' href='http://new3d.net'>&nbsp;&nbsp;New3D Studio</a>");

      // Запуск моделей
      first[i] = true;
      startReel(i, suff);
    }
    
    // ################################################################################################################

    jQuery(function () {
            var suff = "";
            for(i=0; i<existModelsCnt; i++)
            {
                if(!oneModel || myStaticMode)
                    suff = "-"+(i+1);
                activateRotate(i, suff);
            }
            return false;
    });
});
