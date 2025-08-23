from PIL import Image
import os
import pillow_avif  # enable AVIF support

# Input folder (images will be replaced here)
input_folder = r"src\assets\products"

# Compression quality (0–100, lower = smaller size)
quality = 50

for filename in os.listdir(input_folder):
    if filename.lower().endswith((".jpg", ".jpeg", ".png")):
        img_path = os.path.join(input_folder, filename)

        try:
            with Image.open(img_path) as img:
                img = img.convert("RGB")

                # Replace extension with .avif
                base = os.path.splitext(filename)[0]
                out_path = os.path.join(input_folder, f"{base}.avif")

                img.save(out_path, "AVIF", quality=quality)
                print(f"✅ Converted: {filename} → {out_path}")

            # Delete original file after successful conversion
            os.remove(img_path)
            print(f"🗑️ Removed original: {img_path}")

        except Exception as e:
            print(f"❌ Error converting {filename}: {e}")
