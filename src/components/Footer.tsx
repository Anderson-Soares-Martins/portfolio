// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="text-center p-4 bg-background border-t-[1px] border-t-primary/10 shadow-md ">
      <p>
        &copy; {new Date().getFullYear()} Anderson Soares Martins. All rights
        reserved.
      </p>
    </footer>
  );
}
