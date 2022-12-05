const key= document.getElementById('key'); 
const memo= document.getElementById('memo'); 

$("#save").on('click',function(){
  const key2= document.getElementById('key'); 
  const memo2= document.getElementById('memo'); 
    let key = $("#key").val();
    let memo = $("#memo").val();
    console.log(key)
    console.log(memo)
    localStorage.setItem(key,memo)
    memo2.value = '';
    key2.value= '' ;

});

    
    const html = `
        <tr>
            <th>${key}</th>
            <td>${memo}</td>
        </tr>
    `
    // $("#list").append(html)
    // })
    

    $("#clear").on("click",function(){
    localStorage.clear();
    $("#list").empty();
    });
    


const btn3 = document.getElementById('btn3');
const mask = document.getElementById('mask');
const modal = document.getElementById('modal');



$("#day1").on('click', function() {
  mask.classList.remove('hidden');
  modal.classList.remove('hidden');
  const value = localStorage.getItem('2022-11-01');
  const diaryItem  = `<P>${value}</P>`
  $("#diary").html(diaryItem);
});

$("#day2").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem('2022-11-02');
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day3").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-03");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day4").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-04");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day5").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-05");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day6").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-06");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day7").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-07");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day8").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-08");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day9").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-09");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day10").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-10");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });


  $("#day11").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-11");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day12").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-12");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day13").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-13");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day14").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-14");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day15").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-15");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day16").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-16");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day17").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-17");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day18").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-18");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day19").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-19");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day20").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-20");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day21").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-21");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day22").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-22");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day23").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-23");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day24").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-24");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day25").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-25");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day26").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-26");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day27").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-27");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day28").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-28");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day29").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-29");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day30").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-30");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });






$("#mask").on('click', function() {
  mask.classList.add('hidden');
  modal.classList.add('hidden');
});

    for (let i = 0; i < localStorage.length; i++) {
        const key2 = localStorage.key(i);
        const value2 = localStorage.getItem(key2);
        const html = `
    <tr>
        <th>${key2}</th>
        <td>${value2}</td>
    </tr>
`
    
        $("#list").append(html)
}



$(document).ready(function(){
$(day1).css("under_line")

});



const weeks = ['日', '月', '火', '水', '木', '金', '土']
const date = new Date()
let year = date.getFullYear()
let month = date.getMonth() + 1
const config = {
    show: 3,
}

function showCalendar(year, month) {
    for ( i = 0; i < config.show; i++) {
        const calendarHtml = createCalendar(year, month)
        const sec = document.createElement('section')
        sec.innerHTML = calendarHtml
        document.querySelector('#calendar').appendChild(sec)

        month++
        if (month > 12) {
            year++
            month = 1
        }
    }
}

function createCalendar(year, month) {
    const startDate = new Date(year, month - 1, 1) // 月の最初の日を取得
    const endDate = new Date(year, month,  0) // 月の最後の日を取得
    const endDayCount = endDate.getDate() // 月の末日
    const lastMonthEndDate = new Date(year, month - 1, 0) // 前月の最後の日の情報
    const lastMonthendDayCount = lastMonthEndDate.getDate() // 前月の末日
    const startDay = startDate.getDay() // 月の最初の日の曜日を取得
    let dayCount = 1 // 日にちのカウント
    let calendarHtml = '' // HTMLを組み立てる変数

    calendarHtml += '<h1>' + year  + '/' + month + '</h1>'
    calendarHtml += '<table>'

    // 曜日の行を作成
    for (let i = 0; i < weeks.length; i++) {
        calendarHtml += '<td>' + weeks[i] + '</td>'
    }

    for (let w = 0; w < 6; w++) {
        calendarHtml += '<tr>'

        for (let d = 0; d < 7; d++) {
            if (w == 0 && d < startDay) {
                // 1行目で1日の曜日の前
                let num = lastMonthendDayCount - startDay + d + 1
                calendarHtml += '<td class="is-disabled">' + num + '</td>'
            } else if (dayCount > endDayCount) {
                // 末尾の日数を超えた
                let num = dayCount - endDayCount
                calendarHtml += '<td class="is-disabled">' + num + '</td>'
                dayCount++
            } else {
                calendarHtml += '<td>' + dayCount + '</td>'
                dayCount++
            }
        }
        calendarHtml += '</tr>'
    }
    calendarHtml += '</table>'

    return calendarHtml
}

function moveCalendar(e) {
    document.querySelector('#calendar').innerHTML = ''

    if (e.target.id === 'prev') {
        month--

        if (month < 1) {
            year--
            month = 12
        }
    }

    if (e.target.id === 'next') {
        month++

        if (month > 12) {
            year++
            month = 1
        }
    }

    showCalendar(year, month)
}

document.querySelector('#prev').addEventListener('click', moveCalendar)
document.querySelector('#next').addEventListener('click', moveCalendar)

showCalendar(year, month)



