(function(){this.init_interface=function(){var t;return parent&&parent.document.location.href!==document.location.href&&$("body#dialog_container.dialog").addClass("iframed"),$("input:submit:not(.button)").addClass("button"),$("textarea.wymeditor").each(function(){var t,e,i,n;return n=$(this),null!=(t=WYMeditor.INSTANCES[$((n.next(".wym_box").find("iframe").attr("id")||"").split("_")).last().get(0)])&&(null!=(e=n.parent().next())&&e.length>0&&e.find("input, textarea").keydown($.proxy(function(t){var e;return e=t.shiftKey,e&&t.keyCode===$.ui.keyCode.TAB?(this._iframe.contentWindow.focus(),t.preventDefault()):void 0},t)).keyup(function(){var t;return t=!1}),null!=(i=n.parent().prev())&&i.length>0)?i.find("input, textarea").keydown($.proxy(function(t){return t.keyCode===$.ui.keyCode.TAB?(this._iframe.contentWindow.focus(),t.preventDefault()):void 0},t)):void 0}),(t=$("#menu")).length>0&&t.jcarousel({vertical:!1,scroll:1,buttonNextHTML:"<img src='/assets/refinery/carousel-right-5b288008062fdd6c73b742f82f564eef.png' alt='down' height='15' width='10' />",buttonPrevHTML:"<img src='/assets/refinery/carousel-left-66712656360e353e8f35d31895a21538.png' alt='up' height='15' width='10' />",listTag:t.get(0).tagName.toLowerCase(),itemTag:t.children(":first").get(0).tagName.toLowerCase()}),$("#current_locale li a").click(function(t){return $("#current_locale li a span").each(function(){return $(this).css("display","none"===$(this).css("display")?"":"none")}),$("#other_locales").animate({opacity:"toggle",height:"toggle"},250),$("html,body").animate({scrollTop:$("#other_locales").parent().offset().top},250),t.preventDefault()}),$("#existing_image img").load(function(){var t;return t=$("#existing_image").height()-$("form.edit_image").height()+8,t>0?$("form.edit_image .form-actions").css({"margin-top":t}):void 0}),$(".form-actions .form-actions-left input:submit#submit_button").click(function(){return $("<img src='/assets/refinery/ajax-loader-ba9484edf9b3e640a57fad6430b15bdd.gif' width='16' height='16' class='save-loader' />").appendTo($(this).parent())}),$(".form-actions.form-actions-dialog .form-actions-left a.close_dialog").click(function(t){var e;return e=$(".ui-dialog-titlebar-close"),parent&&(e=parent.$(".ui-dialog-titlebar-close")),e.trigger("click"),t.preventDefault()}),$("a.suppress").on("click",function(t){return t.preventDefault()})}}).call(this);