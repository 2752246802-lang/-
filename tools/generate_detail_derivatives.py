from pathlib import Path
import shutil

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE_FOLDERS = ("内贸详情页", "国际站详情页", "店铺首页")
OUTPUT_ROOT = ROOT / "optimized-details"
MAX_FULL_WIDTH = 1440
PREVIEW_WIDTH = 64


def resize_to_width(image: Image.Image, width: int) -> Image.Image:
    if image.width <= width:
        return image.copy()
    height = round(image.height * width / image.width)
    return image.resize((width, height), Image.Resampling.LANCZOS)


def save_webp(image: Image.Image, destination: Path, quality: int) -> None:
    destination.parent.mkdir(parents=True, exist_ok=True)
    has_alpha = "A" in image.getbands()
    output = image.convert("RGBA" if has_alpha else "RGB")
    output.save(destination, "WEBP", quality=quality, method=6)


def main() -> None:
    processed = 0
    for folder_name in SOURCE_FOLDERS:
        source_root = ROOT / folder_name
        for source in source_root.rglob("*_meitu.webp"):
            relative_path = source.relative_to(ROOT)
            full_destination = OUTPUT_ROOT / "high" / relative_path
            preview_destination = OUTPUT_ROOT / "preview" / relative_path

            with Image.open(source) as original:
                full_image = resize_to_width(original, MAX_FULL_WIDTH)
                preview_image = resize_to_width(original, PREVIEW_WIDTH)
                save_webp(full_image, full_destination, quality=92)
                save_webp(preview_image, preview_destination, quality=30)

            # Re-encoding a source image that is already within the target
            # dimensions can occasionally make it larger. Preserve the smaller
            # original in that case, while previews remain lightweight.
            if full_destination.stat().st_size >= source.stat().st_size:
                shutil.copy2(source, full_destination)

            processed += 1
            print(f"[{processed}] {relative_path}")

    print(f"Generated {processed} high-quality images and previews.")


if __name__ == "__main__":
    main()
