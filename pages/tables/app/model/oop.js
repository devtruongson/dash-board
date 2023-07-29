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
    if (index !== -1) {
      this.persons[index] = person;
      this.luuLocalStorage();
    }
  }

  sapXepTheoTen() {
    this.persons.sort((a, b) => {
      const tenA = a.hoTen.trim();
      const tenB = b.hoTen.trim();

      const wordsA = tenA.split(" ").filter((word) => word !== "");
      const wordsB = tenB.split(" ").filter((word) => word !== "");

      const lastWordA = wordsA[wordsA.length - 1];
      const lastWordB = wordsB[wordsB.length - 1];

      const firstCharA = lastWordA.charAt(0).toLowerCase();
      const firstCharB = lastWordB.charAt(0).toLowerCase();

      return firstCharA.localeCompare(firstCharB);
    });
  }

  locTheoLoaiNguoiDung(loai) {
    return this.persons.filter((person) => {
      return person.loai === loai;
    });
  }
}
