import "../styles/globals.css";
import HeaderServer from "@/components/HeaderServer";

export const metadata = {
  title: "Bprofessional Website",
  description: "Professional Safety Officer Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="pt-24">
        <HeaderServer />
        {children}
      </body>
    </html>
  );
}