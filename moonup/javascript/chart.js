
var initCharThis = false;
var datacoord = {};
function getCoor(){

    var data= {
        dataArea: [],
        dataRates: [],
        dataRatesInit: []

    };
	var v;
	var i = 0;
    var startTime = new Date().getTime();
	for (j=0; j < 30; j++){
		var	valInterval = Math.random() * (1.8 - 1.5) + 1.5;
		v = {
			y:  valInterval,
			x: startTime + i
		};
		data.dataArea.push(v);
        if(v.y > 1.7){
            data.dataRates.push(
                {
                    x: v.x,
                    y: v.y,
                    urlAvatar: 'images/avachar.png',
                    rate: Math.random() >= 0.4 ? 'images/up.png' : 'images/down.png',
                    rateSum: 5.5,
                    bonus: Math.random() > 0.4 ? 69 : false
                }
            );
            data.dataRatesInit.push(
                {
                    x: v.x,
                    y: v.y + 3,
                    urlAvatar: 'images/avachar.png',
                    rate: Math.random() >= 0.4 ? 'images/up.png' : 'images/down.png',
                    rateSum: 5.5,
                    bonus: Math.random() > 0.4 ? 69 : false
                }
            );
        }
		i-=1000;
	}
	return datacoord = data;
}
getCoor();
var coordArea = datacoord.dataArea.reverse();
var coordRates = datacoord.dataRates.reverse();
var coordRatesInit = datacoord.dataRatesInit.reverse();
var xFirstForLine = coordArea[0].x;
var chartLastPointX = coordArea[coordArea.length - 1].x;
var chartLastPointY = coordArea[coordArea.length - 1].y;
var rightPointExtPlus = 110000;
var extrDistanceForYAxis = 25000;
var rightPointExt = coordArea[coordArea.length - 1].x + rightPointExtPlus;
var rightShapeUrl = 'url(images/ylast.png)';
console.log(coordRatesInit);



var urlAvatar = 'images/avachar.png';




