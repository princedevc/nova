import { ConversionWidget } from "./components/convert/ConversionWidget";

export default function Home() {
  return (
    <main className="min-h-screen w-full px-6 py-10">
      <div className="mx-auto flex w-full justify-center">
        <ConversionWidget />
      </div>
    </main>
  );
}
