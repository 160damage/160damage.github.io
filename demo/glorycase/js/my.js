/*BlazedropAnalitics = {
    isEcommerceInit: false,
    initGa: function() {
        if (typeof ga === "undefined") {
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-84655289-1', 'auto');
        }
        return typeof ga !== "undefined"
    },
    initECommerce: function() {
        if (!this.isEcommerceInit) {
            if (this.initGa()) {
                ga('require', 'ec');
                this.isEcommerceInit = true;
            }
        }
        return typeof ga !== "undefined"
    },
    pageview: function() {
        if (this.initGa()) {
            ga('send', 'pageview');
        }
    },
    paymetnFormShow: function(place = 'unset') {
        if (this.initECommerce()) {
            ga('ec:addProduct', {
                'id': 'Form1',
                'name': 'Payment Form'
            });
            ga('ec:setAction', 'click', {list: place});
            ga('send', 'event', place, 'click', 'showForm', {
                hitCallback: function() {
                    $('#addMoneyModal').show();
                }
            });
        }
    },
    checkout: function(amount) {
        if (this.initECommerce()) {
            ga('ec:addProduct', {
                'id': 'Form1',
                'name': 'Payment Form',
                'price': amount
            });
            ga('ec:setAction','checkout');
            ga('send', 'event', 'paymentForm', 'click', 'sendToPayment', {
                hitCallback: function() {
                    window.location.href = '/payments?amount=' + amount;
                }
            });
        }
    },
    logSuccessPayment: function(orderId, amount) {
        if (this.initECommerce()) {
            ga('ec:addProduct', {
                'id': 'Form1',
                'name': 'Payment Form',
                'price': amount
            });
            ga('ec:setAction','purchase',{
                'id': orderId,
                'revenue': amount
            });
            ga('send', 'event', 'paymentPageResult', 'show', 'successPayment', {
                nonInteraction: true
            });
        }
    }
};

BlazedropAnalitics.pageview();*/

