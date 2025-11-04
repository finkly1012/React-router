const About = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md p-6 rounded-xl mt-8 text-center">
      <img
        src="/profile.jpg" // ubah sesuai nama file fotomu
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
      />
      <h2 className="text-2xl font-bold text-blue-700 mb-2">
        Finkly Christina Yohana Manawan
      </h2>
      <p className="text-gray-600 text-lg font-medium mb-3">
        Mahasiswi Sistem Informasi | Universitas Klabat
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Halo! Saya adalah mahasiswi jurusan Sistem Informasi di Universitas
        Klabat. Saya memiliki minat dalam analisis sistem dan pengembangan
        aplikasi berbasis web. Aplikasi ini dibuat sebagai bagian dari
        pembelajaran saya dalam membangun antarmuka web yang interaktif dan
        responsif menggunakan React dan Tailwind CSS.
      </p>

      <hr className="my-5 border-gray-300" />

      <h3 className="text-xl font-semibold text-blue-600 mb-3">
        Informasi Akademik
      </h3>
      <p className="text-gray-700 mb-2">
        <strong>NIM:</strong> 105012310034
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Tingkat:</strong> 3
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Semester:</strong> 5
      </p>

      <h3 className="text-xl font-semibold text-blue-600 mb-3">
        Minat & Tujuan
      </h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Saya tertarik untuk mengembangkan keterampilan di bidang analisis data
        dan perancangan sistem yang efisien. Tujuan saya adalah menjadi seorang{" "}
        <strong>System Analyst</strong> yang mampu merancang solusi digital
        inovatif untuk mendukung kebutuhan organisasi dan masyarakat.
      </p>

      <h3 className="text-xl font-semibold text-blue-600 mb-3">Kontak</h3>
      <p className="text-gray-700">
        Email:{" "}
        <a
          href="mailto:finklychristina@gmail.com"
          className="text-blue-600 hover:underline"
        >
          finklychristina@gmail.com
        </a>
      </p>
    </div>
  );
};

export default About;
