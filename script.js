// Mapping tat ca cac tag html can thiet cho bai nay -> bien thanh object trong js
var productTag = document.getElementById('product_id')
var ManufacturerTag = document.getElementById('Manufacturer_id')
var CategoryTag = document.getElementById('Category_id')
var PriceTag = document.getElementById('Price_id')
var QuanityTag = document.getElementById('Quanity_id')
var TotalPriceTag = document.getElementById('Total_price_id')
var resultTag = document.getElementById('result')
//mang quan lí danh sach san pham
var productList = [] 

//xu li khi nguoi dung chon manufacturer name -> do du lieu tuong ung vao category name
// dinh nghia dc cau truc du lieu cua bai nay
var dataList = [
    {
    	"Manufacturer" : "Apple",
    	"CategoryList" : ["A1", "A2", "A3"]
    }, {
    	"Manufacturer" : "SamSung",
    	"CategoryList" : ["S1", "S2", "S3"]
    }, {
    	"Manufacturer" : "LG",
    	"CategoryList" : ["LG1", "LG2", "LG3"]
    }, {
    	"Manufacturer" : "Google", 
    	"CategoryList" : ["GG1", "GG2", "GG3"]
    }
]
//Duyet qua cac mang dataList-> lay ra duoc tung manufacturer -> chen vao trong tag html co id: manufacturer_id

for(var item of dataList) {
	//gan doi tuong vao bien item 
	ManufacturerTag.innerHTML += `<option value="${item.Manufacturer}">${item.Manufacturer}</option>`
}
function changeManufacturer() {
	var m = ManufacturerTag.value
	console.log('Manufacturer: '+ m)
    var CategoryList = []
	for(var item of dataList) {
       if(item.Manufacturer == m) {
       	CategoryList = item.CategoryList
       	break
       }
	}
	//do du lieu vao categorylist
	CategoryTag.innerHTML ='<option value="">--Select--</option>'
	for(var v of CategoryList) {
			CategoryTag.innerHTML += `<option value="${v}">${v}</option>`

	}
}
function updateTotalPrice() {
	var p = PriceTag.value
	var q = QuanityTag.value
	TotalPriceTag.value = p * q
}
function saveData() {
	//lay du lieu nguoi dung da nhap vao
	 var product = {
	 	 "productName" : productTag.value,
	 	 "Manufacturer" : ManufacturerTag.value,
	 	 "Category" : CategoryTag.vale,
	 	 "price" : PriceTag.value,
	 	 "quanity" : QuanityTag.value,
	 	 "TotalPrice" : TotalPriceTag.value,
	 }
	 productList.push(product)
     showProduct()
	return false
}
function removeProduct() {
	var option = confirm('Are you sure to remove this product')
	if(!option) return
	productList.splice(index, 1)
    showProduct()
}

function selectProduct() {
	var p = productList[index]
	productTag.value = p.productName
    ManufacturerTag.value = p.Manufacturer
	CategoryTag.value = p.Category
	PriceTag.value = p.price
	QuanityTag.value = p.quanity
	TotalPriceTag.value = p.TotalPrice

}
function showProduct() {
	result.innerHTML = ''
	index = 0
	for(var product of productList) {
		           `<tr>
						<td>${index + 1}</td>
						<td>${product.productName}</td>
						<td>${product.Manufacturer}</td>
						<td>${product.Category}</td>
						<td>${product.price}</td>
						<td>${product.quanity}</td>
						<td><button class="btn-warning" onclick="selectProduct(${index})">Edit</button></td>
						<td><button class="btn-danger" onclick="removeProduct(${index}">Remove</button></td>

					</tr>`
					index++
	}
}