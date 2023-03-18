// $(document).ready(function(){

// $('h1').css('color','red')

// })
$(document).ready(function(){
    $('h1').addClass('big-title margin-50');  
})

$('a').attr('href','https://www.yahoo.com')


$('h1').click(function(){
    $('h1').css('color','blue')
})

$('button').click(function(){
    $('h1').css('color','purple')
})

$('input').keypress(function(event){
    console.log(event.key)
})

$(document).keypress(function(event){
    $('h1').text(event.key)
    console.log(event.key)
})

$('h1').on('mouseover',function(){
    $('h1').css('color','red')
})