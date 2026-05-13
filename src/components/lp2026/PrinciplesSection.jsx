export function PrinciplesSection() {
  return (
    <section id="prinsip" className="bg-tk-surface-container-low py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-10 text-center md:mb-16">
          <span className="font-tk-body text-tk-label-md mb-3 block uppercase tracking-widest text-tk-secondary md:mb-4">
            Nilai Utama Kami
          </span>
          <h2 className="font-tk-headline text-tk-headline-lg text-tk-primary">
            Prinsip Keberkahan Tata Kreasi
          </h2>
        </div>
        <div className="grid h-auto grid-cols-1 gap-3 sm:gap-4 md:h-[600px] md:grid-cols-4 md:grid-rows-2">
          <div className="group relative min-h-[220px] overflow-hidden rounded-2xl bg-tk-primary-container sm:min-h-[260px] md:col-span-2 md:min-h-0">
            <img
              alt="Interior hunian modern dengan pencahayaan alami dan nuansa tenang"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7k-JEsKQoFcSp2jYVFr1N8oBhQI2cO5ZdbF1mSkMx3GNGaGXXnEwvbnS2rF6Zk9bS6GESFJ0SQXU4L_ociHJEXzLlXOMr-fgedJ3eJEySAdq2DyY4wwLBh1uln6qSmG1WXMkJd4XLfRzkm0ufZdgE1hZsiHpNDmEuaIzLeYvhbSYuCoTG8bXspa5yeueqIwoTiT28fd-uq80WaJPmAnxasKeI-i4gQfXkXPJrsi3j7rEHSZnA2dfPjlY6UOTT-9oSt07TNUNnxyY"
              className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="relative z-10 flex h-full flex-col justify-end p-5 text-white sm:p-6 md:p-8">
              <h4 className="font-tk-headline text-tk-headline-sm mb-2">Tanpa Riba</h4>
              <p className="font-tk-body text-tk-body-md text-white/80">
                Harga cash dan kredit sama, tanpa bunga sepersen pun.
              </p>
            </div>
          </div>

          <div className="group relative min-h-[200px] overflow-hidden rounded-2xl bg-tk-secondary sm:min-h-[240px] md:min-h-0">
            <img
              alt="Suasana musyawarah tenang—meja diskusi dengan cahaya hangat, melambangkan solusi tanpa denda"
              src={`${process.env.PUBLIC_URL || ""}/images/principles-tanpa-denda-bg.png`}
              className="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="relative z-10 flex h-full flex-col justify-end p-4 text-white sm:p-6">
              <h4 className="font-tk-headline text-tk-headline-sm mb-2">Tanpa Denda</h4>
              <p className="font-tk-body text-tk-body-md text-white/80">
                Solusi musyawarah jika terjadi kendala pembayaran.
              </p>
            </div>
          </div>

          <div className="group relative min-h-[200px] overflow-hidden rounded-2xl bg-tk-primary sm:min-h-[240px] md:min-h-0">
            <img
              alt="Eksterior rumah modern pada senja"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-yuyRlUGsKMBbODFYeVxXMIXy-r-DnTefTBZK9EEdixEvTgCn9mVcbqO9PGeY96dnGUq8LhT_xG6DF8Agq5LIye4jVkc3jQ1IxB9PW3kYGFitNDH42Tc9JfRxm7CUJX6jqL-O9a_givaWYEjCGTw2jNh43ZlkdxlYhBVNY7iEMuSWztCQRMs0uylGIASY_2St9Ac3hQm1Q_1a-E-xzRmdQwgO-BIkXcXcji30_eMtCddEMPP-O0jYxFgmIPtSXy-t_qm_GEwzFCs"
              className="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="relative z-10 flex h-full flex-col justify-end p-4 text-white sm:p-6">
              <h4 className="font-tk-headline text-tk-headline-sm mb-2">Tanpa Sita</h4>
              <p className="font-tk-body text-tk-body-md text-white/80">
                Hak kepemilikan Anda sepenuhnya terlindungi secara aman.
              </p>
            </div>
          </div>

          <div className="group relative min-h-[220px] overflow-hidden rounded-2xl bg-tk-tertiary sm:min-h-[260px] md:col-span-2 md:min-h-0">
            <img
              alt="Meja kerja dengan blueprint dan perencanaan transparan"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC85J-1DF6AUM8wXMEtN-efvHRmpHK4lV45Nj9XD81FBeIGZb5gc15vZQlqmxIHc1hzIjsz95X9JQ4zScat_sWX6B9N6L7XAJG5AqyCUcbuu400rD0RMAynqvytx__iSgRBXywJJCRX4_UniYYUs4dvDYCmDYvRkoU66TCvTKguQzYEVobTH4xgeVpG5cChLbT97nltjNVWIcIlrH--bMEsOplZILcki7xY75Rfj_uCX-u_PHdNRprAN0NKoQQ3aIXeQWnZrp2zspU"
              className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="relative z-10 flex h-full flex-col justify-end p-5 text-white sm:p-6 md:p-8">
              <h4 className="font-tk-headline text-tk-headline-sm mb-2">Akad Halal</h4>
              <p className="font-tk-body text-tk-body-md text-white/80">
                Setiap transaksi didasari akad yang sesuai dengan syariat Islam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
