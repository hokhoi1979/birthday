import { useState, type CSSProperties } from "react";
import "./App.css";
import couple from "./assets/couple.jpg";
import wife from "./assets/wife.jpg";
const pages = [
  { id: "home", label: "01 / hello" },
  { id: "wish", label: "02 / wishes" },
  { id: "end", label: "03 / forever" },
];

const wishes = [
  "Chúc vợ iu tuổi 24 luôn xinh đẹp, bình an và luôn giữ được nụ cười thật tươi trên môi. Mong mọi điều em mong ước đều dần trở thành hiện thực.",
  "Cảm ơn em vì đã đến bên anh, vì những yêu thương, những hy sinh và cả những ngày bình thường em biến thành thật đặc biệt. Có em là điều may mắn nhất trong cuộc đời anh.",
  "Anh không hứa sẽ làm mọi ngày đều hoàn hảo, nhưng anh hứa sẽ luôn ở bên, lắng nghe, yêu thương và cùng em đi qua mọi vui buồn phía trước.",
];

function App() {
  const [activePage, setActivePage] = useState("home");
  const [isOpened, setIsOpened] = useState(false);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActivePage(id);
  };

  const openWish = () => {
    setIsOpened(true);
    window.setTimeout(() => goTo("wish"), 180);
  };

  return (
    <main className={`birthday-page ${isOpened ? "is-opened" : ""}`}>
      <div className="grain" aria-hidden="true" />
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />
      <div className="stars" aria-hidden="true">
        {Array.from({ length: 18 }, (_, index) => (
          <span key={index} className={`star star-${index + 1}`} />
        ))}
      </div>

      <nav className="topbar">
        <button className="brand" type="button" onClick={() => goTo("home")}>
          <span className="brand-mark">✦</span>
          <span>
            dear<span className="brand-dot">.</span>you
          </span>
        </button>
        <div className="topbar-meta">
          <span className="status-dot" /> một ngày thật đặc biệt
        </div>
      </nav>

      <div className="page-nav" aria-label="Điều hướng các trang">
        {pages.map((page) => (
          <button
            type="button"
            className={activePage === page.id ? "active" : ""}
            key={page.id}
            onClick={() => goTo(page.id)}
          >
            {page.label}
          </button>
        ))}
      </div>

      <section className="page-section hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Birthday letter · 10.11.2002
          </p>
          <h1>
            <span>Chúc mừng sinh nhật</span>
            <em>Vợ iu.</em>
          </h1>
          <p className="hero-description">
            Một ngày thật đặc biệt, vì người con gái anh yêu nhất đã xuất hiện
            trên thế giới này. Chào mừng em đến với tuổi 24 rực rỡ.
          </p>
          <button className="wish-button" type="button" onClick={openWish}>
            <span>Mở lời chúc của bạn</span>
            <span className="button-arrow">↗</span>
          </button>
        </div>
        <div className="hero-art" aria-label="Khung ảnh sinh nhật của bạn">
          <img
            className="hero-image"
            style={{ width: "90%", height: "90%" }}
            src={couple}
            alt="Ảnh kỷ niệm của hai vợ chồng"
          />
          <div className="art-label">
            <span>for you</span>
            <span>with love ✦</span>
          </div>
        </div>
      </section>

      <section
        className={`page-section wish-section ${isOpened ? "wish-card-visible" : ""}`}
        id="wish"
        aria-live="polite"
      >
        <div className="wish-card">
          <div className="card-sparkle">✦</div>
          <p className="card-kicker">a little note for you</p>
          <h2>
            Chúc mừng sinh nhật,
            <br />
            <em>vợ yêu của anh.</em>
          </h2>
          <div className="wish-divider">
            <span>✦</span>
          </div>
          {wishes.map((wish) => (
            <p className="wish-text" key={wish}>
              {wish}
            </p>
          ))}
          <p className="signature">
            — yêu em hôm nay, ngày mai và cả những ngày sau nữa
          </p>
        </div>
        <button
          className="next-link"
          style={{ fontSize: "0.9rem" }}
          type="button"
          onClick={() => goTo("end")}
        >
          còn một điều nữa <span>↓</span>
        </button>
      </section>

      <section className="page-section end-section" id="end">
        <div className="end-copy">
          <p className="eyebrow">
            <span /> 03 / forever
          </p>
          <h2>
            Chúc vợ iu tuổi 24
            <br />
            <em>thật rực rỡ.</em>
          </h2>
          <p>
            Tuổi mới, hành trình mới. Anh mong chúng mình sẽ cùng nhau viết thêm
            thật nhiều chương hạnh phúc, cùng nhau già đi và vẫn yêu nhau như
            những ngày đầu.
          </p>
          <button
            className="wish-button"
            type="button"
            onClick={() => goTo("home")}
          >
            <span>Quay lại từ đầu</span>
            <span className="button-arrow">↗</span>
          </button>
        </div>
        <img
          className="end-image"
          src={wife}
          alt="Ảnh kỷ niệm của hai vợ chồng"
        />
      </section>

      <footer className="footer">
        <span>made with</span>
        <span className="heart">♥</span>
        <span>for my lovely wife</span>
      </footer>

      {isOpened && (
        <div className="confetti" aria-hidden="true">
          {Array.from({ length: 28 }, (_, index) => (
            <i
              key={index}
              style={
                {
                  "--i": index,
                  left: `${(index * 37) % 100}%`,
                } as CSSProperties
              }
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default App;
