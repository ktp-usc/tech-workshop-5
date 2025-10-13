import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const photos = [
    { id: 1, src: "/images/reef-1.jpg", alt: "Coral reef 1" },
    { id: 2, src: "/images/reef-2.jpg", alt: "Coral reef 2" },
    { id: 3, src: "/images/reef-3.jpg", alt: "Coral reef 3" },
    { id: 4, src: "/images/reef-4.jpg", alt: "Coral reef 4" },
    { id: 5, src: "/images/reef-5.jpg", alt: "Coral reef 5" },
    { id: 6, src: "/images/reef-6.jpg", alt: "Coral reef 6" },
];

export default function ImageCarouselDemo() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="relative mx-auto max-w-6xl w-full">
                <h1 className="text-3xl font-bold mb-4 text-center">Image Carousel Demo</h1>
                <Carousel className="w-full">
                    <CarouselContent>
                        {photos.map((p) => (
                            // md:basis-1/2 → at the medium breakpoint (≥768px), each slide takes up half the width (so 2 per row).
                            // lg:basis-1/3 → at the large breakpoint (≥1024px), each slide takes up one-third the width (so 3 per row).
                            <CarouselItem key={p.id} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-xl">
                                        <Image src={p.src} alt={p.alt} fill className="object-cover" />
                                    </AspectRatio>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {
                    // absolute → positions the buttons absolutely within the relative parent.
                    // left-2 / right-2 → offsets them 0.5rem from the left/right edge.
                    // top-1/2 → positions them halfway down vertically.
                    // -translate-y-1/2 → moves them up by 50% of their height, centering them perfectly vertically.
                    // z-10 → ensures they appear above images.
                    }
                    <CarouselPrevious aria-label="Previous" className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                    <CarouselNext aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
                </Carousel>
            </div>
        </div>
    );
}
