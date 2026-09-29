import React from 'react';

interface TehriLogoProps {
  variant?: 'circular' | 'wordmark' | 'monogram';
  className?: string;
  color?: string; // for wordmark
  textColor?: string;
  circleColor?: string;
}

export const TehriLogo: React.FC<TehriLogoProps> = ({
  variant = 'wordmark',
  className = 'h-7',
  color = 'currentColor',
  textColor = '#F8F5EF',
  circleColor = '#98323F',
}) => {
  if (variant === 'circular') {
    return (
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="TEHRI official logo"
      >
        {/* Deep wine / burgundy circle identical to official mark */}
        <circle cx="200" cy="200" r="195" fill={circleColor} />
        
        {/* Custom Couture TEHRI lettering */}
        <g fill={textColor}>
          {/* T */}
          <path d="M 68 148 L 126 148 C 127 154 125 158 122 160 L 103 160 L 103 234 L 112 235 L 112 238 L 84 238 L 84 235 L 93 234 L 93 160 L 74 160 C 70 157 68 153 68 148 Z" />
          
          {/* E */}
          <path d="M 136 148 C 158 147 178 152 186 166 C 182 168 178 168 173 168 C 160 168 152 161 146 156 L 146 190 C 156 186 169 188 178 193 C 172 196 164 197 155 198 L 146 199 L 146 226 C 154 227 167 225 178 217 C 180 223 182 229 185 235 C 170 241 150 242 136 238 L 136 148 Z" />
          
          {/* H with sensual arched bridge */}
          <path d="M 194 148 L 204 148 L 204 190 C 213 182 225 181 234 186 C 242 191 245 200 246 211 L 246 238 L 236 238 L 236 212 C 235 204 231 198 223 197 C 215 196 208 202 204 209 L 204 238 L 194 238 L 194 148 Z" />
          
          {/* R with sweeping couture flare */}
          <path d="M 256 148 L 284 148 C 298 148 309 157 308 172 C 308 184 299 193 287 195 C 294 201 301 210 307 222 C 314 235 321 240 331 240 C 324 243 315 244 308 240 C 298 235 292 222 284 207 C 279 198 274 196 266 196 L 266 238 L 256 238 L 256 148 Z M 266 156 L 266 188 L 283 188 C 293 188 298 181 298 172 C 298 163 293 156 283 156 L 266 156 Z" />
          
          {/* I with razor silhouette */}
          <path d="M 338 148 L 348 148 L 348 225 C 348 232 344 238 340 241 L 338 241 L 338 148 Z" />
        </g>
      </svg>
    );
  }

  if (variant === 'monogram') {
    return (
      <div className={`relative flex items-center justify-center rounded-full bg-[#98323F] text-[#F8F5EF] ${className}`}>
        <span className="font-serif italic font-medium text-lg leading-none select-none tracking-tight">
          T
        </span>
      </div>
    );
  }

  // Wordmark variant (scalable, crisp typography)
  return (
    <div className={`inline-flex items-center gap-1 select-none font-serif tracking-[0.22em] font-medium uppercase ${className}`} style={{ color }}>
      <span className="tracking-[0.28em] text-current font-serif font-light">TEHRI</span>
    </div>
  );
};
