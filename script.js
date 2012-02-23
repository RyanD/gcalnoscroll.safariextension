document.getElementById('mainbody').addEventListener('mousewheel',doSomething2,true)
document.getElementById('gridcontainer').addEventListener('mousewheel',doSomething2,true)
function doSomething2(e){
	e.stopPropagation();
	return false;
}