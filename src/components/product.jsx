import React from "react";
function Product() {
    return (
        <div className="product-item">
            <a className="thumbnail">썸네일 이미지</a>
            <div className="info">
                <a className="info-name">제품 이름이다.</a>
                <p className="info-con">제품 내용들어간다. 최대 2줄로 설정 변경 가능</p>
                <p className="info-price">99,000 원</p>
            </div>
        </div>
    )
}

export default Product
