import {
  Box,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  ModalHeader,
  Text,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { ICompany } from "../Products/Products";
interface ICompanyModal {
  isOpen: boolean;
  onClose: () => void;
  selectedCompany: ICompany;
}

export const CompanyModal = (props: ICompanyModal) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { selectedCompany } = props;

  return (
    <>
      <Button onClick={onOpen} mr={52}>
        {selectedCompany.name}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedCompany.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Text fontWeight={"bold"}>Description:</Text>
              <Text>{selectedCompany.description}</Text>
            </Flex>
            <Flex>
              <Text fontWeight={"bold"}>Address:</Text>
              <Text>{selectedCompany.address}</Text>
            </Flex>
            <Flex>
              <Text fontWeight={"bold"}>phone:</Text>
              <Text>{selectedCompany.phone}</Text>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
