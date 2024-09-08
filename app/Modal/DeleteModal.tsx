'use client';

import React from "react";
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Textarea } from '@nextui-org/react';

interface DeleteModalProps {
    showFlag: boolean;
    ChangeFlag: () => void;
    onDelete: () => void;
    templateNumber: number;
}

export const DeleteModal: React.FC<DeleteModalProps> = (props) => {
    const onChangeModal = () => {
        props.ChangeFlag();
    };

    const handleDelete = () => {
        props.onDelete();
        props.ChangeFlag();
    };

    return (
        <>
            <Modal isOpen={props.showFlag} onOpenChange={onChangeModal}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">テンプレートを削除</ModalHeader>
                            <ModalBody className="items-center justify-center">
                                対象: テンプレート{props.templateNumber}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    キャンセル
                                </Button>
                                <Button color="primary" onPress={handleDelete}>
                                    削除
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};
