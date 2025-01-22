import Header from "@/components/Header";
import vazirFont from "@/constants/localFont";
import "@/styles/globals.css";

export const metadata = {
  tilte: {
    template: "%s | بلاگ اپ",
    default: "بلاگ اپ",
  },
  description: "وب اپلیکیشن  مدیریت بلاگ  و نظرات کاربران",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans min-h-screen `}>
        <Header />
        <div className="container xl:max-w-screen-xl "> {children}</div>
      </body>
    </html>
  );
}
