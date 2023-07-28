export class Person {
    constructor(hoTen, diaChi, ma, email, loai) {
        this.hoTen = hoTen;
        this.diaChi = diaChi;
        this.ma = ma;
        this.email = email;
        this.loai = loai;
    }
}

// Các lớp kế thừa từ lớp Person
export class Student extends Person {
    constructor(hoTen, diaChi, ma, email, toan, ly, hoa, loai) {
        super(hoTen, diaChi, ma, email, loai);
        this.toan = toan;
        this.ly = ly;
        this.hoa = hoa;
        this.tb = this.tinhDiemTrungBinh();
    }

    tinhDiemTrungBinh() {
        return (Number(this.toan) + Number(this.ly) + Number(this.hoa)) / 3;
    }
}

export class Employee extends Person {
    constructor(hoTen, diaChi, ma, email, soNgayLamViec, luongTheoNgay, loai) {
        super(hoTen, diaChi, ma, email, loai);
        this.soNgayLamViec = soNgayLamViec;
        this.luongTheoNgay = luongTheoNgay;
        this.tongLuong = this.tinhLuong();
    }

    tinhLuong() {
        return this.soNgayLamViec * this.luongTheoNgay;
    }
}

export class Customer extends Person {
    constructor(
        hoTen,
        diaChi,
        ma,
        email,
        tenCongTy,
        triGiaHoaDon,
        danhGia,
        loai
    ) {
        super(hoTen, diaChi, ma, email, loai);
        this.tenCongTy = tenCongTy;
        this.triGiaHoaDon = triGiaHoaDon;
        this.danhGia = danhGia;
    }
}

// Lớp ListPerson để quản lý các đối tượng
export class ListPerson {
    constructor() {
        const storedList = localStorage.getItem("listPersons");
        this.persons = storedList ? JSON.parse(storedList) : [];
    }

    luuLocalStorage() {
        localStorage.setItem("listPersons", JSON.stringify(this.persons));
    }

    themPerson(person) {
        this.persons.push(person);
        this.luuLocalStorage();
    }

    xoaPerson(ma) {
        this.persons = this.persons.filter((person) => person.ma != ma);
        this.luuLocalStorage();
    }

    capNhatPerson(person) {
        const index = this.persons.findIndex((p) => {
            return p.ma == person.ma;
        });
        console.log(index);
        if (index !== -1) {
            this.persons[index] = person;
            this.luuLocalStorage();
        }
    }

    sapXepTheoTen() {
        return this.persons.sort((a, b) => a.hoTen.localeCompare(b.hoTen));
        // this.luuLocalStorage();
    }

    locTheoLoaiNguoiDung(loai) {
        return this.persons.filter((person) => {
            return person.loai === loai;
        });
    }
}
