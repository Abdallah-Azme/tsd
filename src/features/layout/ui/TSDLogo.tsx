export const TSDLogo = ({
  className = "w-24 h-10",
}: {
  className?: string;
}) => (
  <div className="flex items-center gap-1 group cursor-pointer">
    <div className="relative">
      <svg
        viewBox="0 0 100 40"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* The Orange Arch */}
        <path
          d="M5 18C20 2 80 2 95 18"
          stroke="#f18c22"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* TSD Text - stylized */}
        <text
          x="50%"
          y="35"
          textAnchor="middle"
          fill="#002d5a"
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontWeight: "900",
            fontSize: "28px",
            letterSpacing: "-1px",
          }}
        >
          TSD
        </text>
      </svg>
    </div>
  </div>
);
