const ITEMS = [
  'HIGHER PRICES',
  'SOCIAL MEDIA GROWTH',
  'BRAND DEALS',
  'SIX FIGURES',
  'REAL BUSINESS',
  'MORE CLIENTS',
]

const TRACK_ITEMS = [...ITEMS, ...ITEMS]

export default function MarqueeTicker() {
  return (
    <div className="bg-primary overflow-hidden w-full py-2 md:py-3">
      <div className="marquee-track whitespace-nowrap text-white font-bold uppercase text-xs md:text-sm tracking-wide">
        {TRACK_ITEMS.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-3 mx-4">
            <span>{item}</span>
            <span aria-hidden="true">★</span>
          </span>
        ))}
      </div>
    </div>
  )
}
