$(function(){
  var trleng = $('#table >tbody tr').length;
  $('.countTR').append(trleng);

  $('#table').tablesorter({
    sortList : [[2,0],[0,0]]
  });

  $('#table th').each(function (column) {
    $(this).click(function() {
      if($(this).is('.asc')) {		// 현재 오름차순인 경우 
        $(this).removeClass('asc');
        $(this).addClass('desc');	// 내림차순으로 변경
        sortdir=-1;

      } else {	// 현재 오름차순 아닌 경우
        $(this).addClass('asc');	// 오름차순으로 변경
        $(this).removeClass('desc'); sortdir=1;
      }

      $(this).siblings().removeClass('asc');
      $(this).siblings().removeClass('desc');

      var rec = $('#table').find('tbody>tr').get();

      rec.sort(function (a, b) {
        var val1 = $(a).children('td').eq(column).text().toUpperCase();
        var val2 = $(b).children('td').eq(column).text().toUpperCase();
        return (val1 < val2)?-sortdir:(val1>val2)?sortdir:0;
      });

      $.each(rec, function(index, row) {
          $('#table tbody').append(row);
      });
    });
 });
});