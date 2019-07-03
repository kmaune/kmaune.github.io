var lnStickyNavigation;

$(document).ready(function()
{	

	applyNavigation(); 
	applyResize();

});


function applyNavigation()
{
	applyStickyNavigation();
}


function applyStickyNavigation()
{
	lnStickyNavigation = $('.scroll-down').offset().top + 20;
	
	$(window).on('scroll', function() 
	{  
		stickyNavigation();  
	});  
	
	stickyNavigation();
}

function stickyNavigation()
{       

	if($(window).scrollTop() > lnStickyNavigation) 
	{   
		$('body').addClass('fixed');  
	} 
	else 
	{  
		$('body').removeClass('fixed');   
	}  
}

function applyResize()
{
	$(window).on('resize', function() 
	{  
		lnStickyNavigation = $('.scroll-down').offset().top + 20;
	
		$('#topContainer').css({ height: ($(window).height()) +'px' });
	}); 
}


