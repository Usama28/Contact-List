
var search=document.getElementById('bar')

search.addEventListener('keyup',contacts)

function contacts()
{
    var value=search.value.toUpperCase()
    var ul=document.querySelector('.name')
    var li=ul.querySelectorAll('#nameList')
    
    for(var i=0;i<li.length;i++)
    {
        var a= li[i].getElementsByTagName('a')[0]   //[0] is writen to get the current link (current a tag)
        if(a.innerHTML.toUpperCase().indexOf(value)>-1) //>-1 or !=-1 to match values
        {
            li[i].style.display='block'
        }
        else
        {
            li[i].style.display='none'
        }
    }
    // if(value)
}