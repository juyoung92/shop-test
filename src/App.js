import './css/App.css';
import Product from './components/product';
function App() {
  return (
      <div className="App">
        <header className='header'>
          <div className='h-top'>
            <div className='logo'>SURAKSAN</div>
            <div className='search-box'>
              <input type='text' placeholder='찾으시는 물건을 입력해주세요.' />
              <a className="search-btn"></a>
            </div>
            <div className='nav-list'>
              <a className='login-btn'>로그인</a>
              <a className='join-btn'>회원가입</a>
            </div>
          </div>
          <div className='h-bot'>
            <a className='menu-category'>카테고리</a>
            <div className='menu-list'>
              <a className='menu-item'>시발</a>
              <a className='menu-item'>qt</a>
              <a className='menu-item'>메뉴다</a>
              <a className='menu-item'>메뉴다2</a>
              <a className='menu-item'>메뉴다3</a>
            </div>
          </div>

        </header>
        <div className='content'>
          <div className='visual-slide'>
            <div className='slide-list'>
              <div className='slide-item'></div>
            </div>
          </div>

          <div className="section">
            <div className="container">
              <div className="con-item">
                <div className="item-head">
                  <p className="title">오늘 들어온 상품</p>
                  <a className="more-btn">더보기</a>
                </div>
                <div className="item-body">
                  <div className="product-list">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                  </div>
                </div>
              </div>
              <div className="con-item">
                <div className="item-head">
                  <p className="title">진행중인 공동구매</p>
                  <a className="more-btn">더보기</a>
                </div>
                <div className="item-body">
                  <div className="product-list">
                    <div className="product-card">
                      <div className="thumbnail"></div>
                      <div className="info">
                        <div className="left">
                          <div className="left-item d-day">
                            D-00
                          </div>
                          <div className="left-item title">
                            제품이름이다.
                          </div>
                          <div className="left-item num">
                             필요 수량 : <span>2,000개</span>
                          </div>
                          <div className="left-item date">
                            공구기간 : <span>2023.04.22 ~ 05.22</span>
                          </div>
                        </div>
                        <div className="right">
                          <div className="price-box">
                            <p className="sale">-48% off</p>
                            <p className="price">
                              가격 : <span>200,000원</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="con-half">
                <div className="con-item">
                  <div className="item-head">
                    <p className="title">공지사항</p>
                    <a className="more-btn">더보기</a>
                  </div>
                  <div className="item-body">
                    <div className="board-list">
                      <a className="board-item">
                        <p className="title">공지사항 글입니다.</p>
                        <p className="date">2023-07-16</p>
                      </a>
                      <a className="board-item">
                        <p className="title">공지사항 글입니다.</p>
                        <p className="date">2023-07-16</p>
                      </a>
                      <a className="board-item">
                        <p className="title">공지사항 글입니다.</p>
                        <p className="date">2023-07-16</p>
                      </a>
                      <a className="board-item">
                        <p className="title">공지사항 글입니다.</p>
                        <p className="date">2023-07-16</p>
                      </a>
                      <a className="board-item">
                        <p className="title">공지사항 글입니다.</p>
                        <p className="date">2023-07-16</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="con-item">
                  <div className="item-head">
                    <p className="title">커뮤니티</p>
                    <a className="more-btn">더보기</a>
                  </div>
                  <div className="item-body">
                    <div className="board-list">
                      <a className="board-item">
                        <p className="title">커뮤니티 글입니다.</p>
                        <p className="date">2023-07-16</p>
                      </a>
                      <a className="board-item">
                        <p className="title">커뮤니티 글입니다.</p>
                        <p className="date">2023-07-16</p>
                      </a>
                      <a className="board-item">
                        <p className="title">커뮤니티 글입니다.</p>
                        <p className="date">2023-07-16</p>
                      </a>
                      <a className="board-item">
                        <p className="title">커뮤니티 글입니다.</p>
                        <p className="date">2023-07-16</p>
                      </a>
                      <a className="board-item">
                        <p className="title">커뮤니티 글입니다.</p>
                        <p className="date">2023-07-16</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="f-top">
            <div className="container">
              <div className="nav-list">
                <a className="nav-item">고객센터</a>
                <a className="nav-item">이용약관</a>
                <a className="nav-item">개인정보처리방침</a>
                <a className="nav-item">푸터메뉴1</a>
              </div>
            </div>
          </div>
          <div className="f-bot">
            <div className="container">
              <ul className="info">
                <li className="info-item">주식회사 OOO</li>
                <li className="info-item">대표이사 OOO</li>
                <li className="info-item">사업자등록번호 123-45678910</li>
                <li className="info-item">통판매업 신고번호 123-45678-910</li>
              </ul>
              <ul className="info">
                <li className="info-item">서울특별시 노원구 상계동 주소아무거나 들어갑니다.</li>
                <li className="info-item">고객센터 070-1234-5678 공휴일 휴무</li>
              </ul>
              <p className="copyright">
                본 콘텐츠의 저작권은 저자 또는 제공처에 있으며, 이를 무단 이용하는 경우 저작권등에 따라 법적 책임을 질 수 있습니다.<br/>
                companyName, All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
  );
}
export default App;
