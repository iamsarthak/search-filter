var year_clicked;
var make_clicked;
var cost_upper_value;
var cost_lower_value;
function doit(){
   
    $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
   
    $('.filter_year').click(function(){
        year_clicked=$(this).text();
         document.getElementById("yearfilterdd").innerHTML=year_clicked;
    });
    
    $('.filter_make').click(function(){
        make_clicked=$(this).text();
        document.getElementById("makefilterdd").innerHTML=make_clicked;
    });
    
    $('.filter_cost_lower_value').click(function(){
       cost_lower_value=$(this).text();
        document.getElementById("lowercostfilter").innerHTML=cost_lower_value;
        
    });
    
    $('.filter_cost_upper_value').click(function(){
       cost_upper_value=$(this).text();
        document.getElementById("uppercostfilter").innerHTML=cost_upper_value;
    });
    
    $('#gofilter').click(function(){
        alert("FILTER IS CLICKED");
        var j;
           for(j=1;j<11;j++)
               {
                                      document.getElementById('adBox'+j ).style.display="block";

               }
        
        /*if(year_clicked===0 && make_clicked===0 && cost_lower_value===0 && cost_upper_value===0)
            {
                alert("please fill in ")
            }*/
      /*  if(cost_lower_value<cost_upper_value)
            {
                alert("lower cost is greater than higher cost")
            }*/
        if(year_clicked===undefined && make_clicked===undefined && cost_lower_value===undefined && cost_upper_value===undefined)
            {
                alert("PLEASE SET THE FILTERS")
            }
        else{
        var i;
               for (i=1;i<11;i++)
                   {
                       var focus_year=$('#year'+i).text();
                       var focus_make=$('#make'+i).text();
                       var focus_cost=$('#cost'+i).text();
                       console.log("the focus cost is "+focus_cost);
                       console.log("the lower limit is " + cost_lower_value);
                       console.log("the upper limit is "+cost_upper_value);
                       
                        if(year_clicked=="ALL"||year_clicked===undefined||year_clicked==="Year")
                            {
                                
                                focus_year="ALL";
                            }
                        if(make_clicked=="ALL"||make_clicked===undefined||make_clicked==="Make")
                            {
                                focus_make="ALL";
                            }
                        if(cost_lower_value==="NONE"||cost_lower_value===undefined)
                            {
                                cost_lower_value=0;
                                
                            }
                       if(cost_upper_value==="NONE"||cost_upper_value===undefined)
                           {
                               cost_upper_value=Number.POSITIVE_INFINITY;
                           }
                        if(focus_year==year_clicked && focus_make==make_clicked && focus_cost>=cost_lower_value && focus_cost<=cost_upper_value)
                    {}   
                    else{
                            document.getElementById('adBox'+i).style.display="none";
                            console.log('adBox'+i +'deleted');
                   }
                         }
        
        
        
        
                var flag=0;
                for(i=1;i<11;i++)
                    {
                        if(document.getElementById('adBox'+i).style.display=="block")
                        {
                            flag=1;
                        }
                    }
               if(flag===0)
                   {
                       alert("SORRY NO RESULTS FOUND")
                   }
                else{
                    
                }}
    });
    
/*    
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
                    f(focus_year.localeCompare(year_clicked)===-1)
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
       });*/
        
        
        
}




