export function kiemTraRong (idErr,value) {
    if (value.length == 0) {
        document.getElementById(idErr).innerText = `Không được để trống`
        document.getElementById(idErr).style.display = `block`
        return false
    } else {
        document.getElementById(idErr).innerText = ``
        return true
    }
}

export function kiemTraGia (idErr,value) {
    if(value <= 0) {
        document.getElementById(idErr).innerText = `Vui lòng nhập giá`
        document.getElementById(idErr).style.display = `block`
        return false
    } else {
        document.getElementById(idErr).innerText = ``
        return true
    }
}

export function kiemTraKLoai (idErr,value) {
    if(value == `Chọn loại`) {
        document.getElementById(idErr).innerText = `Vui lòng chọn`
        document.getElementById(idErr).style.display = `block`
        return false
    } else {
        document.getElementById(idErr).innerText = ``
        return true
    }
}

export function kiemTraKhuyenMai (idErr,value) {
    if(value == "0") {
        document.getElementById(idErr).innerText = `Vui lòng chọn`
        document.getElementById(idErr).style.display = `block`
        return false
    } else {
        document.getElementById(idErr).innerText = ``
        return true
    }
}

export function kiemTraTinhTrang (idErr,value) {
    if(value == `Chọn tình trạng`) {
        document.getElementById(idErr).innerText = `Vui lòng chọn`
        document.getElementById(idErr).style.display = `block`
        return false
    } else {
        document.getElementById(idErr).innerText = ``
        return true
    }
}

export let valid = (data) => {
    let valid = 
    kiemTraRong("invalidID",data.id) &
    kiemTraRong("invalidTen",data.tenMon) &
    kiemTraGia("invalidGia",data.gia) &
    kiemTraKLoai("invalidLoai",data.loai) &
    kiemTraKhuyenMai("invalidKM",data.khuyenMai) &
    kiemTraTinhTrang("invalidTT",data.tinhTrang)
    return valid
}