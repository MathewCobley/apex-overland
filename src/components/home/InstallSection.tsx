// ========================================
// File: src/components/home/InstallSection.tsx
// ========================================

export default function InstallSection() {
  return (
    <section className="py-24 px-6 bg-zinc-950 text-center">
      <h2 className="text-3xl font-bold mb-6">
        Professional Installation Available
      </h2>

      <p className="text-gray-400 mb-8 max-w-xl mx-auto">
        We don’t just sell gear — we install it properly. Roof tents, power systems,
        water setups and full overland builds.
      </p>

      <a
        href="/contact"
        className="bg-white text-black px-8 py-3 font-semibold hover:bg-gray-200 transition"
      >
        Start Your Build
      </a>
    </section>
  );
}