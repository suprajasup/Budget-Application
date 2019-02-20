(function(){
	document.querySelector('#categoryInput').addEventListener('keydown',function(e){
		if (e.keyCode!=13){
			return;
		}
		e.preventDefault()

		var categoryName=this.value
		this.value=""
		addNewCategory(categoryName)
		updateCategoriesString()

	})

	function addNewCategory(name){
		document.querySelector('#categoriesContainer').insertAdjacentHTML('beforeend','')
			}
}
})()
