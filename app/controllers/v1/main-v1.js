import { getDataForm, showDataForm } from "./controller-v1.js";
import { kiemTraGia, kiemTraKLoai, kiemTraKhuyenMai, kiemTraRong, kiemTraTinhTrang, valid } from "./validate.js";


// Thêm món
function addFood() {
    // Lấy thông tin từ form
    let data = getDataForm()

    let isValid = valid(data)
    if (!isValid) return

    data = getDataForm()
    showDataForm(data)
}
window.addFood = addFood
