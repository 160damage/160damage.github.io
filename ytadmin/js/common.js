$(function () {

    $(".chart").each(function () {
        var ctx = $(this);
        var chartTitle = ctx.attr("data-title");
        var chartData = ctx.attr("data-content").split(',');
        var chartLabels = ctx.attr("data-labels").split(',');
        var data = {
            labels: chartLabels,
            datasets: [{
                label: "Просмотры",
                backgroundColor: "rgba(179,181,198,0)",
                borderColor: "rgba(210, 74, 67, 1)",
                pointBackgroundColor: "rgba(210, 74, 67, 1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: chartData,
            }]
        };
        var chartInstance = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                responsive: true
            }
        });
    })

})

$(function () {
    $('.circle').each(function () {
        $(this).circleProgress({
            size: 133,
            startAngle: 4.7,
            fill: {
                color: "#d24a43"
            }
        });
    })
})

$(function () {
    var toggle = $('.sidebar__trigger');
    var sidebar = $('.sidebar');
    toggle.click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        sidebar.toggleClass('sidebar_active');

        $(document).one('click', function closeMenu(e) {
            if (sidebar.has(e.target).length === 0) {
                sidebar.removeClass('sidebar_active');
            } else {
                $(document).one('click', closeMenu);
            }
        });
    })
})

$(function () {
    var modal = $(".modal");
    var close = $(".modal_close");

    close.click(function () {
        modal.removeClass("modal_active")
    })
})