import HomeBanner from "./components/HomeBanner";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <HomeBanner />
        </div>
        <div>
          <ProductCard />
        </div>
      </div>
    </>
  );
}
