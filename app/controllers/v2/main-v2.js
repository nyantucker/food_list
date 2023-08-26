import { valid } from "../v1/validate.js";
import { BASE_URL, clearForm, fetchFoodList, message, showDataForm, getDataForm, renderFoodList } from "./controller-v2.js";

fetchFoodList()


window.deleteFood = (id) => {
    console.log(id);
    axios.delete(`${BASE_URL}/${id}`)
    .then((res) => {
            console.log(res);
            fetchFoodList()
            message("Xóa thành công")
          })
          .catch((err) => {
           console.log(err);
           message("Đã có lỗi xảy ra",false)
          });
}

window.addFood = () => {
    let data = getDataForm()
    let isValid = valid(data)
    if (!isValid) return message("Vui lòng điền thông tin",false);
    axios.post(BASE_URL,data)
    .then((res) => {
            console.log(res);
            fetchFoodList()
            $("#exampleModal").modal("hide")
            message("Đã thêm món")
          })
          .catch((err) => {
           console.log(err);
           message("Đã có lỗi xảy ra",false)
          });
}

window.editFood = (id) => {
    $("#exampleModal").modal("show")
    document.getElementById("foodID").readOnly = true
    document.getElementById("btnThemMon").disabled  = true
    axios.get(`${BASE_URL}/${id}`)
    .then((res) => {
            console.log(res);
            showDataForm(res.data)
          })
          .catch((err) => {
           console.log(err);
           message("Đã có lỗi xảy ra",false)
          });
}

window.updateFood = () => {
    let data = getDataForm()
    axios.put(`${BASE_URL}/${data.id}`,data)
    .then((res) => {
            console.log(res);
            document.getElementById("foodID").readOnly = false
            document.getElementById("btnThemMon").disabled  = false
            $("#exampleModal").modal("hide")
            message("Cập nhật thành công")
            clearForm()
            fetchFoodList()
          })
          .catch((err) => {
           console.log(err);
           message("Đã có lỗi xảy ra",false)
          });
}

window.search = () => {
  let loai = document.getElementById("selLoai").value;
  if (loai == "all" || loai == "Chọn loại") {fetchFoodList(); return} 
    else if (loai == "loai1") {loai = true} 
    else if (loai == "loai2") {loai = false}
  let searchArray = []
  axios.get(BASE_URL)
  .then((res) => {
          console.log(res);
          let food = res.data
          food.forEach((item)=>{            
            if (item.loai == loai) {  
              searchArray.push(item)
            }})
          renderFoodList(searchArray)
        })
        .catch((err) => {
         console.log(err);
        });
}