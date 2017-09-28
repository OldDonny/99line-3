

var friends=['jake','troup','john','dan','bill'];
var plural=('line')


var text=document.createTextNode('sing');
var text1=document.createTextNode('sing');
var text2=document.createTextNode('sing');
var text3=document.createTextNode('sing');
var text4=document.createTextNode('sing');
   


document.addEventListener('DOMContentLoaded',function(){
    var button=document.createElement('button');
    var button1=document.createElement('button');
    var button2=document.createElement('button');
    var button3=document.createElement('button');
    var button4=document.createElement('button');
    
    var container=document.createElement('div');
    var container1=document.createElement('div');
    var container2=document.createElement('div');
    var container3=document.createElement('div');
    var container4=document.createElement('div');
    button.appendChild(text);
    document.body.appendChild(container);
    container.appendChild(button);
    button1.appendChild(text1);
    document.body.appendChild(container1);
    container1.appendChild(button1);
    button2.appendChild(text2);
    document.body.appendChild(container2);
    container2.appendChild(button2);
    button3.appendChild(text3);
    document.body.appendChild(container3);
    container3.appendChild(button3);
    button4.appendChild(text4);
    document.body.appendChild(container4);
    container4.appendChild(button4);
    
});




addEventListener('click',function(){
   
  
    for (var f= 0; f <= 0 ; f++){
       
        var friend=document.createElement('div');
        var header=document.createElement('h3');
        header.style.textTransform="uppercase";
        document.body.appendChild(friend);
        friend.appendChild(header);
        fname=document.createTextNode(friends[0]);
        header.appendChild(fname);
        
        
      
    
        for (var i= 99; i >= 3; i--){
           var song=document.createElement('p');
           friend.appendChild(song);
           fsong=document.createTextNode(i+' lines of code in the file, ' + i + ' lines of code; ' + friends[0] + ' strikes one out, clears it all out, '+ (i-1) + ' lines of code in the file');
           song.appendChild(fsong);
        }
        if(i==2){
           var song=document.createElement('p');
           friend.appendChild(song);
           dname=document.createTextNode(i+' lines of code in the file, ' + i + ' lines of code; ' + friends[0] + ' strikes one out, clears it all out, '+ (i-1) + ' line of code in the file');
            song.appendChild(dname);
        }
           var song=document.createElement('p');
           friend.appendChild(song);
           sname=document.createTextNode((i-1) +' line of code in the file '+ (i-1) +' line of code ' + friends[0] + ' strikes out, clears it all out, no more lines of code in the file')
            song.appendChild(sname);
      
    }
    
})

