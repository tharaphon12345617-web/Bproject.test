export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 px-6 md:grid-cols-3">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-3">BProfessional</h2>
          <p className="text-gray-300">Empowering organizations through innovation, strategic consulting, and digital excellence.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Navigation</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-gray-300">Email: contact@bprofessional.com</p>
          <p className="text-gray-300">Phone: +66 92 123 4567</p>
          <p className="text-gray-300">Bangkok, Thailand</p>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-10">© 2026 BPROFESSIONAL. All rights reserved.</p>
    </footer>
  );
}