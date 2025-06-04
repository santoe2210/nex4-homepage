import React, { useState } from 'react';
import './css/Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </button>
        <img src="/nex4-logo.png" alt="NEX4 Logo" className="header-logo" />
      </header>

      <nav className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>プロジェクト事例</li>
          <li>サービス提供領域</li>
          <li>会社紹介</li>
          <li>代表メッセージ</li>
          <li>お問い合わせ</li>
          <li>用語一覧</li>
        </ul>
      </nav>
    </>
  );
}