$(document).ready(function() {
	localStorage.setItem('isUpdateLive', 'true');
    //change site lang
    $('#webmenu').on('change', function() {
        if($(this).val() != 'en-US' && $(this).val() != 'ru-RU') return false;

        $.ajax({
            url: '/ajax/lang',
            type: 'post',
            data: {
                lang : $(this).val()
            },
            success: function (data) {
                data = JSON.parse(data);
                if(data.success) window.location.reload();
            }
        });
    });


    var startLineHtml;
    //open case
    $('#open-btn').on('click', function(){
        $(this).css('display', 'none');
		localStorage.setItem('isUpdateLive', 'false');
        startLineHtml = $('#scroll-panel').html();

        var case_id = $(this).data('id');

        if(case_id * 1 < 1) return false;
        $.ajax({
            url: '/ajax/open-case',
            type: 'post',
            data: {
                case_id : case_id
            },
            success: function (data) {
                data = JSON.parse(data);
                if(data.success){
                    $('#div_error').css('display', 'none');
                    if(data.balance) $('#span_balance').html(data.balance);

                    if(data.roulette_data) __buildLine(data);
                } else {
                    //$('#open-btn').css('display', 'block');
					localStorage.setItem('isUpdateLive', 'true');
                    if(data.err){
                        $('#div_error').html(data.err);
                        $('#div_error').css('display', 'block');

                        if(data.err.indexOf('user_has_insufficient_funds') + 1) {
                            //BlazedropAnalitics.paymetnFormShow('addmoney');
							$('#addMoneyModal').show();
                        }

                    }
                }
            }
        });

        event.preventDefault();
        return false;
    });

    var __buildLine = function(data){

        var rand = 0;
        function randomInteger(min, max) {
            rand = min + Math.random() * (max + 1 - min);
            rand = Math.floor(rand);
            return rand;
        }
		var scroll_caseW = $('#scroll-panel .openblock_scroll--case:first-child').width()/2;
		var scroll_caseWMinus = 0 - scroll_caseW;
        randomInteger(scroll_caseWMinus, scroll_caseW) //максимум отклонения полосы выбора в рулетке от центра выигранного предмета
		
		
        var hasItems = $('.openblock_scroll--case').length;
		var itemWidth = $('.openblock_scroll--case').outerWidth(true);
        var itemWidthHalf = itemWidth/2;
        var itemWin = data.win_slot + 1 + hasItems;
        var widthAfterItemWin = itemWidth * itemWin;
		
		
		
        var parentWidthHalf = $('#open-block').width() / 2;
        var left = widthAfterItemWin - (parentWidthHalf + itemWidthHalf + rand);
		left = 0 - left;
		console.log(left +','+  data.win_slot+','+rand);
		
		
		
        $.each(data.roulette_data, function(_, v){
            $('<div class="openblock_scroll--case"><div class="openblock_scroll--case-box '+ v.quality +'"><img class="openblock_scroll--case-img" src="/images' + v.image + '" alt=""><div class="openblock_scroll--case-info"><span class="openblock_scroll--case-text">'+ v.name.replace('StatTrak™', '') +'</span><span class="openblock_scroll--case-text">'+ v.type + '</span></div></div></div>').appendTo('#scroll-panel');
        });

        
        //анимация
        var speed = 315;
        $('#scroll-panel').css('left', '').animate({ left: left }, speed * (itemWin/2), 'easeOutQuad', function(){

			setTimeout(function(){
			$('#div_drop_modal').html(data.modal_html);
            $('.opencase-opened').css('display', 'block'); 
								
			var user_xp = $('#user_xp').text() * 1;
			var last_rank_xp = $('#last_rank_xp').text() * 1;
			var next_rank_xp = $('#next_rank_xp').text() * 1;
			
			var t = $('.progressbar'),
				barbefore = $('.progressbar .progress-before').width(),
				perc1 = (next_rank_xp - last_rank_xp) / 100;
				barperc = (user_xp - last_rank_xp) / perc1 + '%';
				
				//barperspx = barperc + '%';
				t.find('.label').append('<div class="perc"><span class="user_xp"></span>/'+ next_rank_xp +'</div>');
				t.find('.bar').animate({width:barperc},1200);
				
				var i = last_rank_xp;
				var timerId = setInterval(
					function() { 
						t.find('.perc .user_xp').text(i);
						if(i == user_xp){
							var labelW = '0 0 0 -' + ($('.progressbar .label').outerWidth() / 2) + 'px' ;
							clearTimeout(timerId);
							t.find('.label').animate({margin:labelW},200);
						}
						i++;
					}, 
				4);
				
				t.find('.label').animate({left:barperc},1200);
				
				$('#open-btn').css('display', 'block');
				localStorage.setItem('isUpdateLive', 'true');
			}, 1200);
        });
    };


    //close drop modal
    $('body').on('click', '#a_close_drop_modal', function() {
        $('.opencase-opened').css('display', 'none');
    });


    //add balance
    $('body').on('click', '#button_add_balance', function() {
        var amount = ($('#input_add_balance').val().replace(',', '.')) * 1;
        //BlazedropAnalitics.checkout(amount);
		window.location.href = '/payments?amount=' + amount;
    });

    //share
    $('body').on('click', '#a_share', function() {
        if($(this).attr('role') == 'vk'){
            $('a:contains(ShareNow)').click();
        }
    });

    //change drop status
    $('body').on('click', '.change_drop_status', function() {
        var drop_id = 0;
        var stat = $(this).attr('role').replace('status_', '');

        if     (stat == 'sell') drop_id = $(this).attr('id').replace('a_sell_drop_', '');
        else if(stat == 'get')  drop_id = $(this).attr('id').replace('a_get_drop_', '');

        if(stat != 'sell' && stat != 'get') return false;
        if(drop_id * 1 < 1) return false;

        $.ajax({
            url: '/ajax/change-drop-status',
            type: 'post',
            data: {
                status : stat,
                drop_id : drop_id
            },
            success: function (data) {
                data = JSON.parse(data);
                if(data.success){
                    if(data.balance) $('#span_balance').html(data.balance);
                    $('.opencase-opened').css('display', 'none');
                }
            }
        });
    });

    //set drop share
    $('body').on('click', '.set_drop_share', function() {
        var drop_id = 0;

        drop_id = $('[id ^= a_get_drop_]').attr('id').replace('a_get_drop_', '');

        if(drop_id * 1 < 1) return false;

        $.ajax({
            url: '/ajax/set-drop-share',
            type: 'post',
            data: {
                drop_id : drop_id
            },
            success: function (data) {

            }
        });
    });


    $('.div_user_drops').on('click', function(){
        var status = $(this).attr('role').replace('status_', '');
        var drop_id = $(this).attr('data-id');

        if(drop_id * 1 < 1 || status * 1 != 0) return false;

        $.ajax({
            url: '/ajax/show-drop-modal',
            type: 'post',
            data: {
                status : status,
                drop_id : drop_id
            },
            success: function (data) {
                data = JSON.parse(data);
                if(data.success){
                    $('#div_drop_modal').html(data.modal_html);
                    $('.opencase-opened').css('display', 'block');

                }
            }
        });
    });


    $("#addmoney").click(function(){
        //BlazedropAnalitics.paymetnFormShow('addmoney');
		$('#addMoneyModal').show();
    });
    $(".add-balance").click(function(){
        //BlazedropAnalitics.paymetnFormShow('addBalance');
		$('#addMoneyModal').show();
    });
    $(".modalDialog .close").click(function(){
        $(this).closest('.modalDialog').hide();
    });
	if($('#profile-box').length > 0){
		$('#profile-box .inp').each(function(){
			if($(this).val().length > 0){
				$(this).addClass('full');
			}
		});
	}
});


function getNewDrops(last_drop){
    $(document).ready(function() {
        if((last_drop.LAST_DROP_ID * 1) < 1) return false;

        var arr = [];
        var live_drops = $('[id ^= a_live_drop_]');
        for(drop in live_drops){
            if(live_drops[drop] && live_drops[drop].id){
                arr.push(live_drops[drop].id.replace('a_live_drop_', '') * 1);
            }
        }
        var last_dom_drop = Math.max.apply(Math, arr) * 1;
        if(last_dom_drop >= last_drop.LAST_DROP_ID) return false;
		if(localStorage.isUpdateLive == 'true'){
        $.ajax({
            url: '/ajax/get-new-drops',
            type: 'post',
            data: {
                drop_id : last_drop.LAST_DROP_ID,
                dom_drop_id : last_dom_drop
            },
            success: function (data) {
                data = JSON.parse(data);
                if(data.success){
                    $('#scroller_contentwrapper').prepend(data.html);

                    setTimeout(function(){
                        var new_drops_count = data.new_drops_count
                        while (new_drops_count) {
                            //console.log(new_drops_count);
                            $('[id ^= a_live_drop_]').last().remove();
                            new_drops_count--;
                        }
                    }, 500);
                }
            }
        });
		}
    });


}