'use client';

import React , { useState } from "react";
import { Button,Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  useDisclosure} from '@nextui-org/react';
import { DefaultModal } from "./Modal/DefaultModal";

export default function Home() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>
      <Button color="primary" onClick={onOpen}>
        Button
      </Button>
      <DefaultModal showFlag={isOpen} ChangeFlag={onOpenChange}/>
    </>
  );
}