addEventListener('click',function(){
    
   
     for (var f= 1; f = 1 ; f++){
        
         var friend=document.createElement('div');
         var header=document.createElement('h3');
         header.style.textTransform="uppercase";
         document.body.appendChild(friend);
         friend.appendChild(header);
         fname=document.createTextNode(friends[1]);
         header.appendChild(fname);
         
         
       
     
         for (var i= 99; i >= 3; i--){
            var song=document.createElement('p');
            friend.appendChild(song);
            fsong=document.createTextNode(i+' lines of code in the file, ' + i + ' lines of code; ' + friends[1] + ' strikes one out, clears it all out, '+ (i-1) + ' lines of code in the file');
            song.appendChild(fsong);
         }
         if(i==2){
            var song=document.createElement('p');
            friend.appendChild(song);
            dname=document.createTextNode(i+' lines of code in the file, ' + i + ' lines of code; ' + friends[1] + ' strikes one out, clears it all out, '+ (i-1) + ' line of code in the file');
             song.appendChild(dname);
         }
            var song=document.createElement('p');
            friend.appendChild(song);
            sname=document.createTextNode((i-1) +' line of code in the file '+ (i-1) +' line of code ' + friends[1] + ' strikes out, clears it all out, no more lines of code in the file')
             song.appendChild(sname);
       
     }
     
 })

 button2.addEventListener('click',function(){
    
   
     for (var f= 2; f <= 2 ; f++){
        
         var friend=document.createElement('div');
         var header=document.createElement('h3');
         header.style.textTransform="uppercase";
         document.body.appendChild(friend);
         friend.appendChild(header);
         fname=document.createTextNode(friends[2]);
         header.appendChild(fname);
         
         
       
     
         for (var i= 99; i >= 3; i--){
            var song=document.createElement('p');
            friend.appendChild(song);
            fsong=document.createTextNode(i+' lines of code in the file, ' + i + ' lines of code; ' + friends[2] + ' strikes one out, clears it all out, '+ (i-1) + ' lines of code in the file');
            song.appendChild(fsong);
         }
         if(i==2){
            var song=document.createElement('p');
            friend.appendChild(song);
            dname=document.createTextNode(i+' lines of code in the file, ' + i + ' lines of code; ' + friends[2] + ' strikes one out, clears it all out, '+ (i-1) + ' line of code in the file');
             song.appendChild(dname);
         }
            var song=document.createElement('p');
            friend.appendChild(song);
            sname=document.createTextNode((i-1) +' line of code in the file '+ (i-1) +' line of code ' + friends[2] + ' strikes out, clears it all out, no more lines of code in the file')
             song.appendChild(sname);
       
     }
     
 })

 button3.addEventListener('click',function(){
    
   
     for (var f= 3; f <= 3 ; f++){
        
         var friend=document.createElement('div');
         var header=document.createElement('h3');
         header.style.textTransform="uppercase";
         document.body.appendChild(friend);
         friend.appendChild(header);
         fname=document.createTextNode(friends[3]);
         header.appendChild(fname);
         
         
       
     
         for (var i= 99; i >= 3; i--){
            var song=document.createElement('p');
            friend.appendChild(song);
            fsong=document.createTextNode(i+' lines of code in the file, ' + i + ' lines of code; ' + friends[3] + ' strikes one out, clears it all out, '+ (i-1) + ' lines of code in the file');
            song.appendChild(fsong);
         }
         if(i==2){
            var song=document.createElement('p');
            friend.appendChild(song);
            dname=document.createTextNode(i+' lines of code in the file, ' + i + ' lines of code; ' + friends[3] + ' strikes one out, clears it all out, '+ (i-1) + ' line of code in the file');
             song.appendChild(dname);
         }
            var song=document.createElement('p');
            friend.appendChild(song);
            sname=document.createTextNode((i-1) +' line of code in the file '+ (i-1) +' line of code ' + friends[3] + ' strikes out, clears it all out, no more lines of code in the file')
             song.appendChild(sname);
       
     }
     
 })

 button4.addEventListener('click',function(){
    
   
     for (var f= 4; f <= 4 ; f++){
        
         var friend=document.createElement('div');
         var header=document.createElement('h3');
         header.style.textTransform="uppercase";
         document.body.appendChild(friend);
         friend.appendChild(header);
         fname=document.createTextNode(friends[4]);
         header.appendChild(fname);
         
         
       
     
         for (var i= 99; i >= 3; i--){
            var song=document.createElement('p');
            friend.appendChild(song);
            fsong=document.createTextNode(i+' lines of code in the file, ' + i + ' lines of code; ' + friends[4] + ' strikes one out, clears it all out, '+ (i-1) + ' lines of code in the file');
            song.appendChild(fsong);
         }
         if(i==2){
            var song=document.createElement('p');
            friend.appendChild(song);
            dname=document.createTextNode(i+' lines of code in the file, ' + i + ' lines of code; ' + friends[4] + ' strikes one out, clears it all out, '+ (i-1) + ' line of code in the file');
             song.appendChild(dname);
         }
            var song=document.createElement('p');
            friend.appendChild(song);
            sname=document.createTextNode((i-1) +' line of code in the file '+ (i-1) +' line of code ' + friends[4] + ' strikes out, clears it all out, no more lines of code in the file')
             song.appendChild(sname);
       
     }
     
 })