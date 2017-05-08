var ctx = $("#myChart");
var chartData = $("#myChart").attr("chartData");
var arr = chartData.split(',');
var data = {
    labels: ["Апрель 24", "Апрель 27", "Апрель 30"],
    datasets: [
        {
            label: "Просмотры",
            backgroundColor: "rgba(179,181,198,0)",
            borderColor: "rgba(210, 74, 67, 1)",
            pointBackgroundColor: "rgba(210, 74, 67, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: arr,
        }
    ]
};
var chartInstance = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        responsive: true
    }
});


      $('.circle').circleProgress({
    size: 133,
    startAngle: 4.7,
    fill: {
      color: "#d24a43"
    }
  });

var toggle = $('.sidebar__trigger');
var sidebar = $('.sidebar');
  toggle.click(function(e){
    e.preventDefault();
    e.stopPropagation();

    sidebar.toggleClass('sidebar_active');

    $(document).one('click', function closeMenu (e){
        if(sidebar.has(e.target).length === 0){
            sidebar.removeClass('sidebar_active');
        } else {
            $(document).one('click', closeMenu);
        }
    });
})

// Get the modal

var modal = $(".modal");

var close = $(".modal_close");

close.click(function(){
    modal.removeClass("modal_active")
})
// When the user clicks on <span> (x), close the modal
// close.onclick = function() {
//     modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.removeClass("modal_active")
//     }
// }