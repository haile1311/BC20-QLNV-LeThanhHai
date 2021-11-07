function DanhSachNhanVien() {
    // Prop
    this.mangNV = [];
    // Method
    this.themNV = function (nv) {
        this.mangNV.push(nv);
    }

    this.timViTri = function (ma) {
        var viTri = -1;
        this.mangNV.map(function (nv, index) {
            if (nv.maNV == ma) {
                viTri = index;
            }
        });
        return viTri;
    }

    this.xoaNV = function (ma) {
        var viTri = this.timViTri(ma);
        if (viTri > -1) {
            this.mangNV.splice(viTri, 1);
        }
    }
    // this.layChiTiet = function (ma) {
    //     var viTri = this.timViTri(ma);
    //     if (viTri > -1) {
    //         //tìm thấy
    //         //return đối tượng nv tìm được
    //         return this.mangNV[viTri];
    //     } else {
    //         console.log("Không tìm thấy");
    //     }
    // }
    this.capNhatNV = function (nv) {
        //Tìm vị trí(index) nv cần cập nhật
        var viTri = this.timViTri(nv.maNV);
        if (viTri > -1) {
            //tìm thấy
            // Gán giá trị mới vào vị trí tìm được
            this.mangNV[viTri] = nv;
        } else {
            console.log("Không tìm thấy");
        }
    }
}

DanhSachNhanVien.prototype.searchName = function (tuKhoa) {
    var mangTK = [];
    var tuTK = tuKhoa.trim().toLowerCase();
    this.mangNV.map(function (nv) {
        var xepLoai = nv.xepLoai.toLowerCase();
        if (xepLoai.indexOf(tuTK) > -1) {
            console.log("Tìm thấy nhân viên");
            mangTK.push(nv);
        }
    });
    return this.mangNV;
}
