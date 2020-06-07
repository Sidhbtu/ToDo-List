
$(function(){

let ulTask=$('#ulTask')
let btnAdd=$('#btnAdd')
let btnReset=$('#btnReset')
let btnSort=$('#btnSort')
let btnCleanup=$('#btnCleanup')
let inpNewTask=$('#inpNewTask')


function addItem(){
let listItem = $('<li>',{
		'class':'list-group-item',
		text:inpNewTask.val()
	})
	ulTask.append(listItem)
	listItem.click(()=>{
		listItem.toggleClass('done')
	})
	inpNewTask.val('')
	toggleInputBtn()
}

function clearDone(){
$('#ulTask .done').remove()
toggleInputBtn()
}
function sortTask(){
	$('#ulTask .done').appendTo(ulTask)
	
}

function toggleInputBtn(){
	console.log(inpNewTask.val())
		btnReset.prop('disabled',inpNewTask.val()=='')
		btnAdd.prop('disabled',inpNewTask.val()=='')
		btnCleanup.prop('disabled',ulTask.children().length<1)
		btnSort.prop('disabled',ulTask.children().length<1)

}




inpNewTask.keypress((e)=>{
	if(e.which==13)addItem();
})

inpNewTask.on('input',toggleInputBtn)

btnSort.click(sortTask)
btnAdd.click(addItem)
btnCleanup.click(clearDone)

btnReset.click(()=>{
inpNewTask.val('')
toggleInputBtn()
})





});
