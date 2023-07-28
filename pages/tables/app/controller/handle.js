import {
  Customer,
  Employee,
  ListPerson,
  Person,
  Student,
} from "../model/oop.js";

import { validateForm } from "../validator/handleVali.js";
import { RenderModal } from "./web.js";
const ModalWrapper = new bootstrap.Modal(
  document.getElementById("modal-render")
);
const ModalWrapperRender = document.querySelector("#modal-render");
const TbodyRender = document.querySelector("#t-body-render-data");
const SortApp = document.querySelector("#select-xap-xep");
const SortAppName = document.querySelector("#select-xap-xep-name");
const resetModal = document.querySelector("#reset-modal");
const AddUserBtnToggleModal = document.querySelector("#add-user-toggle-modal");

// Lắng nghe sự kiện khi modal ẩn đi
ModalWrapperRender.addEventListener("hide.bs.modal", function (event) {
  ModalWrapperRender.dataset.edit = "false";
});

AddUserBtnToggleModal.addEventListener("click", () => {
  RenderModal();
  ModalWrapper.show();
});

// khoi tao mot doi tuong
const listPerson = new ListPerson();

export const handleChangeSelect = (type, RenderAuto) => {
  if (type === "null") {
    alert("Vui lòng chọn lựa chọn khác!");
    return;
  }

  if (type === "student") {
    RenderAuto.innerHTML = `
        <div>
            <label for="diem-toan" class="form-label">Nhập điểm Toán</label>
            <input type="text" class="form-control" id="diem-toan" placeholder="Điểm Toán">
        </div>
        <div>
            <label for="diem-ly" class="form-label">Nhập điểm Lý</label>
            <input type="text" class="form-control" id="diem-ly" placeholder="Điểm Lý">
        </div>
        <div>
            <label for="diem-hoa" class="form-label">Nhập điểm Hóa</label>
            <input type="text" class="form-control" id="diem-hoa" placeholder="Điểm Hóa">
        </div>

        `;
  } else if (type === "employee") {
    RenderAuto.innerHTML = `
        <div>
            <label for="so-ngay-lam-viec" class="form-label">Nhập số ngày làm việc</label>
            <input type="text" class="form-control" id="so-ngay-lam-viec" placeholder="Số ngày làm việc">
        </div>
        <div>
            <label for="luong-theo-ngay" class="form-label">Nhập lương theo ngày</label>
            <input type="text" class="form-control" id="luong-theo-ngay" placeholder="Lương theo ngày">
        </div>
        `;
  } else if (type === "customer") {
    RenderAuto.innerHTML = `
        <div>
            <label for="ten-cong-ty" class="form-label">Nhập tên công ty</label>
            <input type="text" class="form-control" id="ten-cong-ty" placeholder="Tên công ty">
        </div>
        <div>
            <label for="tri-gia-hoa-don" class="form-label">Nhập trị giá hóa đơn</label>
            <input type="text" class="form-control" id="tri-gia-hoa-don" placeholder="Trị giá hóa đơn">
        </div>
        <div>
            <label for="danh-gia" class="form-label">Nhập đánh giá</label>
            <input type="text" class="form-control" id="danh-gia" placeholder="Đánh giá">
        </div>
        `;
  }
};

