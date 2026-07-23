import Image from "next/image";

/**
 * Image slot: renders the image when `src` is set, otherwise a dashed
 * terminal-style placeholder so the layout shows where art will go.
 * Drop files in public/ and set the path in src/content.ts.
 */
export default function ImageSlot({
  src,
  alt,
  label,
  className = "",
  sizes = "(max-width: 768px) 100vw, 768px",
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  sizes?: string;
}) {
  if (!src) {
    return (
      <div aria-hidden className={`img-slot ${className}`}>
        <span>{`// ${label}`}</span>
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}
