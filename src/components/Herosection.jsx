import React, { useRef, useEffect, useState } from 'react';
import "./css/Hero.css";

import ClientLogos from './ClientLogos';

const Hero = () => {
  return (
    <div className="nex4-container">
      {/* Header */}
      <div className="bg-tint">
        <header className="nex4-header">
          <p className="header-bg">
            <img
              src="/assets/logo/lgr1.png" // Replace with the path to your actual logo
              alt="NEX4 Logo"
              className="mr-3 white-logo"
            />
            <p className="header-text">
              <b>
                は、AWS から “アドバンスドサービスパートナー” の認定を受け、
                AWSの構築・運用・技術コンサルティングまで行う
                プロフェッショナルの技術者集団です。</b>
            </p>
          </p>
        </header>

        {/* Problem Statement */}
        <section class="concern-section">
          <div class="concern-box">
            <h2 class="concern-title">こんなお悩みございませんか？</h2>
            <ul class="concern-list">
              <li>□ システムが老朽化している</li>
              <li>□ システムが原因で業務が非効率になっている</li>
              <li>□ ビジネスチャンスにタイムリーに対応できる環境が整っていない</li>
              <li>□ システム保守やセキュリティアップデートのための人員が足りない</li>
              <li>□ サイバー攻撃によりダウンしたシステムを数時間以内に復旧できない</li>
              <li>□ セキュリティ体制を定期的に監視確認できていない</li>
              <li>□ 使用量／頻度に応じたサーバ台数やコストになっていない</li>
            </ul>
          </div>
          <p class="solution-text">NEX4が解決させて頂きます。</p>
        </section>

        {/* Solution Introduction */}
        <section class="strength-section">
          <div class="strength-box">
            <h2 class="section-title">NEX4の強み</h2>
            <b>
              <p>
                最新のクラウドが提供するモダンな開発環境、<br />
                データプラットフォームやAI機能を使いこなせる。
              </p><br />
              <p>
                従来の企業と異なり、CI/CD環境を作り、<br />
                アジャイルモデル開発でのアプローチを採用。
              </p><br />
              <p>
                IT環境全体の運用と継続的な改善を長期的にサポートできる。
              </p><br />
              <p>
                良質なサービスをリーズナブルに提供できる。
              </p>
            </b>
          </div>
        </section>

        {/* Logos / Partners */}
        <div>
          <ClientLogos />
        </div>

        {/* Product Features */}
        <section className="nex4-section">
          <h3>NEX4の主要機能</h3>
          <ul>
            <li>データの一元管理</li>
            <li>AIモデル開発環境</li>
            <li>ETLの自動化</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="nex4-cta">
          <h2>詳しくはこちら</h2>
          <button>お問い合わせ</button>
        </section>

        {/* Footer */}
        <footer className="nex4-footer">
          <p>株式会社 NEX4 ｜ ビジョンを越える、その先へ</p>
          <div>
            <a href="#">会社情報</a>
            <a href="#">採用情報</a>
            <a href="#">SNS</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Hero;
