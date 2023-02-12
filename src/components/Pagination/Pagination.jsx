import React, {useEffect, useRef} from "react"
import "./Pagination.css"

export default function Pagination() {
  const pagEl = useRef();
  let totalPages = 20;
  let page = 10;

  useEffect(() => {
    pagEl.current.innerHTML = createPagination(totalPages, page);
  }, [pagEl.current]);

  function createPagination(totalPages, page){
    let liTag = '';
    let active;
    let beforePage = page - 1;
    let afterPage = page + 1;
    if(page > 1) {
      liTag += `<li class="btn prev" onClick="createPagination(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i> Trước</span></li>`;
    }
    if(page > 2) {
      liTag += `<li class="first numb" onClick="createPagination(totalPages, 1)"><span>1</span></li>`;
      if(page > 3){
        liTag += `<li class="dots"><span>...</span></li>`;
      }
    }
    if (page === totalPages) {
      beforePage = beforePage - 2;
    } else if (page === totalPages - 1) {
      beforePage = beforePage - 1;
    }
    if (page === 1) {
      afterPage = afterPage + 2;
    } else if (page === 2) {
      afterPage  = afterPage + 1;
    }
    for (let plength = beforePage; plength <= afterPage; plength++) {
      if (plength > totalPages) {
        continue;
      }
      if (plength === 0) {
        plength = plength + 1;
      }
      if(page === plength){
        active = "active";
      }
      else {
        active = "";
      }
      liTag += `<li class="numb ${active}" onClick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
    }
    if(page < totalPages - 1) {
      if(page < totalPages - 2) {
        liTag += `<li class="dots"><span>...</span></li>`;
      }
      liTag += `<li class="last numb" onClick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
    }
    if (page < totalPages) {
      liTag += `<li class="btn next" onClick="createPagination(totalPages, ${page + 1})"><span>Sau <i class="fas fa-angle-right"></i></span></li>`;
    }
    pagEl.current.innerHTML = liTag;
    return liTag;
  }

  return (
    <div className="pagination">
      <ul ref={pagEl}>

      </ul>
    </div>
  );
}
