export const BASE_URL = "https://64d6fafd2a017531bc12e75a.mockapi.io/food"

const MON_CHAY = true
const CON_MON = true

export let renderFoodList = (list) => {
    let contentHTML =``;
    list.forEach((food)=>{
        let {id,tenMon,loai,gia,khuyenMai,tinhTrang,hinhMon,moTa} = food
        let trString = `<tr>
                <td>${id}</td>
                <td>${tenMon}</td>
                <td>${loai==MON_CHAY?"Chay":"Mặn"}</td>
                <td>${gia}</td>
                <td>${khuyenMai}</td>
                <td>${(gia*(1-khuyenMai/100)).toFixed(2)}</td>
                <td>${tinhTrang==CON_MON?"Còn":"Hết"}</td>
                <td>
                <button class="btn-info" onclick="editFood(${id})">Sửa</button>
                <button class="btn-danger" onclick="deleteFood(${id})">Xóa</button>
                </td>                      
                     </tr>`;
    contentHTML +=trString;
    })
    document.getElementById("tbodyFood").innerHTML = contentHTML
}

export let fetchFoodList = () => {
    axios.get(BASE_URL)
    .then((res) => {
            console.log(res);
            renderFoodList(res.data)
          })
          .catch((err) => {
           console.log(err);
          });
} 

export let showDataForm = (data) => {
    let {id,tenMon,loai,gia,khuyenMai,tinhTrang,hinhMon,moTa} = data
    document.getElementById("hinhMon").value = hinhMon
    document.getElementById("foodID").value=id
    document.getElementById("tenMon").value=tenMon
    document.getElementById("loai").value=loai?"loai1":"loai2"
    document.getElementById("giaMon").value=gia
    document.getElementById("khuyenMai").value=khuyenMai 
    document.getElementById("tinhTrang").value=tinhTrang?"1":"0"
    document.getElementById("moTa").value=moTa
}

export let message = (message,isSuccess = true) => {
    Toastify({
        text: message,
        style: {
          background: isSuccess?"green":"red",
        }
        }).showToast();
}

export let clearForm = () => {
    document.getElementById("hinhMon").value = ``
    document.getElementById("foodID").value= ``
    document.getElementById("tenMon").value= ``
    document.getElementById("loai").value= ``
    document.getElementById("giaMon").value= ``
    document.getElementById("khuyenMai").value= ``
    document.getElementById("tinhTrang").value= ``
    document.getElementById("moTa").value= ``
}

export let getDataForm = () => {
    let id = document.getElementById("foodID").value;
    let tenMon = document.getElementById("tenMon").value;
    let loai = document.getElementById("loai").value == "loai1"?true:false;
    let gia = document.getElementById("giaMon").value*1;
    let khuyenMai = document.getElementById("khuyenMai").value*1;
    let tinhTrang = document.getElementById("tinhTrang").value;
    let hinhMon = document.getElementById("hinhMon").value;
    let moTa = document.getElementById("moTa").value;
    return {
        id,tenMon,loai,gia,khuyenMai,tinhTrang,hinhMon,moTa,tinhGiaKm: function() {
            return this.gia*(1-this.khuyenMai)
        }} 
}