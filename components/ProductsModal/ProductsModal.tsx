import {
  Box,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";

import { CompanyModal } from "../CompanyModal/CompanyModal";

import { IProducts, ICompany } from "../Products/Products";

interface IProductsModal {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct: IProducts;
  selectedCompany: ICompany;
}

export const ProductsModal = (props: IProductsModal) => {
  const { isOpen, onClose } = props;
  const { selectedCompany } = props;
  const { selectedProduct } = props;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg={"none"} />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex w={80}>
              <Text fontWeight={"bold"}>Title:</Text>
              <Text>{selectedProduct.title}</Text>
            </Flex>
            <Flex w={80}>
              <Text fontWeight={"bold"}>Price:</Text>
              <Text>US{selectedProduct.price}</Text>
            </Flex>
            <Flex w={80}>
              <Text fontWeight={"bold"}>Description:</Text>
              <Text>{selectedProduct.description}</Text>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <CompanyModal
              isOpen={isOpen}
              onClose={onClose}
              selectedCompany={selectedCompany}
            ></CompanyModal>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
