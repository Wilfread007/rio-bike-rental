import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const userUploadDir = "/Users/arockiawilfread/.gemini/antigravity-ide/brain/3ca7f174-9efa-4b6a-95db-546fe3ce4039/.user_uploaded";
const publicImagesDir = path.resolve("public/images");

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

// Clean old files
for (const f of fs.readdirSync(publicImagesDir)) {
  fs.unlinkSync(path.join(publicImagesDir, f));
}

const img1 = path.join(userUploadDir, "media_1793072630221.jpg"); // Angled shop entrance with Activas & banner
const img2 = path.join(userUploadDir, "media_1793072630223.jpg"); // Red Royal Enfield bullet with Rio shop
const img3 = path.join(userUploadDir, "media_1793074677216.png"); // Wide frontal shop view with helmets, bikes, and dual banners

// 1. Wide Storefront Image (Frontal view with helmets & fleet)
fs.copyFileSync(img3, path.join(publicImagesDir, "rio-bike-rental-shop-nagercoil.png"));
try {
  execSync(`sips -s format jpeg "${img3}" --out "${path.join(publicImagesDir, "rio-bike-rental-shop-nagercoil.jpg")}"`);
} catch (e) {
  fs.copyFileSync(img3, path.join(publicImagesDir, "rio-bike-rental-shop-nagercoil.jpg"));
}

// 2. Entrance Storefront Image
fs.copyFileSync(img1, path.join(publicImagesDir, "rio-bike-rental-kottar-nagercoil.jpg"));

// 3. Bikes / Royal Enfield Bullet Image
fs.copyFileSync(img2, path.join(publicImagesDir, "bike-rental-nagercoil.jpg"));
fs.copyFileSync(img2, path.join(publicImagesDir, "bullet-rental-nagercoil.jpg"));

// 4. Scooter Rental Image (Activas)
fs.copyFileSync(img1, path.join(publicImagesDir, "scooter-rental-nagercoil.jpg"));

// 5. Open Graph Image
fs.copyFileSync(img1, path.join(publicImagesDir, "rio-bike-rental-og.jpg"));

console.log("All authentic Rio Bike Rental images prepared in public/images/!");
