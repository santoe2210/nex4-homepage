import React from "react";
import "./css/Hero.css";

const Hero = () => {
  return (
     <div className="nexa-container">
      {/* Header */}
      <header className="nexa-header">
        <h1>NEX4</h1>
        <p>
          AIの道具、データ、システムを一緒に。<br />
          最先端の技術で計画、開発、運用を支援します
        </p>
      </header>

      {/* Problem Statement */}
      <section className="nexa-section text-center">
        <h2>こんな言葉を聞いたことはありませんか?</h2>
        <ul>
          <li>AIを使いたいけど、何から始めたら良いか分からない</li>
          <li>AI開発にお金がかかりそうで心配</li>
          <li>社内にデータが散乱している</li>
          <li>データを元に機械学習モデルを作りたい</li>
        </ul>
      </section>

      {/* Solution Introduction */}
      <section className="nexa-solution">
        <h2>NEX4が言葉にしづらいニーズを解決します</h2>
      </section>

      {/* Services */}
      <section className="nexa-section">
        <h3>最適な開発スタイルを定義</h3>
        <p>
          ビジネスの目的や現場の状況を分析して、最適な開発スタイルを定義。AIサービスのプロトタイプを提案します
        </p>
      </section>

      {/* Logos / Partners */}
      <section className="nexa-logos">
        {['Hitachi', 'NTT', 'NEC', 'Fujitsu', 'Canon'].map((brand) => (
          <img key={brand} src={`/logos/${brand}.png`} alt={brand} />
        ))}
      </section>

      {/* Product Features */}
      <section className="nexa-section">
        <h3>NEX4の主要機能</h3>
        <ul>
          <li>データの一元管理</li>
          <li>AIモデル開発環境</li>
          <li>ETLの自動化</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="nexa-cta">
        <h2>詳しくはこちら</h2>
        <button>お問い合わせ</button>
      </section>

      {/* Footer */}
      <footer className="nexa-footer">
        <p>株式会社 NEX4 ｜ ビジョンを越える、その先へ</p>
        <div>
          <a href="#">会社情報</a>
          <a href="#">採用情報</a>
          <a href="#">SNS</a>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
