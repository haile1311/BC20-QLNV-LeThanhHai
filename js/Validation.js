function Validation() {
    // method
    //Kiểm tra rỗng
    this.checkEmpty = function (value, message, spanID) {
        // "  text  " => trim() => "text"
        // "    " => trim() => ""
        if (value.trim() != "") {
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        //Không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    //Kiểm tra mã trùng
    this.checkID = function (value, message, spanID, mangNV) {
        //Giả sử mã chưa tồn tại trong mảng
        var isExist = false;
        // some(): hàm giúp duyệt mảng và đồng thời kiểm tra theo điều kiện. Nếu tìm thấy phần tử thỏa đk thì return về true, ngược lại là false
        isExist = mangNV.some(function (nv) {
            return value == nv.maNV;
        });
        //có tồn tại mã trùng
        if(isExist) {
            //không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }else{
            //hợp lệ 
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
    }
    //kiểm tra tên nv
    this.checkName = function(value, message, spanID){
        //Kiểu string
        var pattern = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$";
        //Chuyển kiểu từ string sang RegExp
        var reg = new RegExp(pattern);
        if(reg.test(value)){           
             //hợp lệ 
             document.getElementById(spanID).innerHTML = "";
             document.getElementById(spanID).style.display = "none";
             return true;
        }
         //không hợp lệ
         document.getElementById(spanID).innerHTML = message;
         document.getElementById(spanID).style.display = "block";
         return false;
    }
    //Kiểm tra định dạng email
    this.checkEmail = function(value, message, spanID){
        //chuỗi regexp
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(value.match(pattern)){
             //hợp lệ 
             document.getElementById(spanID).innerHTML = "";
             document.getElementById(spanID).style.display = "none";
             return true;
        }
        //không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    //Kiểm tra định dạng pass
    this.checkPass = function(value, message, spanID){
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        if(value.match(pattern)){
            //hợp lệ 
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
         //không hợp lệ
         document.getElementById(spanID).innerHTML = message;
         document.getElementById(spanID).style.display = "block";
         return false;
    }

    //Kiểm tra select
    this.checkSelect = function(selectID, message, spanID){
        if(document.getElementById(selectID).selectedIndex != 0 ){
            //hợp lệ 
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;

        }
         //không hợp lệ
         document.getElementById(spanID).innerHTML = message;
         document.getElementById(spanID).style.display = "block";
         return false;
    }

    //Kiểm tra điểm
    this.checkScore = function(value, message, spanID){
        var pattern = /^(\d{1,2}(\.\d{1,2})?)$/;
        if(value.match(pattern) && value <=10){
              //hợp lệ 
              document.getElementById(spanID).innerHTML = "";
              document.getElementById(spanID).style.display = "none";
              return true;
        }
         //không hợp lệ
         document.getElementById(spanID).innerHTML = message;
         document.getElementById(spanID).style.display = "block";
         return false;
    }
}