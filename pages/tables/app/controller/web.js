import { Student } from "../model/oop.js";
import { handleChangeSelect, handleSubmit } from "./handle.js";

export function RenderModal() {
  // lay cac phan tu trong DOM
  const ModalRenderBody = document.querySelector("#modal-render-body");
  const ModalWrapperRender = document.querySelector("#modal-render");
  const TitleModal = document.querySelector("#modal-title-id");
  ModalRenderBody.innerHTML = `
     <form>
         <div class="container">
             <div class="row">
                 <div class="mb-3 col-6">
                     <label for="id-user" class="form-label">Nhập Mã Số</label>
                     <input type="text" class="form-control" id="id-user" placeholder="1231">
                 </div>
                 <div class="mb-3 col-6">
                     <label for="name-user" class="form-label">Nhập họ và tên</label>
                     <input type="text"  class="form-control" id="name-user" placeholder="eg:Nguyễn Văn A">
                 </div>
                 <div class="mb-3 col-12">
                     <label for="email-user" class="form-label">Nhập email</label>
                     <input type="text"  class="form-control" id="email-user" placeholder="email@gmail.com">
                 </div>
                 <div class="mb-3 col-12">
                     <label for="address-user" class="form-label">Nhập địa chỉ của bạn</label>
                     <input type="text"  class="form-control" id="address-user" placeholder="Hà Nội">
                 </div>
                 <div class="mb-3 col-12">
                     <label class="form-label">Chọn loại người dùng</label>
                     <select  class="form-control" id="select-loai-nguoi-dung">
                     <option class="text-center" value="null">--- Chọn loại người dùng ---</option>
                     <option class="text-center" value="student">Học viên</option>
                     <option class="text-center" value="employee">Nhân viên</option>
                     <option class="text-center" value="customer">Khách hàng</option>
                 </select>

                 </div>
                 <div class="col-12 mb-3" id="render-auto-cate"></div>
                 <div class="col-12">
                     <button type="submit" id="create-user-btn" class="ms-auto btn btn-primary">Tạo Người Dùng</button>
                 </div>
                 <div class="col-12">
                 <button type="button" id="edit-user-btn" class="ms-auto btn btn-primary">Chỉnh Sửa</button>
             </div>
             </div>
         </div>
     </form>
     `;

  const SelectCate = ModalRenderBody.querySelector("select");
  const RenderAuto = ModalRenderBody.querySelector("#render-auto-cate");
  const FormElement = ModalRenderBody.querySelector("form");
  const isEdit = ModalWrapperRender.getAttribute("data-edit");
  const BtnEditSubmitUser = ModalRenderBody.querySelector("#edit-user-btn");
  const BtnCreateSubmitUser = ModalRenderBody.querySelector("#create-user-btn");

  console.log(isEdit);

  if (isEdit == "true") {
    BtnCreateSubmitUser.style.display = "none";
    BtnEditSubmitUser.style.display = "block";
    TitleModal.innerHTML = "Chỉnh Sửa Người Dùng";
  } else {
    BtnCreateSubmitUser.style.display = "block";
    BtnEditSubmitUser.style.display = "none";
    TitleModal.innerHTML = "Thêm Mới Người Dùng";
  }

  RenderAuto.innerHTML = "";

  if (SelectCate && RenderAuto) {
    SelectCate.addEventListener("change", (e) => {
      handleChangeSelect(e.target.value, RenderAuto);
    });
  }

  FormElement.addEventListener("submit", (e) => {
    handleSubmit(e, ModalRenderBody);
  });

  BtnEditSubmitUser.onclick = (e) => {
    handleSubmit(e, ModalRenderBody, "edit");
  };
}
