var dsnv = new DanhSachNhanVien();
// var validation = new Validation();

function getELE(id) {
    return document.getElementById(id);
}

function layThongTinNV() {
    var ma = getELE("tknv").value;
    var ten = getELE("name").value;
    var email = getELE("email").value;
    var matKhau = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCB = Number(getELE("luongCB").value);
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;
    
 
    // các bước kiểm tra dữ liệu
    // var isValid = true;
    // isValid &= validation.checkEmpty(ma,"Mã NV không được để trống", "spantknv") && validation.checkID(ma,"Mã NV không được trùng", "spantknv",dsnv.mangNV);
    // isValid &= validation.checkEmpty(ten,"Tên NV không được để trống", "spanTen") &&  validation.checkName(ten,"Tên NV phải là kiểu chữ", "spanTen");
    // isValid &= validation.checkEmpty(matKhau,"Mật khẩu không được để trống", "spanMatKhau") &&  validation.checkPass(matKhau,"Mật khẩu phải đúng định dạng", "spanMatKhau");
    // isValid = validation.checkEmpty(ngayLam,"Ngày làm không được để trống", "spanNgayLam");
    // isValid = validation.checkEmpty(luongCB,"Lương không được để trống","spanLuongCB");
    // isValid = validation.checkEmpty(gioLam,"Số giờ không được để trống","spanGioLam");
    
    // if(isValid) {
    
    // console.log(ma, ten, email, matKhau, ngayLam, luongCB, chucVu, gioLam);
    // console.table(ma, ten, email, matKhau, ngayLam, luongCB, chucVu, gioLam)
    var nv = new NhanVien(ma, ten, email, matKhau, ngayLam, luongCB, chucVu, gioLam);
    dsnv.themNV(nv);
    // console.log(dsnv.mangNV);
    hienThiTable(dsnv.mangNV);
    setLocalStorage(dsnv.mangNV);
   
}
// }


function setLocalStorage(mangNV) {
    localStorage.setItem("DSNV", JSON.stringify(mangNV));
}

function getLocalStorage() {
    if (localStorage.getItem("DSNV") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienThiTable(dsnv.mangNV);
    }
}
getLocalStorage();




function hienThiTable(mangNV) {
    var content = "";
    for (var i = 0; i < mangNV.length; i++) {
        var trNV = `<tr>
            <td>${mangNV[i].maNV}</td>
            <td>${mangNV[i].tenNV}</td>
            <td>${mangNV[i].email}</td>
            <td>${mangNV[i].ngayLam}</td>
            <td>${mangNV[i].chucVu}</td>
            <td>${mangNV[i].tongLuong}</td>
            <td>${mangNV[i].xepLoai}</td>
            <td>
            <button onclick="xoaNhanVien('${mangNV[i].maNV}')" class="btn btn-danger">Xóa</button>
            </td>
            
        </tr>`
        content += trNV;
    }
    // console.log(content);
    getELE("tableDanhSach").innerHTML = content;

}

function xoaNhanVien(ma) {
    dsnv.xoaNV(ma);
    setLocalStorage(dsnv.mangNV);
    hienThiTable(dsnv.mangNV);
}


// function xemChiTiet(ma) {
//     var nvTimDuoc = dsnv.layChiTiet(ma);
//     if (nvTimDuoc != undefined) {
//         //Tìm thấy được nv
//         getELE("tknv").disabled = true;
//         getELE("tknv").value = nvTimDuoc.maSV;
//         getELE("name").value = nvTimDuoc.tenSV;
//         getELE("email").value = nvTimDuoc.email;
//         getELE("password").value = nvTimDuoc.matKhau;
//         getELE("datepicker").value = nvTimDuoc.ngayLam;
//         getELE("luongCB").value = nvTimDuoc.luongCB;
//         getELE("chucvu").value = nvTimDuoc.chucVu;
//         getELE("gioLam").value = nvTimDuoc.gioLam;
//     } else {
//         console.log("Không tìm được nhân viên");
//     }
// }

function resetForm() {
    getELE("qlnv").reset();
}

function capNhatNV(){
    var ma = getELE("tknv").value;
    var ten = getELE("name").value;
    var email = getELE("email").value;
    var matKhau = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCB = Number(getELE("luongCB").value);
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;
    var nv = new NhanVien(ma, ten, email, matKhau, ngayLam, luongCB, chucVu, gioLam);
    dsnv.capNhatNV(nv);
    setLocalStorage(dsnv.mangNV);
    hienThiTable(dsnv.mangNV);
}


getELE("btnTimNV").onclick = function(){
   var tuKhoa =  getELE("searchName").value;
   var mangTK = dsnv.searchName(tuKhoa);
   hienThiTable(mangTK);
}

