'use client';

import React from "react";
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Textarea } from '@nextui-org/react';

export const RegModal = (props: any) => {
    const onChangeModal = () => {
        props.ChangeFlag();
    };

    // Handle Register button click
    const handleRegister = () => {
        props.onRegister(); // Call the function passed from DefaultModal to add a template
        props.ChangeFlag(); // Close the modal after registering
    };

    return (
        <>
            <Modal isOpen={props.showFlag} onOpenChange={onChangeModal}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">テンプレートを登録</ModalHeader>
                            <ModalBody className="items-center justify-center">
                                <Textarea
                                    label="プロンプト"
                                    labelPlacement="outside"
                                    placeholder="プロンプトを入力"
                                    className=""
                                />
                                <Textarea
                                    label="チューリングパラメーター"
                                    labelPlacement="outside"
                                    placeholder="チューリングパラメーターを入力"
                                    className="mt-3"
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    キャンセル
                                </Button>
                                {/* Use the handleRegister function to register the template */}
                                <Button color="primary" onPress={handleRegister}>
                                    登録
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};
