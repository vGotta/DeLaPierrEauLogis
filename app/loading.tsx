export default function Loading() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="loader" aria-label="Chargement en cours..." />
      <style>{`
        .loader {
          width: 40px;
          height: 40px;
          border: 3px solid var(--color-gray-light);
          border-top-color: var(--color-blue);
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}
