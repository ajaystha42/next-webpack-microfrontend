import dynamic from "next/dynamic";
const CatalogPage = dynamic(() => import("shop/pages/catalog"), { ssr: false });

export default CatalogPage;
