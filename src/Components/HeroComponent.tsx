export default function HeroComponent() {
  return (
    <div style={{ margin: "3rem 1rem" }}>
      <div className="hero-text-container">
        <div>TU SOLUCIÓN INTEGRAL</div>
        <div>DE SERVICIOS</div>
        <div>
          <span className="highlight-blue">PROFESIONALES</span>
        </div>
        <div>
          PARA IMPULSAR TU <span className="highlight">ÉXITO</span>
        </div>
      </div>
      <div
        style={{
          fontSize: "clamp(16px, 4vw, 24px)",
          textAlign: "center",
          marginTop: "3rem",
        }}
      >
        Contamos con una variedad de servicios para mejorar y darle exito a tu
        empresa
      </div>
    </div>
  );
}
