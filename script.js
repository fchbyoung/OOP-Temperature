function Temperature(temp) {

    this.setTemp = () =>{
        this.temp = temp;
        while(temp < -273){
            temp = parseFloat(prompt("Độ c bạn phải nhập lớn hơn -273 độ"))
        }
    }

    this.getTemp = () =>{
        this.setTemp();
        return this.temp;
    }

    this.convertCToF = () =>{
        const c = this.getTemp();
        return ((c * 9) / 5 + 32).toFixed(2);// Hàm toFixed : đổi số thành 1 chuỗi , chỉ giữ 2 số thập phân
    }

    this.convertCToK = () => {
        const c = this.getTemp();
        return (c + 273.15).toFixed(2);
    }
}

let myRoomTemperature = new Temperature(25);
document.write("25 độ C = " + myRoomTemperature.convertCToF() + " (F)");
document.write( "<br/> 25 độ C = " + myRoomTemperature.convertCToK() + " (K)");