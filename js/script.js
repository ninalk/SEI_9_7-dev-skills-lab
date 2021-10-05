const input = () => {
    const $skill = $('#skill-input').val()
    const $newSkill = $(`<li><p class="delete">X</p><p class="skill"> ${$skill}</p></li>`)
    $('ul').append($newSkill)
    $('#skill-input').val('')
}

$( 'button' ).click(() => {
    input()
})

$('input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    keycode == '13' && input()
});

$( 'ul' ).on('click', '.delete', function(){
    $(this).parent().fadeOut(500, function(){
        $(this).remove()
    })
})


// Bonus using localStorage
const myStorage = window.localStorage;
if(!localStorage.getItem('li')) {
    populateStorage();
} else {
    setSkills();
}

function populateStorage() {
    localStorage.setItem('skill', document.getElementById)

}