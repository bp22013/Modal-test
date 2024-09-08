'use client';

import { Button, Card, CardBody, Spacer } from '@nextui-org/react';
import React from 'react';
import { MdDelete } from 'react-icons/md';

interface TemplateComponentProps {
    templateNumber: number;
    onDelete: () => void; // Add onDelete prop for deleting the template
}

export const TemplateComponent: React.FC<TemplateComponentProps> = ({ templateNumber, onDelete }) => {
    return (
        <Card>
            <CardBody className='flex'>
                <div className='flex items-center justify-center'>
                    <strong>テンプレート{templateNumber}</strong>
                    <Button color='primary' className='ml-3'>選択</Button>
                    <Spacer x={36} />
                    {/* Delete button to remove the template */}
                    <MdDelete color='red' className='w-6 h-6 cursor-pointer' onClick={onDelete} />
                </div>
            </CardBody>
        </Card>
    );
};