$(document).ready(function() {
    $('#theme').change(function(){
        if($(this).prop("checked")){
            $.cookie('theme', 'light');

        }else{
            $.cookie('theme', 'dark');

        }

        location.reload();
        // chart.destroy();
        // redraw();
        /*          chart.update({

         xAxis: {
         tickColor: colorGrid,
         minorGridLineColor: colorsPrimary,
         minorTickColor: colorsPrimary,
         gridLineColor: colorGrid
         },
         yAxis: {

         gridLineColor: colorGrid,


         labels: {
         style: {
         color: tooltipColor
         }
         }
         },

         tooltip:{
         backgroundColor: 'transparent',
         style: {
         color: tooltipColor
         }
         },

         series: [
         { //график
         color: chartBgColor,
         lineColor: chartLineColor
         } ,
         { //горизонтальная линия
         color: colorRgbMain
         },
         { //горизонтальная линия
         color: colorRgbMain
         },
         { //мигающая точка + индикатор справа

         data: [
         {
         marker: {
         lineColor: "red",
         fillColor: {
         stops: [
         ['50%', cursorColorOneColor],
         ['90%', cursorColorSecondColor]
         ]
         }
         }
         },
         {

         dataLabels: {
         style: {
         'color': dataLabelsColor,
         'text-shadow': dataLabelsShadow
         }
         }
         }
         ]
         },
         {

         }
         ]
         }, true);*/

    });

    if($.cookie('theme') === 'light'){
        console.log($.cookie('theme'));
        $('body').attr('class', 'light');
        $("#theme").attr("checked","checked");
        var colorsPrimary = '#3ec7f4';//
        var colorGrid = '#dbe3e7';//
        var chartBgColor = 'rgba(62, 199, 244, 0.28)';//
        var colorRgbMain = '#abb8be';//
        var chartLineColor = colorsPrimary;//
        var dataLabelsShadow= '1px 0px rgba(51, 51, 51, 0.53)';
        var dataLabelsColor = '#333';
        var cursorColorOneColor = '#6fb100';//
        var cursorColorSecondColor = '#a2ff05';//
        var tooltipColor = '#bac9d1';//
        var rightShapeUrl = 'url(images/ylast-light.png)';
    }else{
        $('body').attr('class', 'dark');
        var colorsPrimary = '#7a7a7a';
        var colorGrid = colorsPrimary;
        var chartBgColor = 'rgba(24, 202, 167, 0.28)';
        var colorRgbMain = 'rgb(24, 202, 167)';
        var chartLineColor = colorRgbMain;
        var dataLabelsShadow= '1px 0px rgba(51, 51, 51, 0.53)';
        var dataLabelsColor = '#333';
        var cursorColorOneColor = '#8fecd5';
        var cursorColorSecondColor = 'rgba(24, 202, 167, 0.2)';
        var tooltipColor = '#fff';
        var rightShapeUrl = 'url(images/ylast.png)';
    }
  $(function () {


      Highcharts.setOptions({
        global: {
          useUTC: false
        },
		credits: false,
		chart: {
		  backgroundColor: null,
		  style: {
			fontFamily: 'AvantGardeGothicC'
		  }
		},
		title: null,
		legend: null,
		plotOptions: {
		  area: {
			fillOpacity: 0.28
		  },
		  series: {
            pointInterval: 1000 * 5, // one sec
              point: {
                  events: {
                      update: function (event) {
                          //alert('jhjk');
                      }
                  }
              },
			dataLabels: {
			  enabled: false,
			  align: 'right'
			}
		  }
		}
      });

      var chart = new Highcharts.Chart('container', {
        chart: {
          type: 'area',
          spacingRight: 2,
          spacingLeft: 0,
          events: {
            load: function () {
                this.myTooltip = new Highcharts.Tooltip(this, this.options.tooltip);
				initCharThis = this;
				var series = this.series[0];
                var seriesLine = this.series[1];
                var seriesBubble = this.series[2];
				var seriesUsers = this.series[3];
				var j = rightPointExt - chartLastPointX;
				var v;
                function animateAvatars(){
                    for(var k = 0; k < seriesUsers.data.length; k++){
                        console.log(seriesUsers.data.length);
                        seriesUsers.data[k].update(coordRates[k].y);
                    }
                }
                setTimeout(animateAvatars,100);

                initCharThis.xAxis[0].setExtremes(xFirstForLine, rightPointExt);
                initCharThis.yAxis[0].setExtremes(0, 3);
				seriesLine.setData([
					{x: xFirstForLine, y: chartLastPointY},
					{x: rightPointExt, y: chartLastPointY}
				]);
				setInterval(function() {
//generate DATA

					var	valInterval = Math.random() * (1.9 - 1.5) + 1.5;
					v = {
                        y:  valInterval,
					    x: new Date().getTime()
					};
                    var dataRate = false;

					if(v.y > 1.8 && v.y < 1.88){
						dataRate = {
                            x: v.x,
                            y: v.y,
                            urlAvatar: 'images/avachar.png',
                            rate: Math.random() >= 0.4 ? 'images/up.png' : 'images/down.png',
                            rateSum: 5.5,
                            bonus: Math.random() < 0.4 ? 69 : false
                        };
					}
//work with DATA
					series.addPoint(v, true, false, true);
                    if(dataRate !== false){
                        seriesUsers.addPoint(dataRate, true, false, true);
                        if(dataRate.bonus !== false){
                            var hh = $(".highcharts-markers.highcharts-series-3 image:last-child");

                            var left = hh[0].attributes.x.value + 'px';
                            var top = hh[0].attributes.y.value + 'px';
                            $('.highcharts-container').append('<div class="bonus" id="bonus_'+left+'"></div>');
                            $('#bonus_'+left).css({'left': left, 'top': top}).html('+'+ dataRate.bonus);
                        }
                        //alert(left);
                    }

					chartLastPointX = v.x;
					chartLastPointY = v.y;



                    if (j <= extrDistanceForYAxis){
                        rightPointExt = chartLastPointX + rightPointExtPlus;
                        var leftExtPoint = chartLastPointX - extrDistanceForYAxis;
                        initCharThis.xAxis[0].setExtremes(leftExtPoint, rightPointExt);
						seriesBubble.setData([v, {x: rightPointExt, y: chartLastPointY}]);
                        seriesLine.setData([{x: leftExtPoint, y: chartLastPointY},{x: rightPointExt, y: chartLastPointY}]);
                        $('.bonus').remove();

                    }else{
						seriesBubble.data[0].update(v);
						seriesBubble.data[1].update({x: rightPointExt, y: chartLastPointY});
                        seriesLine.data[0].update({y: chartLastPointY});
                        seriesLine.data[1].update({y: chartLastPointY});
                    }

                    j = rightPointExt - chartLastPointX;

				}, 1000);
            }
          }
        },
        xAxis: {
          opposite: false,
          title: false,
          type: 'datetime',
          tickWidth: 1,
          tickColor: colorGrid,
          minorGridLineColor: colorsPrimary,
          minorGridLineDashStyle: "Dash",
          minorTickColor: colorsPrimary,
          gridLineWidth:1,
          gridLineColor: colorGrid,
          gridLineDashStyle: "Dash",
		  labels: {
			style: {
			  fontSize: '10px'
			}
		  }
        },
        yAxis: {
			title: false,
			opposite: true,
			type: 'linear',
			tickColor: "transparent",
			gridLineColor: colorGrid,
			gridLineDashStyle: "Dash",
			zIndex: -1,
			crosshair: {
				snap: true,
				width: 0
			},
			style: {
				zIndex: 3
			},
			labels: {
                align: 'right',
				x: -5,
                y: 14,
				style: {
					color: tooltipColor
				},
				zIndex: -1
		  }
      },
		legend: {
			enabled: false
		},

        tooltip:{
            backgroundColor: 'transparent',
            borderWidth: 0,
            useHTML: true,
            shadow: false,
            animation: true,
            formatter: function () {
                var index = this.point.index;
                var thisPointData = this.series.data[index];
                for(var i = 0; i < this.series.data.length - 1; i ++){

                }
                var html = '<span class="tooltip"><img src="'+ thisPointData.rate +'" title="" alt="" width="37px" height="38px" border="0" class="tooltip-img animate"><i class="ye">$</i>' + thisPointData.rateSum +'</span>';
                return html;
            },
            hideDelay: 0,
            style: {
                color: tooltipColor,
                fontWeight: 'bold'
            }
        },

		series: [
		{ //график
			name: 'Chart',
			animation: false,
			tooltip: false,
			enableMouseTracking: false,
			color: chartBgColor,
			lineWidth: 1,
			lineColor: chartLineColor,
			marker: {enabled: false},
			data: coordArea
		} ,
		{ //горизонтальная линия
			type: 'line',
			name: 'Line',
			animation: false,
			tooltip: false,
			enableMouseTracking: false,
			color: colorRgbMain,
			lineWidth: 2,
			marker: {enabled: false},
			data: []
        },
        { //мигающая точка + индикатор справа
            type: 'scatter',
            name: 'Bubble',
			animation: false,
			tooltip: false,
			enableMouseTracking: false,
			zIndex: 99,
            data: [
                {
                    x: coordArea[coordArea.length - 1].x,
                    y: coordArea[coordArea.length - 1].y,
                    name: 'lastChartPoint',
                    id: 'lastChartPointId',
                    marker: {
                        enabled: true,
                        radius: 3,
                        lineColor: "red",
						fillColor: {
							radialGradient: {
								cx: 0.5,
								cy: 0.5,
								r: 0.5,
								fx: 0.5,
								fy: 0.5
							},
							stops: [
								['50%', cursorColorOneColor],
								['90%', cursorColorSecondColor]
							]
						},
                        lineWidth: 0,
                        symbol: "circle"
                    }
                },
                {
                    x: rightPointExt,
                    y: coordArea[coordArea.length - 1].y,
					zIndex: 9999,
                    dataLabels: {
                        enabled: true,
                        align: 'center',
						padding: 3,
                        style: {
							'color': dataLabelsColor,
							'fontSize': '12px',
							'fontWeight': '600',
							'textOutline': '0px 0px contrast',
							'text-shadow': dataLabelsShadow
                        },

                        x: 3,
                        verticalAlign: 'middle',
                        overflow: true,
                        crop: false,
						formatter: function () {
							return this.y.toFixed(5) ;
						}
                    },
                    marker: {
                        radius: 5,
						symbol: rightShapeUrl
                    }
                }
            ]
        },
		{
            type: 'scatter',//ставки
            name: 'Users',
            zIndex: 95,
			tooltip: {
                enable: true
			},
            stickyTracking: false,
            events: {
                afterAnimate: function () {
                },
                click: function(evt){
                },
                mouseOver: function(){
                    function tooltipShow() {
                        $('.highcharts-tooltip > span').css({'opacity': '1'});
                    }
                    if($('.highcharts-tooltip > span').length == 0){
                        setTimeout(tooltipShow, 100);
                    }
                    else{
                        tooltipShow();
                    }
                },
                mouseOut: function() {
                    this.chart.myTooltip.hide();
                    $('.highcharts-tooltip > span').css({'opacity': '0', 'top': '20px'});
                }
            },
			color: 'green',
			marker: {
                radius: 10,
				symbol: 'url('+urlAvatar+')',
                states: {
                    hover: {
                        enabled: false
                    }
                }
            },
            data: coordRatesInit
        }
		]
    });
  });
});