'use client';

import React, { useState } from "react";
import { Button, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from '@nextui-org/react';
import { RegModal } from "./RegisterModal";
import { DeleteModal } from "./DeleteModal";
import { TemplateComponent } from "../components/Template";

export const DefaultModal = (props: any) => {
    const { isOpen: RegisOpen, onOpen: RegonOpen, onOpenChange: RegonOpenChange } = useDisclosure();

    const [templates, setTemplates] = useState<number[]>([]);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedTemplateNumber, setSelectedTemplateNumber] = useState<number | null>(null);

    const onChangeModal = () => {
        props.ChangeFlag();
    };

    const addTemplate = () => {
        setTemplates(prevTemplates => [...prevTemplates, prevTemplates.length + 1]);
    };

    const openDeleteModal = (templateNumber: number) => {
        setSelectedTemplateNumber(templateNumber);
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };

    const deleteTemplate = () => {
        if (selectedTemplateNumber !== null) {
            setTemplates(prevTemplates => prevTemplates.filter(number => number !== selectedTemplateNumber));
            closeDeleteModal();
        }
    };

    return (
        <>
            <Modal isOpen={props.showFlag} onOpenChange={onChangeModal}>
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">テンプレートを選択</ModalHeader>
                            <ModalBody>
                                <Button color="primary" onClick={RegonOpen}>
                                    テンプレートを登録
                                </Button>
                                {templates.map((templateNumber) => (
                                    <TemplateComponent
                                        key={templateNumber}
                                        templateNumber={templateNumber}
                                        onDelete={() => openDeleteModal(templateNumber)} // Open delete modal with selected template number
                                    />
                                ))}
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <RegModal showFlag={RegisOpen} ChangeFlag={RegonOpenChange} onRegister={addTemplate} />

            {selectedTemplateNumber !== null && (
                <DeleteModal
                    showFlag={isDeleteModalOpen}
                    ChangeFlag={closeDeleteModal}
                    onDelete={deleteTemplate}
                    templateNumber={selectedTemplateNumber} // Pass the selected template number to display
                />
            )}
        </>
    );
};
