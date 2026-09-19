export default function Logo({ className = "w-16 h-16" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 320"
      className={className}
    >
      <g
        fill="currentColor"
        className="text-gray-900 dark:text-white transition-colors duration-300"
      >
        {/* Calligraphic Serif 'R' */}
        <path d="M 148 60 H 180 C 215 60 236 78 236 104 C 236 128 216 142 192 146 L 238 200 H 208 L 168 150 H 168 V 200 H 148 V 60 Z M 168 76 V 134 H 182 C 204 134 216 122 216 104 C 216 86 204 76 182 76 H 168 Z" />

        {/* Curved Leaf Stem */}
        <path
          d="M 145 52 C 144 85 130 135 108 170 C 98 185 88 198 75 208"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Botanical Vine Leaves & Veins */}
        {/* Leaf 1 Top */}
        <path d="M 145 52 C 142 42 135 32 128 26 C 132 38 138 46 145 52 Z" />
        <path d="M 145 52 C 140 40 132 32 128 26" fill="none" stroke="currentColor" strokeWidth="1" />

        {/* Leaf 2 Left upper */}
        <path d="M 139 70 C 122 62 108 62 96 68 C 110 74 124 76 139 70 Z" />
        <path d="M 139 70 C 120 66 104 66 96 68" fill="none" stroke="currentColor" strokeWidth="0.8" />

        {/* Leaf 3 Right upper */}
        <path d="M 136 88 C 150 82 162 84 172 92 C 158 92 146 90 136 88 Z" />
        <path d="M 136 88 C 150 85 162 87 172 92" fill="none" stroke="currentColor" strokeWidth="0.8" />

        {/* Leaf 4 Left mid */}
        <path d="M 128 112 C 108 106 92 110 80 120 C 96 122 112 120 128 112 Z" />
        <path d="M 128 112 C 108 108 94 112 80 120" fill="none" stroke="currentColor" strokeWidth="0.8" />

        {/* Leaf 5 Right mid */}
        <path d="M 122 132 C 138 130 152 136 160 146 C 146 144 132 140 122 132 Z" />
        <path d="M 122 132 C 138 132 150 138 160 146" fill="none" stroke="currentColor" strokeWidth="0.8" />

        {/* Leaf 6 Left lower */}
        <path d="M 112 156 C 90 152 74 160 62 172 C 80 172 96 168 112 156 Z" />
        <path d="M 112 156 C 90 155 76 162 62 172" fill="none" stroke="currentColor" strokeWidth="0.8" />

        {/* Leaf 7 Bottom left */}
        <path d="M 92 182 C 72 186 58 198 50 212 C 66 206 80 198 92 182 Z" />

        {/* Handwritten Cursive "Ranit Saha" Signature */}
        <text
          x="150"
          y="255"
          textAnchor="middle"
          fontFamily="'Dancing Script', 'Great Vibes', 'Caveat', cursive"
          fontSize="34"
          fontWeight="400"
          letterSpacing="1px"
        >
          Ranit Saha
        </text>
      </g>
    </svg>
  );
}