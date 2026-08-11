(() => {
  const logoUrl = "bright-haus-logo.png";
  const style = document.createElement("style");
  style.textContent = `
    .brand-logo {
      width: 82px;
      height: 66px;
      flex: 0 0 82px;
      background-image: url("${logoUrl}");
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
    .hero-logo {
      background-image: url("${logoUrl}");
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      filter: drop-shadow(0 16px 28px rgba(13, 38, 61, .16));
    }
    .hero-art {
      background:
        radial-gradient(circle at 50% 36%, rgba(55, 174, 242, .18), transparent 38%),
        linear-gradient(150deg, #eef8ff, #c8e7f7 58%, #93cfea);
    }
    @media (max-width: 680px) {
      .brand-logo {
        width: 70px;
        height: 58px;
        flex-basis: 70px;
      }
    }
  `;
  document.head.appendChild(style);
})();
