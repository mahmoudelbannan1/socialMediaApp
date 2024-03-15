import ProductCard from "@/app/components/ProductCard";

const ManyProducts = ({ params }) => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>there are many product:{params.prd} </p>
        <ProductCard></ProductCard>
      </main>
    </>
  );
};

export default ManyProducts;
