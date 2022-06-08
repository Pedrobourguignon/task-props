import { Box, Text, Button, Flex, useDisclosure, List } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ProductsModal } from "../ProductsModal/ProductsModal";

export interface IProducts {
  id: number;
  title: string;
  price: number;
  description: string;
}

export interface ICompany {
  name: string;
  description: string;
  address: string;
  phone: string;
  products: IProducts[];
}

const Products = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState<ICompany[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<IProducts>(
    {} as IProducts
  );
  const [selectedCompany, setSelectedCompany] = useState<ICompany>(
    {} as ICompany
  );
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/empresas/empresas");
      const values = await response.json();
      setData(values);
    };
    getData();
  }, []);

  const handleClick = (product: any, item: any) => {
    setSelectedProduct(product);
    setSelectedCompany(item);
    onOpen();
  };

  return (
    <>
      {data.map((company) => (
        <Box w={1} m={5} key={company.name}>
          {company.products.map((product) => (
            <Button
              m={2}
              key={product.id}
              onClick={() => handleClick(product, company)}
            >
              {product.title}
              <ProductsModal
                isOpen={isOpen}
                onClose={onClose}
                selectedProduct={selectedProduct}
                selectedCompany={selectedCompany}
              />
            </Button>
          ))}
        </Box>
      ))}
    </>
  );
};
export default Products;
