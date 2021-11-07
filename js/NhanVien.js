function NhanVien(ma,ten,email,pass,date,salary,pos,time){
    this.maNV = ma;
    this.tenNV = ten;
    this.email = email;
    this.matKhau = pass;
    this.ngayLam = date;
    this.luongCB = salary;
    this.chucVu = pos;
    this.gioLam = time;
    this.tongLuong = tinhLuong(this.luongCB);
    this.xepLoai = xepLoai(this.gioLam);

    
}

// phương thức tính lương theo chức vụ, giờ
function tinhLuong(luongCB){
    var tongLuong = "";
    var chucVu = getELE("chucvu").value;
    if(chucVu == "Nhân viên"){
        tongLuong = luongCB;
    }else if(chucVu == "Trưởng phòng"){
        tongLuong = Number(luongCB) *2;
    }else{
         tongLuong = Number(luongCB) * 3;
    } return tongLuong;
}

function xepLoai(gioLam){
    if(Number(gioLam) >= 192){
        return "Xuất sắc";
    }else if(Number(gioLam) >= 176 && Number(gioLam) < 192){
        return "Giỏi";
    }else if(Number(gioLam) >= 160 && Number(gioLam) < 176){
        return "Khá";
    }else if(Number(gioLam) > 80 && Number(gioLam) < 160){
        return "Trung bình";
    }else{
        console.log("Số giờ làm không hợp lệ");
    }
};
