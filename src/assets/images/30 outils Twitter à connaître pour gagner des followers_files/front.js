function setCookie_global(cname,cvalue,exdays)
{
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; expires=0; path=/";
}

function setCookie(cname,cvalue,exdays)
{
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++)
    {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}

function removeCookie(cname)
{
    document.cookie = "itrr_applied_scenario_"+cname+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
}
function deleteCookies() {
    var allcookies = document.cookie.split(";");

    for (var i = 0; i < allcookies.length; i++) {
        var cookie = allcookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
    }
}
function getHashString(p_str) {
    var hash = 0;
    if (p_str.length == 0) return hash;
    for (var i = 0; i < p_str.length; i++) {
        var character = p_str.charCodeAt(i);
        hash = ((hash<<5)-hash)+character;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

function saveCookieForVisitedHistory() {
    var url_hashcode = getHashString(document.location.toString().toLowerCase()).toString();
    var history_visited_previous = getCookie('itrr_history_visited_previous');
    if ((typeof history_visited_previous == 'undefined') || (history_visited_previous == '')) {
        setCookie_global('itrr_history_visited_previous', url_hashcode);
        setCookie_global('itrr_history_visited_count', 1);
    }
    else {
        if (url_hashcode != history_visited_previous) {
            setCookie_global('itrr_history_visited_previous', url_hashcode);
            var visited_count = parseInt(getCookie('itrr_history_visited_count')) + 1;
            setCookie_global('itrr_history_visited_count', visited_count);
        }
    }
}

function saveCookieForSpentTime() {
    var history_starttime_cookie = getCookie('itrr_history_starttime');
    if ((typeof history_starttime_cookie == 'undefined') || (history_starttime_cookie == '')) {
        var d = new Date();
        var time_stamp = d.getTime();
        setCookie_global('itrr_history_starttime', time_stamp);
    }
}

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}

jQuery(document).ready(function () {

    saveCookieForVisitedHistory();
    saveCookieForSpentTime();

    var applied_scenarios = [];

    /**
     * Process continue-reading & inline & float-bar ||||| for drive-traffic & custom.
     */
    jQuery(document).on('click', 'a[itrr-btn="continue"],a[itrr-btn="inline"],a[itrr-btn="float"]', function() {
        var indget_id = jQuery(this).attr('itrr-indget-id');
        var post_id = jQuery(this).attr('itrr-post-id');
        var scenario_id = jQuery(this).attr('itrr_scenario_id');

        jQuery('div#intrigger-' + post_id + '-' + indget_id).css('opacity', '0.5');
        jQuery('div#itrr-loading-gif-' + post_id + '-' + indget_id).width(jQuery('div#intrigger-' + post_id + '-' + indget_id).width());
        jQuery('div#itrr-loading-gif-' + post_id + '-' + indget_id).css('top',jQuery('div#intrigger-' + post_id + '-' + indget_id).height()+'px');
        jQuery('div#itrr-loading-gif-' + post_id + '-' + indget_id).show();
        var data = {
            action: 'itrr_fr_action',
            indget_id: indget_id,
            post_id: post_id,
            scenario_id: scenario_id
        }

        jQuery.ajax({
            url: itrr_admin_ajax_url,
            datatype: 'html',
            type: 'POST',
            data: data,
            success: function(respond) {
                ret = jQuery.parseJSON(respond);
                jQuery('div#itrr-loading-gif-' + post_id + '-' + indget_id).remove();
                jQuery('div#intrigger-' + post_id + '-' + indget_id).css('opacity', '1');
                if(ret.type == 'float_bar'){
                    jQuery("#float_bar_wrap").fadeOut(200, function () {
                        jQuery("#float_bar_wrap").html("");
                    });
                    jQuery("html").animate({'padding': '0px'});
                }else if(ret.type == 'inline'){
                    if(ret.content != '') {
                        jQuery("#int_inline_scenario").html(ret.content);
                    }else{
                        jQuery("#int_inline_scenario").remove();
                    }
                }else{
                    // continue indget
                    jQuery('div#intrigger-' + post_id + '-' + indget_id).html(ret.content);
                    ////location.reload();
                }

            }
        });

        return true;
    });

    /**
     * Process continue-reading & inline & float-bar ||||| for collect-email.
     *
     */
    jQuery('input.itrr_collect_email').change(function() {
        jQuery(this).removeClass('error');
    });
    jQuery(document).on('click', 'a[itrr-btn="continue_collect"],a[itrr-btn="inline_collect"],a[itrr-btn="float_collect"]', function() {

        var indget_id = jQuery(this).attr('itrr-indget-id');
        var post_id = jQuery(this).attr('itrr-post-id');
        var scenario_id = jQuery(this).attr('itrr_scenario_id');
        if (jQuery('div#itrr-loading-gif-' + post_id + '-' + indget_id).css('display') != 'none' && jQuery('div#intrigger-continue-' + post_id + '-' + indget_id).attr('itrr_post_id') == post_id) {
            return false;
        }
        var email = jQuery('input#itrr_collect_email_' + indget_id + '_' + post_id).val();
        if (!isValidEmailAddress(email)) {
            jQuery('input#itrr_collect_email_' + indget_id + '_' + post_id).addClass('error');
            return false;
        }

        jQuery('div#intrigger-' + post_id + '-' + indget_id).css('opacity', '0.5');
        jQuery('div#itrr-loading-gif-' + post_id + '-' + indget_id).width(jQuery('div#intrigger-' + post_id + '-' + indget_id).width());
        jQuery('div#itrr-loading-gif-' + post_id + '-' + indget_id).css('top',jQuery('div#intrigger-' + post_id + '-' + indget_id).height()+'px');
        jQuery('div#itrr-loading-gif-' + post_id + '-' + indget_id).show();

        var data = {
            action: 'itrr_fr_action',
            indget_id: indget_id,
            post_id: post_id,
            email: email,
            page: window.location.pathname,
            scenario_id: scenario_id
        }
        jQuery.ajax({
            url: itrr_admin_ajax_url,
            datatype: 'html',
            type: 'POST',
            data: data,
            success: function(respond) {
                ret = jQuery.parseJSON(respond);
                jQuery('div#itrr-loading-gif-' + post_id + '-' + indget_id).remove();
                jQuery('div#intrigger-' + post_id + '-' + indget_id).css('opacity', '1');
                if(ret.type == 'float_bar'){
                    jQuery("#float_bar_wrap").find('div').css('display','none');
                    jQuery("#float_bar_wrap").append(ret.confirmation);
                    jQuery("#float_bar_wrap").css('height','46px').css('text-align','center');
                    jQuery(".int_float_confirm a").css('color','inherit');
                   
                }
                else if(ret.type == 'inline'){
                    if(ret.content != '') {
                        jQuery("#int_inline_scenario").html(ret.content);
                    }else{
                        jQuery("#int_inline_scenario").remove();
                    }
                }
                else {
                    location.reload();
                }
                //remove cookie of itrr_applied_ after conversion generated
                var cookie_val = getCookie('itrr_generated_conversion_' + scenario_id);
                if (!isNaN(cookie_val)) {
                    //removeCookie('itrr_applied_scenario_' + scenario_id);
                    //deleteCookies();
                }
            }
        });

        return true;
    });


    // Process gradient for continue-reading indget.
    jQuery('div.itrr-excerpt-gradient').each(function() {
        var parent = jQuery(this).parent();
        var parent_height = parent.height();
        var line_height = parseInt(parent.css('line-height').replace('px', ''));
        var line_height_four_line = line_height * 4;
        var gradient_height = line_height_four_line;
        if (parent_height < line_height_four_line) {
            gradient_height = parent_height;
        }
        jQuery(this).height(gradient_height);
    });

    // Process for retargeting rule.
    jQuery('div.int-indget').each(function() {
        var scenario_id = parseInt(jQuery(this).attr('itrr_scenario_id'));
        applied_scenarios.push(scenario_id);
        var is_applied_scenario = parseInt(jQuery(this).attr('itrr_is_applied_scenario'));
        var is_applied_not_scenario = parseInt(jQuery(this).attr('itrr_is_applied_not_scenario'));
        var post_id = parseInt(jQuery(this).attr('itrr_post_id'));
        if ((scenario_id > 0) && (is_applied_scenario == 1)) {
            var applied_scenario_count = 0;
            var cookie_val = getCookie('itrr_applied_scenario_' + scenario_id);
            if (!isNaN(cookie_val) && cookie_val != "") {
                applied_scenario_count = parseInt(cookie_val);
            }
            applied_scenario_count = applied_scenario_count + 1;
            setCookie_global('itrr_applied_scenario_' + scenario_id, applied_scenario_count);
        }

        if ((post_id > 0) && (is_applied_not_scenario == 1)) {
            setCookie_global('itrr_applied_not_scenario_' + post_id, 1);
        }
    });

    ///////////////////////////////////////////////////
    /**
     * Process inline | collect email
     */

    /**
     * Process inline | drive-traffic & custom.
     */

    ///////////////////////////////////////////////////
    /**
     * Process floating bar...
     */


    var float_height = jQuery('#float_bar_wrap').height()+10+2;// 10 - padding, 2 - border
	var admin_bar = jQuery('#wpadminbar').height() != null ? jQuery('#wpadminbar').height() : 0;

    jQuery(document).on('click','#int_indget_float_close_top',function(){
        var pos = jQuery("#float_bar_wrap").height();
        jQuery("#float_bar_wrap").animate({top: -pos-100+admin_bar+"px"});
        jQuery("#int_indget_float_open_top").animate({top: pos+85+"px"});
        jQuery("html").animate({'padding-top': admin_bar + 'px'});
    });
    jQuery(document).on('click', '#int_indget_float_open_top', function(){
        jQuery("#float_bar_wrap").animate({'top': admin_bar + 'px'});
        jQuery("#int_indget_float_open_top").animate({top: admin_bar-96+'px'});
        jQuery("html").animate({'padding-top': float_height + admin_bar + 'px'});
    });
    //
    jQuery(document).on('click', '#int_indget_float_close_bottom', function(){
        var pos = jQuery("#float_bar_wrap").height();
        jQuery("#float_bar_wrap").animate({bottom: -pos-100+"px"});
        jQuery("#int_indget_float_open_bottom").animate({bottom: pos+85+"px"});
        jQuery("html").animate({'padding-bottom': '0px'});
    });
    jQuery(document).on('click','int_indget_float_open_bottom', function(){
        jQuery("#float_bar_wrap").animate({bottom: "0px"});
        jQuery("#int_indget_float_open_bottom").animate({bottom: "-96px"});
        jQuery("html").animate({'padding-bottom': float_height + 'px'});
    });

    function float_wrap(){
        jQuery( "body" ).prepend(jQuery('#intrigger_float').html());

        jQuery('#intrigger_float').html('');
        setTimeout(
            function()
            {
                if(jQuery('#float_bar_wrap').data('pos')=='top'){
                    jQuery("#float_bar_wrap").animate({'top': admin_bar + 'px'});
                    jQuery("html").animate({'padding-top': float_height + 'px'});
                }else{
                    jQuery("#float_bar_wrap").animate({'bottom': '0px'});
                    jQuery("html").animate({'padding-bottom': float_height + 'px'});
                }
            }, 500);
    }


    /**
     * Process floating bar...| collect email
     */

    /**
     * Process floating bar...| drive-traffic & custom.
     */

    /**
     *  Progress floating bar scrolling....
     */
    if(typeof ITRR_FLOAT_SCROLL == 'undefined'){
        var float_scroll = 0;
    }else{
        var float_scroll = JSON.parse(ITRR_FLOAT_SCROLL);
    }
    if(float_scroll == 0){
        jQuery('#float_bar_wrap').css('display','block');
        float_wrap();
    }
    var page_h = jQuery('body').height();
    var myScrollFunc = function () {
        var y = window.scrollY;
        if (y >= page_h * float_scroll /100 && jQuery('#float_bar_wrap').html() != "" && float_scroll != 0) {
            float_wrap();
            jQuery('#float_bar_wrap').fadeIn();
            //
            jQuery("html").css('padding-' + ITRR_FLOAT_POS, float_height + 'px');
            float_scroll = 0;
        }
    };
    window.addEventListener("scroll", myScrollFunc);

});
