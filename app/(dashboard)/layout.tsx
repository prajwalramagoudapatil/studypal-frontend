import SideNav from "@/components/Sidebar/SideNav";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex h-screen bg-slate-950 text-slate-100">
          <SideNav />

          <div className="min-w-0 flex-1">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
