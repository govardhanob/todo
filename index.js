function todo(){
    var input=document.getElementById('input1')
    var items=document.getElementById('items')

    if (input.value.trim() !== ''){
        var notelist=document.createElement('li')
        notelist.className='list'


        var notetext=document.createElement('span')
        notetext.textContent=input.value
        var btn=document.createElement('button')
        btn.id='dbtn'
        btn.textContent='delete'

       btn.onclick=function(){
        items.removeChild(notelist)
       }
       notelist.appendChild(notetext)
       notelist.appendChild(btn)
       items.appendChild(notelist)
       input.value=''

    }
}