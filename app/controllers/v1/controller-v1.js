export let getDataForm = () => {
    let id = document.getElementById("foodID").value;
    let tenMon = document.getElementById("tenMon").value;
    let loai = document.getElementById("loai").value;
    let gia = document.getElementById("giaMon").value*1;
    let khuyenMai = document.getElementById("khuyenMai").value*1;
    let tinhTrang = document.getElementById("tinhTrang").value;
    let hinhMon = document.getElementById("hinhMon").value;
    let moTa = document.getElementById("moTa").value;
    return {
        id,tenMon,loai,gia,khuyenMai,tinhTrang,hinhMon,moTa,tinhGiaKm: function() {
            return this.gia*(1-this.khuyenMai/100)
        }} 
}
export let showDataForm = (data) => {
    let {id,tenMon,loai,gia,khuyenMai,tinhTrang,hinhMon,moTa} = data
    document.getElementById("imgMonAn").src = hinhMon
    document.getElementById("spMa").innerText=id
    document.getElementById("spTenMon").innerText=tenMon
    document.getElementById("spLoaiMon").innerText=loai
    document.getElementById("spGia").innerText= gia
    document.getElementById("spKM").innerText=khuyenMai
    document.getElementById("spGiaKM").innerText=data.tinhGiaKm()
    document.getElementById("spTT").innerText=tinhTrang
    document.getElementById("pMoTa").innerText=moTa
}

