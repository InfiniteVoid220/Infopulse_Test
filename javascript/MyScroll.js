var myScroll;

function loaded () 
	{
	    myScroll = new IScroll('#wrapper_for_scroll', { mouseWheel: true });
	}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
    capture: false,
    passive: false
} : false);