export const handleSubmit = (e, ModalRenderBody, type = "submit") => {
  if (type == "submit") {
    e.preventDefault();
  }

  const selectElement = ModalRenderBody.querySelector(
    "#select-loai-nguoi-dung"
  );
  const checkWP = validateForm();

  if (!checkWP) {
    return;
  }

  if (selectElement.value === "student") {
    const check = validateForm(["diem-toan", "diem-ly", "diem-hoa"]);

    if (!check) {
      return;
    }

    const Elements = handleGetElementByID([
      "name-user",
      "address-user",
      "id-user",
      "email-user",
      "diem-toan",
      "diem-ly",
      "diem-hoa",
    ]);

    let hoTen = Elements[0].value;
    let diaChi = Elements[1].value;
    let ma = Elements[2].value;
    let email = Elements[3].value;
    let toan = Elements[4].value;
    let ly = Elements[5].value;
    let hoa = Elements[6].value;

    const StudentAdd = new Student(
      hoTen,
      diaChi,
      ma,
      email,
      toan,
      ly,
      hoa,
      "student"
    );

    if (type == "submit") {
      listPerson.themPerson(StudentAdd);
      ModalWrapper.hide();
      handleRenderTable();
    } else {
      handleDumpDataUpdate(StudentAdd);
    }
  }

  if (selectElement.value === "employee") {
    const check = validateForm(["so-ngay-lam-viec", "luong-theo-ngay"]);

    if (!check) {
      return;
    }

    const Elements = handleGetElementByID([
      "name-user",
      "address-user",
      "id-user",
      "email-user",
      "so-ngay-lam-viec",
      "luong-theo-ngay",
    ]);

    let hoTen = Elements[0].value;
    let diaChi = Elements[1].value;
    let ma = Elements[2].value;
    let email = Elements[3].value;
    let soNgayLamViec = Elements[4].value;
    let luongTheoNgay = Elements[5].value;

    const employee = new Employee(
      hoTen,
      diaChi,
      ma,
      email,
      soNgayLamViec,
      luongTheoNgay,
      "employee"
    );

    if (type == "submit") {
      listPerson.themPerson(employee);
      ModalWrapper.hide();
      handleRenderTable();
    } else {
      handleDumpDataUpdate(employee);
    }
  }

  if (selectElement.value === "customer") {
    const check = validateForm(["ten-cong-ty", "tri-gia-hoa-don", "danh-gia"]);

    if (!check) {
      return;
    }

    const Elements = handleGetElementByID([
      "name-user",
      "address-user",
      "id-user",
      "email-user",
      "ten-cong-ty",
      "tri-gia-hoa-don",
      "danh-gia",
    ]);

    let hoTen = Elements[0].value;
    let diaChi = Elements[1].value;
    let ma = Elements[2].value;
    let email = Elements[3].value;
    let tenCongTy = Elements[4].value;
    let triGiaHoaDon = Elements[5].value;
    let danhGia = Elements[6].value;

    const customer = new Customer(
      hoTen,
      diaChi,
      ma,
      email,
      tenCongTy,
      triGiaHoaDon,
      danhGia,
      "customer"
    );

    if (type == "submit") {
      listPerson.themPerson(customer);
      ModalWrapper.hide();
      handleRenderTable();
    } else {
      handleDumpDataUpdate(customer);
    }
  }
};

const handleGetElementByID = (ID = []) => {
  let elements = [];
  if (ID.length === 0) {
    alert("Vui lòng truyền ID dưới mảng!");
    return;
  }

  elements = ID.map((item) => document.getElementById(`${item}`));
  return elements;
};

export function handleRenderTable(listRender) {
  const Users = listRender ? listRender : listPerson.persons;
  if (!Users || Users.length === 0) {
    TbodyRender.innerHTML = `
            <tr>
                <th scope="row" colspan="11" class="text-center">Chưa có người dùng</th>
            </tr>
            `;
  } else {
    let dataBuilder = Users.map((item) => {
      return `
                <tr>
                    <th scope="row">${item.ma}</th>
                    <td>${item.loai}</td>
                    <td>${item.hoTen}</td>
                    <td>${item.diaChi}</td>
                    <td>${item.email}</td>
                    <td>${
                      item.loai === "employee"
                        ? item.tongLuong
                        : "Chỉ áp dụng cho employee"
                    }</td>
                    <td>${
                      item.loai === "student"
                        ? Number(item.tb).toFixed(2)
                        : "Chỉ áp dụng cho student"
                    }</td>
                    <td>${
                      item.loai === "customer"
                        ? item.tenCongTy
                        : "Chỉ áp dụng cho customer"
                    }</td>
                    <td>
                    ${
                      item.loai === "customer"
                        ? item.triGiaHoaDon
                        : "Chỉ áp dụng cho customer"
                    }
                    </td>
                    <td>
                    ${
                      item.loai === "customer"
                        ? item.danhGia
                        : "Chỉ áp dụng cho customer"
                    }
                    </td>
                    <td class="d-inline-flex">
                        <button
                            class="btn btn-danger btn-trash-utr"
                            data-id="${item.ma}"
                        >
                            <i
                                class="fa-solid fa-trash"
                            ></i>
                        </button>
                        <button
                            data-id="${item.ma}"
                            class="btn btn-primary mx-2 btn-update-utr"
                        >
                            <i
                                class="fa-solid fa-pen-to-square"
                            ></i>
                        </button>
                    </td>
                </tr>

                `;
    });

    TbodyRender.innerHTML = dataBuilder.join(" ");
    const deleteButtons = document.querySelectorAll(".btn-trash-utr");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const ma = button.dataset.id;
        handleClickDelete(ma);
      });
    });

    const updateButtons = document.querySelectorAll(".btn-update-utr");
    updateButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const ma = button.dataset.id;
        handleUpdateUser(ma);
      });
    });
  }
}
// lần đầu vào render
handleRenderTable();

