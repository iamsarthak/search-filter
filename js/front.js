function doit(){
$('.filter_year').click(function(){
           var j;
           for(j=1;j<6;j++)
               {
                                      document.getElementById('adBox'+j ).style.display="block";

               }
           var year_clicked=$(this).text();
           if(year_clicked=='ALL')
               {
                   
               }
           else{
               $('#yearfilterdd').val(year_clicked);
               document.getElementById("yearfilterdd").innerHTML=year_clicked;
               var i;
               for (i=1;i<6;i++)
                   {
                    var focus_year=$('#year'+i).text();
                    console.log(focus_year)   
                    //if(focus_year.localeCompare(year_clicked)===-1)
                   if(focus_year==year_clicked)
                    {}   
                    else{
                            document.getElementById('adBox'+i).style.display="none";
                            console.log('adBox'+i +'deleted');
                        }   
                   }
                }
       });
        
        
        //for filtering the make 
          $('.filter_make').click(function(){
           var j;
           for(j=1;j<6;j++)
               {
                                      document.getElementById('adBox'+j ).style.display="block";

               }
           var make_clicked=$(this).text();
           if(make_clicked=='ALL')
               {
                   
               }
           else{
               $('#makefilterdd').val(make_clicked);
               document.getElementById("makefilterdd").innerHTML=make_clicked;
               var i;
               for (i=1;i<6;i++)
                   {
                    var focus_make=$('#make'+i).text();
                    console.log(focus_make)   
                    //if(focus_year.localeCompare(year_clicked)===-1)
                   if(focus_make==make_clicked)
                    {}   
                    else{
                            document.getElementById('adBox'+i).style.display="none";
                            console.log('adBox'+i +'deleted');
                        }   
                   }
                }
       });
        
        
        
}