function handleClickDelete(ma) {
  const check = confirm("Are you sure you want to delete");

  if (!check) {
    return;
  }

  listPerson.xoaPerson(ma);
  handleRenderTable();
}

function handleDumpDataUpdate(person) {
  listPerson.capNhatPerson(person);
  handleRenderTable();
  ModalWrapper.hide();
}

function handleUpdateUser(ma) {
  ModalWrapperRender.setAttribute("data-edit", "true");
  ModalWrapper.show();
  RenderModal();

  const listUser = listPerson.persons;

  if (listUser && listUser.length > 0) {
    const personUpdate = listUser.find((item) => {
      return item.ma == ma;
    });

    if (personUpdate) {
      const valueUserUpdate = [
        personUpdate.hoTen,
        personUpdate.diaChi,
        personUpdate.ma,
        personUpdate.email,
        personUpdate.loai,
      ];

      const elements = handleGetElementByID([
        "name-user",
        "address-user",
        "id-user",
        "email-user",
        "select-loai-nguoi-dung",
      ]);

      elements[2].setAttribute("disabled", "disabled");

      elements.forEach((item, index) => {
        item.value = valueUserUpdate[index];
      });

      const loai = personUpdate.loai;
      const RenderAuto = document.querySelector("#render-auto-cate");
      handleChangeSelect(loai, RenderAuto);

      if (loai == "student") {
        const valueStudent = [
          personUpdate.toan,
          personUpdate.ly,
          personUpdate.hoa,
        ];

        const elementStudent = handleGetElementByID([
          "diem-toan",
          "diem-ly",
          "diem-hoa",
        ]);
        elementStudent.forEach((item, index) => {
          item.value = valueStudent[index];
        });
      }

      if (loai == "employee") {
        const valueEmployee = [
          personUpdate.soNgayLamViec,
          personUpdate.luongTheoNgay,
        ];

        const elementEmployee = handleGetElementByID([
          "so-ngay-lam-viec",
          "luong-theo-ngay",
        ]);
        elementEmployee.forEach((item, index) => {
          item.value = valueEmployee[index];
        });
      }

      if (loai == "customer") {
        const valueCustomer = [
          personUpdate.tenCongTy,
          personUpdate.triGiaHoaDon,
          personUpdate.danhGia,
        ];

        const elementCustomer = handleGetElementByID([
          "ten-cong-ty",
          "tri-gia-hoa-don",
          "danh-gia",
        ]);
        elementCustomer.forEach((item, index) => {
          item.value = valueCustomer[index];
        });
      }
    }
  }
}

function handleChangeSelectSort(e) {
  if (e.target.value === "all") {
    handleRenderTable();
  }

  if (e.target.value === "student") {
    handleRenderTable(listPerson.locTheoLoaiNguoiDung("student"));
  }

  if (e.target.value === "employee") {
    handleRenderTable(listPerson.locTheoLoaiNguoiDung("employee"));
  }

  if (e.target.value === "customer") {
    handleRenderTable(listPerson.locTheoLoaiNguoiDung("customer"));
  }
}

let userSortName = [...listPerson.persons];
function handleChangeSelectSortName(e) {
  if (e.target.value === "all") {
    handleRenderTable(userSortName);
  } else {
    handleRenderTable(listPerson.sapXepTheoTen());
  }
}

SortApp.addEventListener("change", handleChangeSelectSort);
SortAppName.addEventListener("change", handleChangeSelectSortName);
